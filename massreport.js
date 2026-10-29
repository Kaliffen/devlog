import {PRODUCTS,layout} from './model.js';
import {RULES,overwriteField,xmlLines,targetNodes} from './lab-model.js';
import {sampleBatch,inspectBatch,makeZip} from './massreport-model.js';
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
let templates,p=PRODUCTS[0],records=sampleBatch(p),selected=0,focused='interest',batch;
const visible=s=>s.replace(/ /g,'·');
function download(name,data,type){const url=URL.createObjectURL(new Blob([data],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function render(){
 batch=inspectBatch(p,records,templates[p.id]);const row=batch.rows[selected],f=row.parsed.fields.find(f=>f.id===focused);
 $('rows').innerHTML=batch.rows.map(r=>`<tr class="${r.index===selected?'active':''}"><td><button data-row="${r.index}" aria-pressed="${r.index===selected}">Row ${r.index+1} →</button></td><td>${esc(r.parsed.values.account)}</td><td>${r.parsed.fields.find(f=>f.id==='interest').error?'—':esc(r.parsed.values.interest)}</td><td>${esc(r.filename||'No XML generated')}</td><td class="${r.errors.length?'bad':''}">${r.errors.length?'Needs correction':'Ready locally'}</td></tr>`).join('');
 const failures=batch.rows.filter(r=>r.errors.length).length;
 $('summary').textContent=`${records.length} source rows → ${batch.rows.filter(r=>r.xml).length} XML previews · ${failures?`${failures} row${failures===1?'':'s'} need correction · ZIP held`:`${records.length} files ready for one ZIP`}`;
 $('downloadZip').disabled=!batch.ready;$('downloadXML').disabled=!row.xml;
 $('rowTitle').textContent=`Row ${selected+1} · what you wrote`;
 if(document.activeElement!==$('record'))$('record').value=records[selected];
 $('fieldList').innerHTML=layout(p).map(x=>`<button data-field="${x.id}" style="--field:${x.color}" class="${focused===x.id?'selected':''}">${esc(x.label)} <small>${x.start}–${x.end}</small></button>`).join('');
 $('fieldName').textContent=f.label;$('fieldRange').textContent=`Columns ${f.start}–${f.end} · ${f.length} characters`;$('fieldValue').value=f.raw;
 $('rule').textContent=RULES[focused]+' Enter the complete field width, including right-hand spaces for identifiers.';
 $('errors').innerHTML=row.errors.map((error,i)=>`<div class="error-card"><h3>Row ${selected+1}, columns ${error.start}–${error.end}: ${esc(error.title)}</h3><p>${esc(error.reason)}</p><p>${esc(error.impact)}</p><p><strong>Fix the input:</strong> ${esc(error.fix)}</p>${error.replacement!==null&&error.id!=='record'?`<button data-repair="${i}">Apply suggested value: ${esc(visible(error.replacement))}</button>`:''}</div>`).join('')||'<p class="micro">This row passes local checks. Inspect the XML and its mapping; this is not a submission receipt.</p>';
 $('outputMessage').textContent=row.xml?`Row ${selected+1} → ${row.filename}. Other rows produce separate documents. Click a mapped XML element to trace it.`:`Row ${selected+1} produces no XML until its source error is fixed. The other valid records still produce their own XML.`;
 $('xml').innerHTML=row.xml?xmlLines(p,row.xml).map(l=>`<${l.field?'button':'div'} class="xml-line ${l.field?'mapped':''} ${l.field===focused?'selected':''}" ${l.field?`data-field="${l.field}"`:''}>${esc(l.text)}</${l.field?'button':'div'}>`).join(''):'<div class="output-blocked"><h3>This record is held</h3><p>Correct the highlighted source field. No empty, guessed, or partial XML is added to the batch.</p></div>';
 $('traceTitle').textContent=`Row ${selected+1} / ${f.label}`;
 $('traceSummary').textContent=`Read columns ${f.start}–${f.end} of row ${selected+1}. ${RULES[focused]}`;
 $('traceDetails').innerHTML=[['RAW SOURCE',visible(f.raw),'Dots show spaces; each position belongs to this row.'],['NORMALIZED VALUE',f.error?'Cannot parse':f.value,f.error||'This field is parsed independently for each account.'],['OUTPUT EFFECT',row.xml?f.xml:'XML held',row.xml?`Only ${row.filename} is generated from this row.`:'Correct this row to restore its document. Other rows keep their values.']].map(([title,value,note])=>`<div class="trace-detail" style="--field:${f.color}"><div class="caption">${title}</div><div class="value">${esc(value)}</div><p>${esc(note)}</p></div>`).join('');
 const nodes=row.xml?targetNodes(p,focused,row.xml):[];
 // The batch's report ID also includes the account, unlike the single-record lesson.
 if(row.xml&&focused==='account')nodes.push(...xmlLines(p,row.xml).filter(l=>l.tag==='IndberetningID'));
 $('destinations').innerHTML='<h3>Exact destinations in this document</h3>'+nodes.map(n=>`<div class="destination"><span class="path">${esc(n.path)}</span><span class="val">${esc(n.value)}</span></div>`).join('')+`<p>${focused==='account'?'Batch naming: DEMO + product code + account + .xml becomes both the filename and KontoID. IndberetningID also includes the account, giving each demo report a distinct ID. ':''}${!row.xml?'No destination values are emitted while this record is invalid.':!nodes.length?'This source field selects the layout or provides context; it has no direct XML value here.':''}</p>`;
}
function reset(kind){records=sampleBatch(p);selected=kind==='valid'?0:2;focused=kind==='duplicate'?'account':'interest';if(kind==='error')records[2]=overwriteField(p,records[2],'interest','000000O173456');if(kind==='duplicate')records[2]=overwriteField(p,records[2],'account',records[0].slice(layout(p).find(f=>f.id==='account').start-1,layout(p).find(f=>f.id==='account').end));$('editNotice').textContent='';render();}
$('product').innerHTML=PRODUCTS.map(p=>`<option value="${p.id}">${p.name} / ${p.category}</option>`).join('');
$('product').onchange=()=>{p=PRODUCTS.find(p=>p.id===$('product').value);reset('valid');};
$('validCase').onclick=()=>reset('valid');$('errorCase').onclick=()=>reset('error');$('duplicateCase').onclick=()=>reset('duplicate');
$('rows').onclick=e=>{const b=e.target.closest('[data-row]');if(b){selected=Number(b.dataset.row);$('editNotice').textContent='';render();}};
for(const id of ['fieldList','xml'])$(id).onclick=e=>{const b=e.target.closest('[data-field]');if(b){focused=b.dataset.field;render();}};
$('record').oninput=()=>{records[selected]=$('record').value;$('editNotice').textContent='';render();};
$('applyField').onclick=()=>{try{records[selected]=overwriteField(p,records[selected],focused,$('fieldValue').value);$('editNotice').textContent='Updated this row. All other source rows are unchanged.';render();}catch(e){$('editNotice').textContent=e.message;}};
$('errors').onclick=e=>{const b=e.target.closest('[data-repair]');if(!b)return;const d=batch.rows[selected].errors[Number(b.dataset.repair)];try{records[selected]=d.id==='filler'?records[selected].slice(0,58)+d.replacement:overwriteField(p,records[selected],d.id,d.replacement);focused=d.id==='filler'?'interest':d.id;$('editNotice').textContent='Suggested correction applied only to this row.';render();}catch(e){$('editNotice').textContent=e.message;}};
$('downloadFF').onclick=()=>download(`MassReport-${p.code}-2026.ff`,records.join('\r\n')+'\r\n','text/plain');
$('downloadXML').onclick=()=>{const row=batch.rows[selected];if(row.xml)download(row.filename,row.xml,'application/xml');};
$('downloadZip').onclick=()=>{if(batch.ready)download(`MassReport-${p.category}-2026.zip`,makeZip(batch),'application/zip');};
try{const response=await fetch('templates.json');if(!response.ok)throw Error('Unable to load XML templates.');templates=await response.json();reset('valid');}catch(e){$('summary').textContent=e.message;$('downloadZip').disabled=true;}
