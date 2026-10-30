import {validateXML} from './vendor/xmllint/index-browser.mjs';
import {schemaOptions} from './schema-model.js';
let schemas;
export async function validateReport(view){
 if(!view.xml)throw Error('No generated XML to validate.');
 schemas??=fetch(new URL('./schemas-2026.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('Official XSD bundle could not be loaded.');return r.json();}).catch(e=>{schemas=null;throw e;});
 return validateXML(schemaOptions(view.xml,view.parsed.product,await schemas));
}
// Only the latest FF revision can update validation status or enable export.
export function validationController(validate=validateReport,delay=180){let revision=0,timer;
 return {update(view,notify){const current=++revision;clearTimeout(timer);if(!view.xml){notify({status:'source-error',result:null});return;}notify({status:'pending',result:null});timer=setTimeout(async()=>{try{const result=await validate(view);if(current===revision)notify({status:result.valid?'valid':'invalid',result});}catch(error){if(current===revision)notify({status:'unavailable',error: error.message||'Schema engine failed.'});}},delay);},cancel(){revision++;clearTimeout(timer);}};
}
