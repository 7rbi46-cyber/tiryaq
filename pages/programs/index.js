export default function Programs(){
  const items = [
    {title:"Digital Health Bootcamp", when:"Oct 2025", where:"Online", desc:"Intro to health informatics, data, and policy."},
    {title:"Research Methods 101", when:"Nov 2025", where:"Khartoum", desc:"Design, sampling, bias, stats basics."},
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Programs</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {items.map((p,i)=>(
          <div key={i} className="border bg-white rounded-2xl p-5">
            <div className="text-xs text-slate-500">{p.when} • {p.where}</div>
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-slate-600">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
