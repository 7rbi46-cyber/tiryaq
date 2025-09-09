// pages/404.js
import Link from "next/link";

export default function NotFound(){
  return (
    <div className="max-w-3xl mx-auto text-center py-24">
      <h1 className="text-3xl font-bold text-[var(--tq-primary)]">Page not found</h1>
      <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="inline-block mt-6 rounded-xl bg-[var(--tq-primary)] text-white px-5 py-3"
      >
        Back home
      </Link>
    </div>
  );
}
