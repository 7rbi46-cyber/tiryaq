// pages/_app.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* شريط التنقل */}
      <Navbar />

      {/* المحتوى */}
      <main className="min-h-[70vh] px-4 py-6">
        <Component {...pageProps} />
      </main>

      {/* التذييل */}
      <Footer />
    </>
  );
}
