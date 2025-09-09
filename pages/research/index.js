export default function Research(){
  const items = [
    {title:"Mental health of Sudanese medical students", type:"Study", status:"in progress"},
    {title:"Implementation brief: digital triage", type:"Brief", status:"published"},
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Research</h2>
      <ul className="mt-4 space-y-3">
        {items.map((r,i)=>(
          <li key={i} className="border bg-white rounded-2xl p-5">
            <div className="font-semibold">{r.title}</div>
            <div className="text-xs text-slate-500">{r.type} • {r.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
