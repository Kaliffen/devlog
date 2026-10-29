import * as THREE from './vendor/three.module.js';
import {PRODUCTS,COLORS,FIELDS,layout,CHAPTERS,DURATION} from './model.js';
const W=1600,H=900,SW=1040,SH=440,SY=175;
const clamp=x=>Math.max(0,Math.min(1,x));const smooth=x=>{x=clamp(x);return x*x*(3-2*x)};const lerp=(a,b,t)=>a+(b-a)*t;
export class Stage{
 constructor(canvas){
  this.canvas=canvas;this.ctx=canvas.getContext('2d',{alpha:false});this.hits=[];
  this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});this.renderer.setSize(SW*1.5,SH*1.5,false);this.renderer.setClearColor(0x0b1421,0);this.renderer.outputColorSpace=THREE.SRGBColorSpace;
  this.scene=new THREE.Scene();this.camera=new THREE.OrthographicCamera(-12.5,12.5,5.3,-5.3,.1,100);this.camera.position.set(12,16,20);this.camera.lookAt(0,0,0);
  this.scene.add(new THREE.AmbientLight(0xadc9e8,2));const light=new THREE.DirectionalLight(0xe1fff1,4);light.position.set(-5,12,8);this.scene.add(light);const blue=new THREE.PointLight(0x709dff,50,30);blue.position.set(6,5,-3);this.scene.add(blue);
  const grid=new THREE.GridHelper(40,40,0x23364a,0x172536);grid.position.y=-.35;grid.material.transparent=true;grid.material.opacity=.36;this.scene.add(grid);
  this.tokens=[];this.lanes=[];this.destinations=[];
  const box=(w,h,d,color)=>new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color,metalness:.2,roughness:.45,transparent:true}));
  PRODUCTS.forEach((p,pi)=>{
   const z=(pi-2)*1.55;let lane=box(6.7,.12,.96,0x1a2b40);lane.position.set(-4.9,-.1,z);this.scene.add(lane);this.lanes.push(lane);
   const dest=box(3.5,.15,1.02,0x1a2b40);dest.position.set(6,-.1,z);this.scene.add(dest);this.destinations.push(dest);
   const shape=layout(p);shape.forEach((f,fi)=>{const width=f.length/58*5.8-.06;let mesh=box(width,.33,.7,COLORS[f.id]);mesh.position.set(-8+(f.start-1+f.length/2)/58*6.1,.17,z);this.scene.add(mesh);this.tokens.push({mesh,p,pi,f,fi,source:mesh.position.clone(),width});});
   const points=[new THREE.Vector3(-1.5,-.2,z),new THREE.Vector3(1,-.2,z),new THREE.Vector3(3.7,-.2,z)];let line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:0x304c60,transparent:true,opacity:.55}));this.scene.add(line);
  });
  this.ring=new THREE.Mesh(new THREE.TorusGeometry(1.3,.018,8,100),new THREE.MeshBasicMaterial({color:0x68bdaa,transparent:true,opacity:.55}));this.ring.rotation.x=Math.PI/2;this.ring.position.set(.8,-.12,0);this.scene.add(this.ring);
  let ring2=this.ring.clone();ring2.scale.set(1.2,1.2,1.2);ring2.material=ring2.material.clone();ring2.material.opacity=.18;this.scene.add(ring2);
 }
 project(v){const p=v.clone().project(this.camera);return {x:(p.x*.5+.5)*SW+8,y:(-p.y*.5+.5)*SH+SY}}
 text(s,x,y,size=16,color='#dce7f2',font='sans',weight=400){let c=this.ctx;c.fillStyle=color;c.font=`${weight} ${size}px ${font==='mono'?'Consolas, monospace':'"Segoe UI", Arial, sans-serif'}`;c.fillText(s,x,y)}
 fit(s,x,y,max,size=20,color='#dce7f2',font='mono'){let c=this.ctx;this.text('',x,y,size,color,font);while(c.measureText(s).width>max&&size>10){size--;this.text('',x,y,size,color,font)}c.fillText(s,x,y)}
 line(x1,y1,x2,y2,color='#26394b',width=1){let c=this.ctx;c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke()}
 rect(x,y,w,h,fill,stroke,r=9){let c=this.ctx;c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.lineWidth=1;c.stroke()}}
 wrap(s,x,y,max,size=22,color='#c6d5e5',lineHeight=32){let line='',row=0;this.text('',x,y,size,color);for(let word of s.split(' ')){let test=line+word+' ';if(this.ctx.measureText(test).width>max&&line){this.text(line.trim(),x,y+row*lineHeight,size,color);line=word+' ';row++}else line=test}this.text(line.trim(),x,y+row*lineHeight,size,color);return row+1}
 render(state){
  let {time,p,chapter,parsed,field,error}=state;const c=this.ctx,ch=CHAPTERS[chapter],elapsed=time-ch.start,pi=PRODUCTS.indexOf(p),mode=ch.mode,f=parsed.fields.find(x=>x.id===field)||parsed.fields[0];this.hits=[];
  c.fillStyle='#0b1421';c.fillRect(0,0,W,H);let gradient=c.createRadialGradient(550,360,10,550,360,680);gradient.addColorStop(0,'#182c3a');gradient.addColorStop(1,'#0b1421');c.fillStyle=gradient;c.fillRect(0,100,1065,530);
  this.text('eKapital',35,41,22,'#e0efe9','sans',600);this.text('RECORD → REPORT',155,40,12,'#7995a6','mono');this.text('SUPPORT GUIDE  /  YEAR-END 2026',1110,39,13,'#8096ae','mono');this.line(34,59,1565,59,'#243244');
  this.text(String(chapter+1).padStart(2,'0')+' / 12',36,105,13,'#91d7b7','mono');this.text(ch.title,36,151,39,'#e9f2f8','sans',500);
  this.rect(1340,90,225,42,'#12291f','#2a4b3b',21);this.text('●  '+p.name,1358,117,15,p.color,'sans',500);
  let isOverview=['overview','route','recap','variants'].includes(mode),assemble=['assemble','validate','recap'].includes(mode);
  // All animation is a function of timeline time; seeking never accumulates drift.
  this.tokens.forEach(t=>{let selected=t.pi===pi,active=selected&&t.f.id===field;let pos=t.source.clone();let lift=0;
   t.mesh.material.opacity=isOverview?(.75+(selected?.25:0)):(selected?1:.12);
   let split=['slice','normalize','error','assemble','validate'].includes(mode)?smooth(elapsed/2):0;
   if(selected){pos.x+=split*(t.fi-3)*.25;lift=split*(active?1.8:.45);pos.y+=lift;
    if(mode==='normalize'&&active){let a=smooth(elapsed/2);pos.lerp(new THREE.Vector3(.6,2.25,1),a)}
    if(mode==='error'&&active){pos.lerp(new THREE.Vector3(.4,1.8,1),smooth(elapsed/2))}
    if(assemble){let a=smooth((elapsed-t.fi*.5)/3);let end=new THREE.Vector3(4.5+(t.fi%3)*1.3,.3+Math.floor(t.fi/3)*.55,(pi-2)*1.55);pos.lerp(end,a)}
   }
   t.mesh.position.copy(pos);t.mesh.material.color.set(error&&active?'#f1787b':COLORS[t.f.id]);t.mesh.material.emissive.set(active?(error?'#541719':'#15392d'):'#000000');t.mesh.scale.y=active?1.18:1;
  });
  this.lanes.forEach((l,i)=>l.material.opacity=isOverview?1:(i===pi?1:.3));this.destinations.forEach((l,i)=>{l.material.color.set(i===pi&&assemble?'#244c40':'#1a2b40');l.material.opacity=isOverview?1:(i===pi?1:.3)});
  this.renderer.render(this.scene,this.camera);c.drawImage(this.renderer.domElement,8,SY,SW,SH);
  this.text('01   SOURCE RECORDS',40,203,12,'#8babc1','mono');this.text('02   PARSE & MAP',435,203,12,'#8babc1','mono');this.text('03   XML STRUCTURES',790,203,12,'#8babc1','mono');
  PRODUCTS.forEach((prod,i)=>{let pos=this.project(new THREE.Vector3(-8.5,.25,(i-2)*1.55));let dest=this.project(new THREE.Vector3(6,.2,(i-2)*1.55));if(isOverview||i===pi){this.rect(pos.x-34,pos.y-25,47,23,'#101e2d','#34495b',4);this.text(prod.code,pos.x-24,pos.y-9,12,prod.color,'mono');this.fit(prod.category,dest.x-12,dest.y+35,170,15,i===pi?prod.color:'#6c859d','sans');}});
  const token=this.tokens.find(t=>t.pi===pi&&t.f.id===field);if(token&&!isOverview){let a=this.project(token.mesh.position);let v=mode==='normalize'&&elapsed>3?f.value:f.raw.replaceAll(' ','·');this.rect(a.x-135,a.y-60,270,39,'#0c1928ee',error?'#c46a70':f.color,6);this.fit(v,a.x-122,a.y-34,245,22,error?'#ffa3a6':f.color);this.line(a.x,a.y-20,a.x,a.y-7,f.color);this.text(f.start+'–'+f.end,a.x-22,a.y+37,12,'#9bb0c8','mono');}
  let label=error?'RECORD HELD':assemble?'STRUCTURE ASSEMBLED':mode==='normalize'?'TRANSFORMATION':isOverview?'FIVE INDEPENDENT ROUTES':'POSITIONAL EXTRACTION';this.rect(38,558,355,34,'#111f2e','#263c50',17);this.text('●  '+label,54,580,12,error?'#ff9c9c':'#8acbb4','mono');
  this.rightPanel(state,f);
  this.rawStrip(state,f);
  this.rect(34,771,1532,94,'#111e2c','#2b3d4d',9);this.text('THE TAKEAWAY',54,797,11,'#80bca5','mono');let caption=state.exploring?(f.error?'Invalid source value: '+f.error: ['interest','balance'].includes(f.id)?`${p.name}: ${f.raw} → ${f.value} → ${f.xml}. ${p.note}`:p.note+' '+f.path):ch.caption;this.wrap(caption,54,827,1475,23,'#d9e6ef',29);
  this.text('SYNTHETIC RECORDS · VERIFIED 2026 XSD STRUCTURE · NOT SUBMISSION DATA',35,888,10,'#607c94','mono');this.text(`${Math.floor(time/60).toString().padStart(2,'0')}:${Math.floor(time%60).toString().padStart(2,'0')} / 03:00`,1444,888,12,'#9ab2c7','mono');c.fillStyle='#263b4a';c.fillRect(0,897,W,3);c.fillStyle='#9ce5c6';c.fillRect(0,897,W*clamp(time/DURATION),3);
 }
 rightPanel(s,f){let {p,chapter,parsed,error,time}=s,ch=CHAPTERS[chapter],mode=ch.mode;const x=1082,y=191,w=483;this.rect(x,y,w,425,'#0d1927','#2c4154',10);this.text('MAPPING DESK',x+22,y+31,12,'#7c99af','mono');this.text('2026 / r28215',x+337,y+31,11,'#5c7b96','mono');this.line(x+20,y+47,x+w-20,y+47);
  if(['overview','route','variants','recap'].includes(mode)){this.text('Product → reporting category',x+22,y+81,20,'#dceaf5');PRODUCTS.forEach((prod,i)=>{let yy=y+112+i*48,sel=prod===p;this.rect(x+18,yy-21,w-36,41,sel?'#172e30':null,sel?'#315a50':null,6);this.text(prod.name,x+30,yy+4,16,sel?prod.color:'#8c9fb3');this.text('→',x+202,yy+4,18,'#5b7f93');this.text(prod.category,x+239,yy+4,16,sel?prod.color:'#a4b5c8')});this.wrap('Separate outputs. Shared transformation steps.',x+22,y+385,w-44,16,'#7d9bb1',22);return}
  if(mode==='validate'){let rows=[['01','Source layout','Length, digits, date, padding','#59dcca'],['02','XML schema','Five fixtures checked against r28215','#59dcca'],['03','SKAT response','Not submitted · business checks remain','#ffc575']];rows.forEach((row,i)=>{let yy=y+86+i*93;this.rect(x+22,yy-15,37,37,'#1b2c39',null,18);this.text(row[0],x+30,yy+10,14,row[3],'mono');this.text(row[1],x+75,yy+2,22,'#e2edf5');this.fit(row[2],x+75,yy+30,365,15,'#8da5ba','sans')});this.text('Schema valid ≠ accepted by SKAT',x+22,y+392,18,'#ffc575');return}
  if(mode==='assemble'){this.text('Full paths preserve meaning',x+22,y+82,22,'#e2edf5');let amount=parsed.fields.find(v=>v.id==='interest').xml;let lines=[['<RetbarKontoOplysninger>','#789ab1'],['  <KontoDetaljer>','#9db4c7'],['    <'+p.accountTag+'>',COLORS.account],['      '+parsed.values.account,COLORS.account],['    </'+p.accountTag+'>',COLORS.account],['    …','#627e95'],['  </KontoDetaljer>','#9db4c7'],['  <Beløb>','#9db4c7'],['    <'+p.amountTag+'>',COLORS.interest],['      '+amount,COLORS.interest],['    </'+p.amountTag+'>',COLORS.interest],['  </Beløb>','#9db4c7']];lines.forEach(([text,color],i)=>this.fit(text,x+22,y+117+i*20,w-44,16,color));this.text('Excerpt · full XML available below',x+22,y+395,14,'#68869e');return}
  this.text(error?'Source validation failed':f.label,x+22,y+81,23,error?'#ff9f9f':f.color);
  let raw=f.raw.replaceAll(' ','·');this.text('RAW  ·  POSITIONS '+f.start+'–'+f.end,x+22,y+114,11,'#7994aa','mono');this.rect(x+20,y+128,w-40,49,'#142336',error?'#865055':'#2a435b',6);this.fit(raw,x+33,y+161,w-66,25,error?'#ffa3a3':f.color);
  this.text('↓',x+w/2-7,y+205,22,'#729f92');this.text(error?'BLOCKED': 'NORMALIZED',x+22,y+227,11,'#7994aa','mono');this.fit(error?'Invalid numeric character':f.value,x+22,y+260,w-44,29,error?'#ff9d9d':'#e4edf6');
  this.line(x+22,y+280,x+w-22,y+280);this.text(error?'SUPPORT ACTION':'XML DESTINATION',x+22,y+306,11,'#7994aa','mono');
  if(error){this.wrap('Return to the highlighted source field. Correct O to 0 and reprocess.',x+22,y+338,w-44,19,'#e6b2b4',27)}else{let path=f.path.split(' / ');path.forEach((part,i)=>this.fit(part,x+22,y+337+i*25,w-44,18,f.color));if(['interest','balance'].includes(f.id))this.text('XML value: '+f.xml,x+22,y+394,19,'#ffc575','mono');else this.text(f.id==='account'?'Trim spaces only. Keep leading zeros.':f.id==='date'?'Validate the calendar, then format.':'Apply the selected product mapping.',x+22,y+395,14,'#87a3b9')}
 }
 rawStrip(s,selected){const {p,parsed,error}=s;let c=this.ctx;this.text('SOURCE WINDOW',35,646,11,'#8eacc1','mono');this.text(p.code+'  /  96 CHARACTERS  /  1-BASED POSITIONS',209,646,11,'#5f809a','mono');this.text('59–96 = space padding',1350,646,11,'#5f809a','mono');const start=35,cell=25.85;
  for(let f of parsed.fields){let x=start+(f.start-1)*cell,width=f.length*cell-2,active=f.id===selected.id,color=error&&active?'#ff8e96':f.color;this.rect(x,663,width,69,active?color+'20':'#101d2b',active?color:'#293d50',4);this.text(String(f.start).padStart(2,'0'),x+4,679,10,active?color:'#66859f','mono');if(f.length>3)this.text(String(f.end).padStart(2,'0'),x+width-20,679,10,active?color:'#66859f','mono');for(let i=0;i<f.raw.length;i++){this.text(f.raw[i]===' '?'·':f.raw[i],x+i*cell+6,708,20,active?color:'#9db4c8','mono');if(i>0)this.line(x+i*cell,687,x+i*cell,718,'#1c2e40')}
   let label=f.id==='interest'?(p.id==='pension'?'PENSION AMOUNT':'INTEREST'):f.id==='account'?'ACCOUNT / POLICY':f.id.toUpperCase();this.fit(label,x+3,751,width,11,active?color:'#69859d','mono');this.hits.push({x,y:663,w:width,h:95,id:f.id});}
 }
}
