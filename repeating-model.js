import {layout as baseLayout,makeRecord,parseRecord,buildXML,date,money,COLORS,FIELDS} from './model.js';
import {diagnostics,fieldForTag} from './lab-model.js';

export const LENGTH=160;
export function repeatLayout(){
 let at=0;const fields=['product','year','account','date','balance','currency'].map(id=>{const f={id,...FIELDS[id],start:at+1,end:at+FIELDS[id].length,color:COLORS[id],group:0,kind:id};at=f.end;return f;});
 for(let period=1;period<=3;period++){at=64+(period-1)*32;for(const [kind,length,label,color] of [['from',8,'Start date',COLORS.date],['to',8,'End date',COLORS.date],['interest',13,'Interest / amount',COLORS.interest]]){fields.push({id:`period${period}_${kind}`,kind,group:period,label:`Period ${period} · ${label}`,length,start:at+1,end:at+length,color});at+=length;}}
 return fields;
}
export function makeRepeating(p){let header=['product','year','account','date','balance','currency'].map(id=>({product:p.code,year:'2026',currency:'DKK',...p.values}[id]).padEnd(FIELDS[id].length,' ')).join('').padEnd(64,' ');return header+[['20260101','20260430','0000000100000'],['20260501','20260831','0000000200000'],['20260901','20261231','0000000300000']].map(parts=>parts.join('')+'   ').join('');}
export function overwriteRepeating(p,raw,id,value){if(raw.length!==LENGTH)throw Error('Restore the 160-character layout before overwriting a field.');const f=repeatLayout().find(f=>f.id===id);if(!f||value.length!==f.length)throw Error(`Use exactly ${f?.length} characters.`);return raw.slice(0,f.start-1)+value+raw.slice(f.end);}
export function analyseRepeating(p,raw,template,previous=makeRepeating(p)){
 const fields=repeatLayout().map(f=>({...f,raw:raw.slice(f.start-1,f.end),value:raw.slice(f.start-1,f.end),xml:raw.slice(f.start-1,f.end),error:null}));
 const errors=[];const add=(f,reason,fix,replacement=null,positions=[])=>{f.error=reason;errors.push({id:f.id,title:f.label+' needs correction',start:f.start,end:f.end,positions,reason,fix,replacement,impact:f.group?`Kontoperiode[${f.group}] cannot be generated.${f.kind==='interest'?' The account total also depends on this amount.':''} The complete XML is held; no period is silently omitted.`:'The complete XML is held until this field is corrected.'});};
 let base=makeRecord(p);for(const f of fields.filter(f=>!f.group)){const original=baseLayout(p).find(x=>x.id===f.id);base=base.slice(0,original.start-1)+f.raw.padEnd(f.length,' ').slice(0,f.length)+base.slice(original.end);}
 const parsedBase=parseRecord(p,base);
 for(const f of fields.filter(f=>!f.group)){const bf=parsedBase.fields.find(x=>x.id===f.id);f.value=bf.value;f.xml=bf.xml;if(bf.error){const e=diagnostics(p,base).find(e=>e.id===f.id);add(f,bf.error,e.fix,e.replacement,e.positions.map(pos=>pos-bf.start+f.start));}}
 for(const f of fields.filter(f=>f.group)){
  try{f.value=f.kind==='interest'?money(f.raw):date(f.raw);f.xml=f.value.replace('.',',');}
  catch(e){const amount=f.kind==='interest',positions=Array.from(f.raw).flatMap((c,i)=>/\d/.test(c)?[]:[f.start+i]);const candidate=amount?f.raw.replace(/O/g,'0'):previous.slice(f.start-1,f.end);let replacement=null;try{amount?money(candidate):date(candidate);replacement=candidate;}catch{}add(f,e.message,amount?'Enter 13 digits with two implied decimals. If O was meant as zero, replace only that character. Blank is not zero.':'Enter a real date as YYYYMMDD. Restore the previous date only if it was intended.',replacement,positions);}
 }
 for(let group=1;group<=3;group++){
  const from=fields.find(f=>f.group===group&&f.kind==='from'),to=fields.find(f=>f.group===group&&f.kind==='to');
  if(!from.error&&!to.error){if(from.value>to.value)add(to,'Period ends before it starts.','Enter an end date on or after this period’s start.');else if(!from.raw.startsWith('2026')||!to.raw.startsWith('2026'))add(from,'This example’s periods must be within 2026.','Use dates within the configured income year.');
   if(group>1){const prior=fields.find(f=>f.group===group-1&&f.kind==='to');if(!prior.error&&from.value<=prior.value)add(from,'This period overlaps the previous period.','Set the start after the previous period’s end. The synthetic layout uses inclusive dates.');}
  }
 }
 const padding=[[46,64],[94,96],[126,128],[158,160]];for(const [start,end] of padding){if(/[^ ]/.test(raw.slice(start-1,end))){errors.push({id:'padding',title:'Reserved padding contains data',start,end,positions:Array.from(raw.slice(start-1,end)).flatMap((c,i)=>c!==' '?[start+i]:[]),reason:'These positions are reserved spaces in this synthetic layout.',fix:'Overwrite this reserved area with spaces without shifting later groups.',replacement:null,impact:'The complete XML is held.'});}}
 if(raw.length!==LENGTH){errors.splice(0,errors.length,{id:'record',title:`${raw.length} characters; expected 160`,start:1,end:Math.max(LENGTH,raw.length),positions:[],reason:'The header is 64 characters, followed by three embedded 32-character groups. A missing character shifts subsequent periods.',fix:'Restore the deleted character at its original position, or restore the previous valid input.',replacement:null,impact:'No XML is generated while group boundaries are unreliable.'});}
 let xml=null;
 if(!errors.length){const amounts=fields.filter(f=>f.kind==='interest'),sum=amounts.reduce((n,f)=>n+BigInt(f.raw),0n),total=`${sum/100n},${String(sum%100n).padStart(2,'0')}`;
  xml=buildXML(p,parsedBase,template).replace(new RegExp(`<${p.amountTag}>[^<]*</${p.amountTag}>`),`<${p.amountTag}>${total}</${p.amountTag}>`);
  xml=xml.replace(/(^[ \t]*)<Kontoperiode>[\s\S]*?^\1<\/Kontoperiode>/gm,(block,indent)=>[1,2,3].map(group=>{
   const get=kind=>fields.find(f=>f.group===group&&f.kind===kind).xml;
   let part=block.replace(new RegExp(`<${p.amountTag}>[^<]*</${p.amountTag}>`),`<${p.amountTag}>${get('interest')}</${p.amountTag}>`);
   const dates=`${indent}  <KontoperiodeOpstartDato>${get('from')}</KontoperiodeOpstartDato>\n${indent}  <KontoperiodeOphørDato>${get('to')}</KontoperiodeOphørDato>\n`;
   // Dates follow the restance/depot fields and precede KontoType / holder list.
   return part.replace(new RegExp(`^${indent}  <(?:KontoTypeKode|KontohaverListe)>`,'m'),match=>dates+match);
  }).join('\n'));
 }
 return {parsed:{fields,valid:!errors.length,errors,values:Object.fromEntries(fields.map(f=>[f.id,f.xml]))},errors,xml};
}
export function repeatingLines(p,xml){
 const stack=[],counts=new Map();return xml.trimEnd().split('\n').map((text,index)=>{
  const close=text.match(/^\s*<\/([^>]+)>/);if(close)stack.pop();
  const open=text.match(/^\s*<([^\s/>?]+)(?:\s[^>]*)?>/),leaf=text.match(/^\s*<([^>\s]+)>([^<]*)<\/\1>/),tag=leaf?.[1]||open?.[1]||null;
  let name=tag;if(tag==='Kontoperiode'){const parent=stack.join('/'),count=(counts.get(parent)||0)+1;counts.set(parent,count);name=`Kontoperiode[${count}]`;}
  const path=tag?[...stack,name].join(' / '):stack.join(' / '),period=Number(path.match(/Kontoperiode\[(\d+)\]/)?.[1]||0);let sources=[];
  if(leaf){if(tag===p.amountTag)sources=period?[`period${period}_interest`]:[1,2,3].map(n=>`period${n}_interest`);else if(period&&tag==='KontoperiodeOpstartDato')sources=[`period${period}_from`];else if(period&&tag==='KontoperiodeOphørDato')sources=[`period${period}_to`];else{const field=fieldForTag(p,tag);if(field)sources=[field];}}
  if(open&&!leaf&&!text.includes('/>'))stack.push(name);
  return {text,index,tag,path,period,sources,field:sources[0]||null,value:leaf?.[2],derived:['KontoID','IndberetningID'].includes(tag)||sources.length>1,leaf:!!leaf};
 });
}
export function repeatingTargets(p,id,xml){return repeatingLines(p,xml).filter(l=>l.leaf&&(l.sources.includes(id)||(id==='product'&&l.tag==='KontoID')));}
