import express from "express";
import cors from "cors";
import 'dotenv/config';
const app=express(); app.use(cors()); app.use(express.json());
app.post('/api/chat', async (req,res)=>{
  const question=(req.body?.question||'').slice(0,2000);
  if(!process.env.OPENAI_API_KEY) return res.status(400).json({error:'Falta OPENAI_API_KEY en variables de entorno.'});
  try{
    const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.OPENAI_API_KEY}`},body:JSON.stringify({model:'gpt-4.1-mini',input:[{role:'system',content:'Eres tutor de Programación Lineal. Responde con rigor, pasos y advertencias de verificación.'},{role:'user',content:question}]})});
    const data=await r.json(); res.json({answer:data.output_text||'Sin respuesta.'});
  }catch(e){res.status(500).json({error:'Error consultando el proveedor de IA.'})}
});
app.listen(process.env.PORT||3000,()=>console.log('Backend tutor en puerto '+(process.env.PORT||3000)));
