// api/sendgrid_send.js - robust handler (same as previous)
const SENDGRID_API_HOST = 'https://api.sendgrid.com/v3/mail/send';
function parseBodyRaw(raw){ if(!raw) return {}; try{ return JSON.parse(raw);}catch(e){} try{ return Object.fromEntries(new URLSearchParams(raw)); }catch(e){} return {}; }
module.exports = async (req,res) => {
  if(req.method !== 'POST') return res.status(405).json({success:false,error:'Method not allowed'});
  let raw=''; await new Promise(r=>{ req.on('data',c=>raw+=c); req.on('end',r); });
  const data = parseBodyRaw(raw);
  console.log('DEBUG raw body:', raw);
  console.log('DEBUG parsed body:', data);
  const name = String(data.name||'').trim(), email = String(data.email||'').trim(), phone = String(data.phone||'').trim();
  const service = String(data.service||'').trim(), message = String(data.message||'').trim();
  const missing = []; if(!name) missing.push('name'); if(!email) missing.push('email'); if(!service) missing.push('service'); if(!message) missing.push('message');
  if(missing.length) return res.status(400).json({success:false,error:'Missing required fields: '+missing.join(', '),received:{name,email,service,message,phone}});
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY, FROM_EMAIL = process.env.FROM_EMAIL;
  if(!SENDGRID_API_KEY || !FROM_EMAIL) return res.status(500).json({success:false,error:'Server not configured: missing SENDGRID_API_KEY or FROM_EMAIL'});
  const payload = { personalizations:[{ to:[{email:'support@surudigitalcare.com'},{email:'SuruDigitalCare@gmail.com'}], subject:`Estimate Request: ${service}` }], from:{email:FROM_EMAIL}, reply_to:{email}, content:[{type:'text/plain', value:`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}\n`}] };
  try{
    const r = await fetch(SENDGRID_API_HOST, {method:'POST', headers:{'Authorization':`Bearer ${SENDGRID_API_KEY}`, 'Content-Type':'application/json'}, body: JSON.stringify(payload)});
    const text = await r.text();
    if(!r.ok){ console.error('SendGrid error', r.status, text); return res.status(502).json({success:false,error:'SendGrid error '+r.status,details:text}); }
    console.log('SendGrid OK', r.status); return res.status(200).json({success:true});
  }catch(err){ console.error('Fetch error', err); return res.status(500).json({success:false,error:'SendGrid request failed',details:String(err)}); }
};