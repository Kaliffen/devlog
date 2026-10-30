import {PRODUCTS,COLORS,escapeXML,date,money} from './model.js';
export {PRODUCTS};
export const HEADER=87,PERIOD=40;
export const headerLength=source=>HEADER+((typeof source==='string'?source.slice(0,2):source.code)==='PB'?26:0);
const headerSpec=[['product',2,'Product'],['year',4,'Income year'],['account',15,'Account / policy'],['date',8,'Account start'],['balance',13,'Balance / capital'],['currency',3,'Currency'],['reporter',8,'Reporter SE'],['kontoId',18,'KontoID'],['reportId',16,'IndberetningID']];
const headerFor=source=>(typeof source==='string'?source.slice(0,2):source.code)==='PB'?[...headerSpec,['depotId',16,'Depot ID'],['depotNumber',10,'Depot number']]:headerSpec;
const periodSpec=[['from',8,'Start date'],['to',8,'End date'],['interest',13,'Interest / amount'],['holder',8,'Holder SE'],['type',2,'Account type'],['arrears',1,'In arrears']];
export const groupCount=raw=>Math.max(0,Math.floor((raw.length-headerLength(raw))/PERIOD));
export const aligned=raw=>raw.length>=headerLength(raw)&&(raw.length-headerLength(raw))%PERIOD===0;
const periodIds=n=>Array.from({length:n},(_,i)=>i+1);
const color=kind=>COLORS[kind]||(['from','to'].includes(kind)?COLORS.date:['kontoId','reportId','holder','reporter','depotId','depotNumber'].includes(kind)?COLORS.account:'#9ba9bd');
export function fieldsFor(raw){
 const result=[];let at=0;
 const add=(spec,group)=>{for(const [kind,length,label] of spec){result.push({id:group?`period${group}_${kind}`:kind,kind,group,label:group?`Period ${group} · ${label}`:label,length,start:at+1,end:at+length,color:color(kind)});at+=length;}};
 add(headerFor(raw),0);for(const group of periodIds(Math.max(0,Math.ceil((raw.length-headerLength(raw))/PERIOD)))){at=headerLength(raw)+(group-1)*PERIOD;add(periodSpec,group);}return result;
}
const pack=(spec,values)=>spec.map(([id,length])=>String(values[id]??'').padEnd(length,' ')).join('');
export function sampleFF(p,count=1){
 const values={product:p.code,year:'2026',...p.values,currency:'DKK',reporter:'12345678',kontoId:`DEMO-${p.code}-${p.values.account}`,reportId:`DEMO-2026-${p.code}-001`,depotId:p.id==='bond'?'DEMO-DEPOT-001':'',depotNumber:p.id==='bond'?'0000000001':''};
 const header=pack(headerFor(p),values);
 const ranges=count===1?[['20260101','20261231']]:[['20260101','20260430'],['20260501','20260831'],['20260901','20261231']];
 return header+ranges.map(([from,to],i)=>pack(periodSpec,{from,to,interest:count===1?p.values.interest:String((i+1)*100000).padStart(13,'0'),holder:'12345678',type:'01',arrears:'0'})).join('');
}
export function overwrite(raw,id,value){if(!aligned(raw))throw Error(`Restore complete field boundaries: ${headerLength(raw)} header characters + ${PERIOD} per period.`);const f=fieldsFor(raw).find(f=>f.id===id);if(!f)throw Error('Select an existing field.');if(value.length!==f.length)throw Error(`Use exactly ${f.length} characters; received ${value.length}.`);return raw.slice(0,f.start-1)+value+raw.slice(f.end);}
export function removePeriod(raw,group){if(!aligned(raw))throw Error('Restore complete group boundaries before removing a period.');if(!Number.isInteger(group)||group<1||group>groupCount(raw))throw Error('Select a period to remove.');const start=headerLength(raw)+(group-1)*PERIOD;return raw.slice(0,start)+raw.slice(start+PERIOD);}
// Add a blank, complete source group. No dates, holder or amount are guessed.
export function appendPeriod(raw){if(!aligned(raw))throw Error('Restore complete group boundaries before adding a period.');return raw+' '.repeat(PERIOD);}
export const rules={product:'The first two FF characters select the product and XML structure.',year:'The income year supplies IndkomstÅr and the namespace. This site validates against the official 2026 schema.',account:'Trim trailing spaces only. Preserve the identifier’s leading zeros.',date:'Parse a real YYYYMMDD date, then format it as YYYY-MM-DD.',balance:'Parse 13 digits as integer minor units and serialize with a comma decimal separator.',currency:'Copy the source currency. Pensiondiverse has no currency element.',reporter:'Copy the eight-character reporter SE into the report. The XSD checks its format.',kontoId:'Trim right-hand padding and copy KontoID directly from the FF.',reportId:'Trim right-hand padding and copy IndberetningID directly from the FF.',depotId:'Trim right-hand padding. Pantebreve uses this ID in its depot-holder periods.',depotNumber:'Preserve the source depot identifier, including leading zeros. Used for Pantebreve.',from:'Parse the period start as YYYYMMDD and format YYYY-MM-DD.',to:'Parse the period end as YYYYMMDD and format YYYY-MM-DD.',interest:'Read 13 digits as integer minor units. Copy the period amount and sum all periods for the account total.',holder:'Copy the holder SE from this period into its KontohaverOplysninger. The XSD checks its format.',type:'Read the two-digit code as an integer. The XSD checks its type; tax business rules are separate.',arrears:'Map source 0 to false, 1 to true. Used for Udlån and Prioritetslån.'};
export function parseFF(raw,previous=''){
 const p=PRODUCTS.find(p=>p.code===raw.slice(0,2))||null,fields=fieldsFor(raw).map(f=>({...f,raw:raw.slice(f.start-1,f.end),value:null,xml:null,error:null})),errors=[];
 const fail=(f,reason,fix,replacement=null,positions=[])=>{f.error=reason;errors.push({id:f.id,title:`${f.label}: ${reason}`,start:f.start,end:f.end,positions,reason,fix,replacement,impact:'XML generation is held until this source field can be parsed. No period is silently omitted.'});};
 const header=headerLength(raw);
 if(!aligned(raw))return {product:p,fields,count:groupCount(raw),errors:[{id:'record',title:'Incomplete FF structure',start:raw.length<header?1:header+groupCount(raw)*PERIOD+1,end:raw.length,positions:[],reason:`Received ${raw.length} characters. Expected a ${header}-character header plus complete ${PERIOD}-character period groups; ${raw.length<header?header-raw.length:PERIOD-(raw.length-header)%PERIOD} more characters would reach the next boundary.`,fix:`Insert or remove a complete ${PERIOD}-character group. There are no reserved padding blocks. If a character was deleted inside a field, restore it at its original position.`,replacement:null,impact:'No XML is generated while the field boundaries are incomplete.'}],valid:false};
 for(const f of fields){
  try{
   if(/[^\x20-\x7E]/.test(f.raw))throw Error('Use decoded single-byte ASCII.');
   let value=f.raw.replace(/ +$/,'');
   if(f.kind==='product'&&!p)throw Error('Unknown product code. Use LN, DP, MT, PB or PM.');
   if(['date','from','to'].includes(f.kind))value=date(f.raw);
   else if(['balance','interest'].includes(f.kind))value=money(f.raw).replace('.',',');
   else if(['year','type'].includes(f.kind)){if(!/^\d+$/.test(f.raw))throw Error('Expected digits in every position.');value=f.kind==='type'?String(Number(f.raw)):f.raw;}
   else if(f.kind==='arrears'){if(!/^[01]$/.test(f.raw))throw Error('Expected 0 or 1.');value=f.raw==='1'?'true':'false';}
   f.value=value;f.xml=value;
  }catch(e){let replacement=null,positions=[];if(['balance','interest'].includes(f.kind)){positions=[...f.raw].flatMap((c,i)=>/\d/.test(c)?[]:[f.start+i]);const candidate=f.raw.replace(/O/g,'0');if(/^\d{13}$/.test(candidate))replacement=candidate;}
   if(['date','from','to'].includes(f.kind)&&previous.length===raw.length){const candidate=previous.slice(f.start-1,f.end);try{date(candidate);replacement=candidate;}catch{}}
   fail(f,e.message,['balance','interest'].includes(f.kind)?'Enter the intended amount as 13 digits. O can be replaced by 0 if that was intended. Blank is not zero.':rules[f.kind],replacement,positions);
  }
 }
 // These are explicit teaching-layout rules, not substitutes for XSD validation.
 for(const n of periodIds(groupCount(raw))){const from=fields.find(f=>f.id===`period${n}_from`),to=fields.find(f=>f.id===`period${n}_to`);if(!from.error&&!to.error){if(from.value>to.value)fail(to,'Period ends before it starts.','Set the end on or after the start.');if(n>1){const prior=fields.find(f=>f.id===`period${n-1}_to`);if(!prior.error&&from.value<=prior.value)fail(from,'Period overlaps the preceding group.','Keep groups in chronological order, using inclusive dates.');}}}
 return {product:p,fields,count:groupCount(raw),errors,valid:errors.length===0};
}
export function generateXML(parsed){
 if(!parsed.valid)throw Error('Cannot generate XML from an unparsed FF.');const p=parsed.product,values=Object.fromEntries(parsed.fields.map(f=>[f.id,f.xml])),lines=[],stack=[];let depth=0;
 const open=(tag,attrs='',label=tag,sources=[])=>{lines.push({text:'  '.repeat(depth)+`<${tag}${attrs}>`,tag,path:[...stack,label].join(' / '),sources,leaf:false});stack.push(label);depth++;};
 const close=tag=>{depth--;stack.pop();lines.push({text:'  '.repeat(depth)+`</${tag}>`,tag,path:stack.join(' / '),sources:[],leaf:false});};
 const leaf=(tag,value,sources)=>lines.push({text:'  '.repeat(depth)+`<${tag}>${escapeXML(value)}</${tag}>`,tag,value,path:[...stack,tag].join(' / '),sources,leaf:true});
 const copy=(tag,id)=>leaf(tag,values[id],[id]);
 const root=`RenteIndberetning${p.category}Struktur`,ns=`http://skat.dk/ekapital/${values.year}/01/01`;
 lines.push({text:'<?xml version="1.0" encoding="UTF-8"?>',sources:[],leaf:false,path:''});open(root,` xmlns="${escapeXML(ns)}"`,root,['product','year']);
 open('Indberetningsperiode');copy('IndkomstÅr','year');close('Indberetningsperiode');
 open('Indberetningspligtig');copy('VirksomhedSENummer','reporter');close('Indberetningspligtig');copy('KontoID','kontoId');
 open('IndberetningValg');open('RetbarKontoOplysninger');open('IndberetningIdentifikatorStruktur');copy('IndberetningID','reportId');close('IndberetningIdentifikatorStruktur');
 open('KontoDetaljer');copy(p.accountTag,'account');copy(p.dateTag,'date');if(p.id!=='pension')copy('KontoValutaKode','currency');close('KontoDetaljer');
 open('Beløb');const amountIds=periodIds(parsed.count).map(n=>`period${n}_interest`),sum=parsed.fields.filter(f=>f.kind==='interest').reduce((sum,f)=>sum+BigInt(f.raw),0n);leaf(p.amountTag,`${sum/100n},${String(sum%100n).padStart(2,'0')}`,amountIds);lines.at(-1).derived=true;copy(p.balanceTag,'balance');close('Beløb');
 if(['loan','mortgage','bond'].includes(p.id))open('KontoperiodeValg');open('KontoperiodeÅrsUltimoListe','','KontoperiodeÅrsUltimoListe',[]);
 const periods=(branch)=>{for(const n of periodIds(parsed.count)){const id=kind=>`period${n}_${kind}`;open('Kontoperiode','',`Kontoperiode[${n}]`);copy(p.amountTag,id('interest'));
  if(['loan','mortgage'].includes(p.id))copy('LånForholdRestanceMarkering',id('arrears'));
  if(branch==='Depothaver'){copy('PantebrevDepotID','depotId');copy('PantebrevDepotNummer','depotNumber');}
  copy('KontoperiodeOpstartDato',id('from'));copy('KontoperiodeOphørDato',id('to'));
  if(p.id!=='bond')copy('KontoTypeKode',id('type'));
  open('KontohaverListe');open('KontohaverOplysninger');open('KontohaverValg');open('IndlændingValg');copy('VirksomhedSENummer',id('holder'));close('IndlændingValg');close('KontohaverValg');close('KontohaverOplysninger');close('KontohaverListe');close('Kontoperiode');}};
 if(p.id==='bond'){for(const branch of ['LånTager','Depothaver']){open(branch);open('KontoperiodeListe');periods(branch);close('KontoperiodeListe');close(branch);}}else periods();
 close('KontoperiodeÅrsUltimoListe');if(['loan','mortgage','bond'].includes(p.id))close('KontoperiodeValg');close('RetbarKontoOplysninger');close('IndberetningValg');close(root);
 lines.forEach((l,index)=>{l.index=index;l.field=l.sources[0]||null;});return {xml:lines.map(l=>l.text).join('\n')+'\n',lines};
}
export function pipeline(raw,previous=''){const parsed=parseFF(raw,previous);return {parsed,errors:parsed.errors,...(parsed.valid?generateXML(parsed):{xml:null,lines:[]})};}
export function outputDiff(before,after){const old=new Map((before?.lines||[]).filter(l=>l.leaf).map(l=>[l.path,l]));const current=new Set(after.lines.filter(l=>l.leaf).map(l=>l.path));return [...after.lines.filter(l=>l.leaf&&l.value!==old.get(l.path)?.value).map(l=>({...l,before:old.get(l.path)?.value??'(added)'})),...(before?.lines||[]).filter(l=>l.leaf&&!current.has(l.path)).map(l=>({...l,index:-1,before:l.value,value:'(removed)'}))];}
