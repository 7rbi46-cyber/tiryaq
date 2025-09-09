import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export async function getStaticPaths(){
  const dir = path.join(process.cwd(), "content", "articles");
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(f => f.endsWith(".md"))
    : [];
  const paths = files.map((fname)=>{
    const raw = fs.readFileSync(path.join(dir, fname), "utf8");
    const { data } = matter(raw);
    return { params: { slug: data.slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }){
  const dir = path.join(process.cwd(), "content", "articles");
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(f => f.endsWith(".md"))
    : [];

  for (const fname of files){
    const raw = fs.readFileSync(path.join(dir, fname), "utf8");
    const { data, content } = matter(raw);
    if (data.slug === params.slug) {
      // تاريخ كنص
      let dateStr = null;
      if (data?.date) {
        if (typeof data.date === "string") {
          dateStr = data.date;
        } else {
          const d = new Date(data.date);
          dateStr = isNaN(d) ? null : d.toISOString().slice(0,10);
        }
      }
      const html = marked.parse(content);
      return { props: { meta: { ...data, date: dateStr }, html } };
    }
  }
  return { notFound: true };
}

export default function Article({ meta, html }){
  return (
    <>
      <Head>
        <title>{meta.title} — Tiryaq</title>
        <meta name="description" content={meta.summary || "Tiryaq article"} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.summary || "Tiryaq article"} />
        <meta property="og:image" content="/tiryaq-logo.jpg" />
      </Head>

      <article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8">
        <div className="text-xs text-slate-500 uppercase">{meta.tag || "ARTICLE"}</div>
        <h1 className="text-2xl font-bold text-[var(--tq-primary)] mt-1">{meta.title}</h1>
        {meta.date && <div className="text-xs text-slate-500 mt-1">{meta.date}</div>}
        <div className="prose prose-tiryaq mt-4" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
}
