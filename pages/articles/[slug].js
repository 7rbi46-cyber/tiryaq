import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export async function getStaticPaths(){
  const dir = path.join(process.cwd(), "content", "articles");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
  const paths = files.map((fname)=>{
    const raw = fs.readFileSync(path.join(dir, fname), "utf8");
    const { data } = matter(raw);
    return { params: { slug: data.slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }){
  const dir = path.join(process.cwd(), "content", "articles");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
  for(const fname of files){
    const raw = fs.readFileSync(path.join(dir, fname), "utf8");
    const { data, content } = matter(raw);
    if(data.slug === params.slug){
      const html = marked.parse(content);
      return { props: { meta: data, html } };
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
      </Head>
      <article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8">
        <div className="text-xs text-slate-500 uppercase">{meta.tag}</div>
        <h1 className="text-2xl font-bold text-[var(--tq-primary)] mt-1">{meta.title}</h1>
        {meta.date && <div className="text-xs text-slate-500 mt-1">{meta.date}</div>}
        <div className="prose prose-tiryaq mt-4" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
}
