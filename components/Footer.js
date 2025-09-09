// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid sm:grid-cols-2 gap-6 text-sm">
        
        {/* القسم الأيسر */}
        <div>
          <h3 className="font-bold text-[var(--tq-primary)] text-lg">Tiryaq</h3>
          <p className="text-gray-600 mt-2">
            Digital health & medical education for our region.
          </p>
        </div>

        {/* القسم الأيمن */}
        <div>
          <h3 className="font-medium text-gray-800">Contact</h3>
          <p className="text-gray-600 mt-2">info@tiryaq.health</p>
          <p className="text-gray-600">Khartoum • Cairo • Remote</p>
        </div>
      </div>

      {/* الحقوق */}
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Tiryaq. All rights reserved.
      </div>
    </footer>
  );
}
