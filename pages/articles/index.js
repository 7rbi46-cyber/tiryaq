import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { useMemo, useState } from "react";

export async function getStaticProps(){
  const dir = path.join(process.cwd(), "content", "articles");
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(f => f.endsWith(".md"))
    : [];

  const articles = files.map((fname)=>{
    const raw = fs.readFileSync(path.join(dir, fname), "utf8");
    const { data } = matter(raw);

    // تاریخ كـ نص JSON-safe
    let dateStr = null;
    if (data?.date) {
      if (typeof data.date === "string") {
        dateStr = data.date;            // مثال: "2025-09-01"
      } else {
        const d = new Date(data.date);
        dateStr = isNaN(d) ? null : d.toISOString().slice(0,10); // YYYY-MM-DD
      }
    }

    return {
      slug: data.slug,
      title: data.title,
      tag: data.tag || "ARTICLE",
      summary: data.summary || "",
      date: dateStr,
    };
  }).sort((a,b)=> (b.date || "").localeCompare(a.date || ""));

  return { props: { articles } };
}

export default function Articles({ articles }){
  const [q, setQ] = useState("");
  const list = useMemo(()=>{
    const k = q.trim().toLowerCase();
    if(!k) return articles;
    return articles.filter(a =>
      (a.title||"").toLowerCase().includes(k) ||
      (a.summary||"").toLowerCase().includes(k) ||
      (a.tag||"").toLowerCase().includes(k)
    );
  }, [q, articles]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Articles</h2>

      <input
        value={q}
        onChange={e=>setQ(e.target.value)}
        placeholder="Search titles, tags…"
        className="w-full mt-4 mb-4 border rounded-xl px-3 py-2"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        {list.map((a)=>(
          <article key={a.slug} className="card">
            <div className="text-xs text-slate-500 uppercase">{a.tag}</div>
            <h3 className="font-semibold mt-1">{a.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{a.summary}</p>
            {a.date && <div className="text-xs text-slate-400 mt-1">{a.date}</div>}
            <Link className="text-sm underline underline-offset-4 mt-2 inline-block" href={`/articles/${a.slug}`}>
              Read
            </Link>
          </article>
        ))}
        {list.length === 0 && <div className="text-sm text-slate-500">No results.</div>}
      </div>
    </div>
  );
}
