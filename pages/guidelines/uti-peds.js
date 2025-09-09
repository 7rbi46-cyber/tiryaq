export default function PedsUTI(){
  return (
    <article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-[var(--tq-primary)]">Pediatric UTI — Quick Guide</h1>
        <p className="text-sm text-gray-600 mt-1">For quick decision support — not a substitute for clinical judgment.</p>
      </header>

      <section>
        <h2 className="font-semibold">Red Flags</h2>
        <ul className="list-disc ps-6 text-sm text-gray-700">
          <li>Ill-appearing / sepsis signs</li>
          <li>Age &lt; 3 months with fever</li>
          <li>Poor oral intake / dehydration</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold">Initial Workup</h2>
        <ul className="list-disc ps-6 text-sm text-gray-700">
          <li>Urinalysis ± culture (catheter sample if needed)</li>
          <li>Consider ultrasound if recurrent or atypical</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold">First-line Rx (example)</h2>
        <div className="text-sm text-gray-700">
          Nitrofurantoin (age &gt;= 1 month) or Cephalexin — adjust per local resistance patterns.
        </div>
      </section>

      <footer className="text-xs text-gray-500">
        Built by Tiryaq. Verify doses with local formularies.
      </footer>
    </article>
  );
}
