import Link from "next/link";

export default function Guidelines(){
  const items = [
    {slug:"implanon-checklist", title:"Implanon insertion checklist", summary:"Counseling, technique, after-care, red flags."},
    {slug:"uti-peds", title:"Pediatric UTI quick guide", summary:"Dx, workup, red flags, first-line Rx."},
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Guidelines</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {items.map((g)=>(
          <article key={g.slug} className="border bg-white rounded-2xl p-5">
            <h3 className="font-semibold">{g.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{g.summary}</p>
            <Link className="text-sm underline underline-offset-4 mt-2 inline-block" href={`/guidelines/${g.slug}`}>Open</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
