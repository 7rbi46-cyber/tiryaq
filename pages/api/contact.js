export default async function handler(req, res){
  if(req.method !== "POST"){
    return res.status(405).json({ ok:false, message:"Method not allowed" });
  }
  // بيانات بسيطة (مكان الإيميل الحقيقي لاحقاً)
  console.log("Contact form:", req.body);
  return res.status(200).json({ ok:true, message:"Thanks! We received your message." });
}
