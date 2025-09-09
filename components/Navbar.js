// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home", ar: "الرئيسية" },
  { href: "/articles", label: "Articles", ar: "مقالات" },
  { href: "/guidelines", label: "Guidelines", ar: "إرشادات" },
  { href: "/programs", label: "Programs", ar: "برامج" },
  { href: "/research", label: "Research", ar: "بحوث" },
  { href: "/about", label: "About", ar: "عن تِرياق" },
  { href: "/contact", label: "Contact", ar: "اتصال" },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [rtl, setRtl] = useState(false);

  // تحميل تفضيل اللغة من التخزين المحلي
  useEffect(() => {
    const saved = localStorage.getItem("tq-rtl") === "1";
    setRtl(saved);
    document.body.classList.toggle("rtl", saved);
  }, []);

  // تبديل الاتجاه (عربي/إنجليزي) ببساطة
  const toggleLang = () => {
    const next = !rtl;
    setRtl(next);
    document.body.classList.toggle("rtl", next);
    localStorage.setItem("tq-rtl", next ? "1" : "0");
  };

  return (
    <header className="bg-[var(--tq-primary)] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* الشعار */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/tiryaq-logo.jpg" alt="Tiryaq" width={36} height={36} />
          <span className="font-bold text-lg tracking-wide">Tiryaq</span>
        </Link>

        {/* أزرار يمين: لغة + قائمة موبايل */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="rounded-lg bg-white/15 px-3 py-1 text-sm hover:bg-white/25 transition"
            aria-label="Toggle language"
          >
            {rtl ? "EN" : "عربي"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg bg-white/15 px-3 py-1 text-sm hover:bg-white/25 transition"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* روابط الديسكتوب */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "hover:text-gray-200 transition " +
                  (active ? "underline underline-offset-8 decoration-2" : "")
                }
              >
                {rtl ? l.ar : l.label}
              </Link>
            );
          })}
          <button
            onClick={toggleLang}
            className="ml-2 rounded-lg bg-white/15 px-3 py-1 text-sm hover:bg-white/25 transition"
            aria-label="Toggle language"
          >
            {rtl ? "EN" : "عربي"}
          </button>
        </nav>
      </div>

      {/* قائمة الموبايل */}
      {open && (
        <div className="md:hidden bg-[var(--tq-primary)]/95 border-t border-white/20">
          <nav className="max-w-7xl mx-auto px-4 py-3 grid gap-2 text-sm">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={
                    "py-2 rounded-md px-2 hover:bg-white/10 " +
                    (active ? "bg-white/15" : "")
                  }
                >
                  {rtl ? l.ar : l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
