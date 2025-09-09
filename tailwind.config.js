/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // لو استعملت مجلد app لاحقاً
  ],
  darkMode: "class", // تقدر تبدّل سمة داكنة لاحقاً بإضافة class="dark" على <html> أو <body>
  theme: {
    extend: {
      colors: {
        // ألوان اختيارية لو حبيت تستخدمها بدلاً من var(...)
        tq: {
          primary: "#7c1f3c",
          nile: "#1f3a5f",
          sand: "#f4e7c6",
          bg: "#f9fafb",
          text: "#1f2937",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // اختياري لكنه مفيد للمقالات/الإرشادات
  ],
};
