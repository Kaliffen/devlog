import {makeRecord,layout} from './model.js';
import {analyse,overwriteField} from './lab-model.js';

export function sampleBatch(p){return Array.from({length:5},(_,i)=>{
 let record=overwriteField(p,makeRecord(p),'account',String(1234567+i).padStart(10,'0').padEnd(15,' '));
 return overwriteField(p,record,'interest',String(123456+i*25000).padStart(13,'0'));
})}
export function inspectBatch(p,records,template){
 const rows=records.map((raw,index)=>{const result=analyse(p,raw,template);const account=result.parsed.values.account;
 const filename=result.xml?`DEMO-${p.code}-${account}.xml`:null;
 const xml=result.xml?.replace(/<KontoID>[^<]*<\/KontoID>/,`<KontoID>${filename}</KontoID>`).replace(/<IndberetningID>[^<]*<\/IndberetningID>/,`<IndberetningID>DEMO-2026-${p.code}-${account}</IndberetningID>`)||null;
 return {...result,raw,index,filename,xml};
 });
 for(const row of rows){if(!row.filename)continue;const matches=rows.filter(other=>other.filename===row.filename);if(matches.length>1){const f=layout(p).find(f=>f.id==='account');row.errors.push({id:'account',title:'Duplicate account in this batch',start:f.start,end:f.end,reason:`Rows ${matches.map(r=>r.index+1).join(', ')} create the same filename.`,impact:'Both XML previews remain inspectable, but they cannot share a ZIP entry name.',fix:'Enter the intended distinct account, or remove the duplicate row from your source. Do not invent an account number.',replacement:null});}}
 return {rows,ready:rows.length>0&&rows.every(r=>!r.errors.length)};
}

// Small teaching archives: ZIP STORE, UTF-8 names, CRC-32, no directories.
export function makeZip(batch){
 if(!batch.ready)throw Error('Fix all batch errors before exporting.');
 const encoder=new TextEncoder(),parts=[],central=[];let offset=0,centralSize=0;
 const crc32=bytes=>{let crc=0xffffffff;for(const byte of bytes){crc^=byte;for(let n=0;n<8;n++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}return (crc^0xffffffff)>>>0;};
 for(const row of batch.rows){const name=encoder.encode(row.filename),data=encoder.encode(row.xml),crc=crc32(data);
  const local=new Uint8Array(30+name.length),v=new DataView(local.buffer);v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint16(6,0x800,true);v.setUint16(12,0x5d5e,true);v.setUint32(14,crc,true);v.setUint32(18,data.length,true);v.setUint32(22,data.length,true);v.setUint16(26,name.length,true);local.set(name,30);
  const entry=new Uint8Array(46+name.length),c=new DataView(entry.buffer);c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint16(8,0x800,true);c.setUint16(14,0x5d5e,true);c.setUint32(16,crc,true);c.setUint32(20,data.length,true);c.setUint32(24,data.length,true);c.setUint16(28,name.length,true);c.setUint32(42,offset,true);entry.set(name,46);
  parts.push(local,data);central.push(entry);offset+=local.length+data.length;centralSize+=entry.length;
 }
 const end=new Uint8Array(22),e=new DataView(end.buffer);e.setUint32(0,0x06054b50,true);e.setUint16(8,batch.rows.length,true);e.setUint16(10,batch.rows.length,true);e.setUint32(12,centralSize,true);e.setUint32(16,offset,true);
 const all=[...parts,...central,end],bytes=new Uint8Array(offset+centralSize+22);let at=0;for(const part of all){bytes.set(part,at);at+=part.length;}return bytes;
}
