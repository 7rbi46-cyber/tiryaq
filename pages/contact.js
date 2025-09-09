import { useState } from "react";

export default function Contact(){
  const [status, setStatus] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try{
      const res = await fetch("/api/contact", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setStatus(data?.message || "Sent");
    }catch(err){
      setStatus("Failed to send");
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Contact</h2>
      <form onSubmit={onSubmit} className="mt-4 space-y-3">
        <input name="name" required placeholder="Your name" className="w-full border rounded-xl px-3 py-2" />
        <input type="email" name="email" required placeholder="Your email" className="w-full border rounded-xl px-3 py-2" />
        <textarea name="message" required placeholder="Your message" className="w-full border rounded-xl px-3 py-2 h-28" />
        <button className="bg-[var(--tq-primary)] text-white px-4 py-2 rounded-xl">Send</button>
      </form>
      {status && <div className="mt-3 text-sm text-slate-600">{status}</div>}
    </div>
  );
}
