import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== SEO & Meta Tags ===== */}
      <Head>
        <title>Tiryaq — Digital Health & Medical Education</title>
        <meta
          name="description"
          content="Evidence-based articles, pocket guidelines, programs, and research for Sudan and the region."
        />

        {/* OpenGraph (فيسبوك / واتساب / لينكدإن) */}
        <meta property="og:title" content="Tiryaq" />
        <meta
          property="og:description"
          content="Digital health & medical education platform."
        />
        <meta property="og:image" content="/tiryaq-logo.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ===== Page Content ===== */}
      <section className="bg-white rounded-2xl max-w-7xl mx-auto p-6 sm:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* النصوص */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--tq-primary)]">
              Tiryaq — Digital Health & Medical Education
            </h1>
            <p className="mt-4 text-gray-700">
              Evidence-based articles, pocket guidelines, programs, and research
              — fast, accessible, and bilingual-friendly for Sudan and the
              region.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/articles"
                className="rounded-xl bg-[var(--tq-primary)] text-white px-5 py-3 text-sm shadow hover:opacity-90"
              >
                Explore Articles
              </Link>
              <Link
                href="/about"
                className="rounded-xl border px-5 py-3 text-sm"
              >
                About Tiryaq
              </Link>
            </div>
          </div>

          {/* الصورة / الشعار */}
          <div className="rounded-3xl border p-6 bg-[var(--tq-sand)]/40 text-center">
            <Image
              src="/tiryaq-logo.jpg"
              alt="Tiryaq Logo"
              width={220}
              height={220}
              className="inline-block rounded-xl"
            />
            <div className="mt-3 text-sm text-[var(--tq-nile)] font-medium">
              Sudan • Nile • Community
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
