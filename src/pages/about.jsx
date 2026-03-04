import "../styles/about.css";
import "../styles/reveal.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MPK } from "../content/companyProfile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/useLanguage";
const translations = {
  id: {
    home: "Beranda",
    produk: "Produk",
    tentang: "Tentang MPK",
    layanan: "Layanan Kami",
    hubungi: "Hubungi Kami",
  },
  en: {
    home: "Home",
    produk: "Products",
    tentang: "About MPK",
    layanan: "Our Services",
    hubungi: "Contact Us",
  },
};
function About() {
    const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
    const navigate = useNavigate();
      const t = translations[lang];

    useScrollReveal();

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const copy =
      lang === "id"
        ? {
            h1a: "Mitra Strategis dalam",
            h1b: "Solusi Kemasan Fleksibel",
            p1:
              "PT. Manunggal Prima Kemasindo (MPK) adalah perusahaan manufaktur kemasan fleksibel. Kami membantu brand memilih struktur material, format, dan proses produksi yang tepat agar kemasan tampil kuat, menarik, dan konsisten.",
            bullets: [
              "Proses produksi lengkap: printing, dry lamination, slitting, rewinding, bag making",
              `Pilihan material: ${MPK.materials.join(", ")}`,
              `Aplikasi kemasan: ${MPK.packagingApplications.slice(0, 4).join(", ")}, dan lainnya`,
            ],
            stats: [
              { v: MPK.facilities.length, k: "Proses Produksi" },
              { v: MPK.materials.length, k: "Material" },
              { v: MPK.packagingApplications.length, k: "Aplikasi" },
            ],
          }
        : {
            h1a: "A Strategic Partner in",
            h1b: "Flexible Packaging Solutions",
            p1:
              "PT. Manunggal Prima Kemasindo (MPK) is a flexible packaging manufacturer. We help brands choose the right material structure, packaging formats, and production processes to deliver strong, attractive, and consistent packaging.",
            bullets: [
              "End-to-end processes: printing, dry lamination, slitting, rewinding, bag making",
              `Material options: ${MPK.materials.join(", ")}`,
              `Applications: ${MPK.packagingApplications.slice(0, 4).join(", ")}, and more`,
            ],
            stats: [
              { v: MPK.facilities.length, k: "Processes" },
              { v: MPK.materials.length, k: "Materials" },
              { v: MPK.packagingApplications.length, k: "Applications" },
            ],
          };
  return (
    <>
      {/* TOP BAR */}
      <div className="language-selector">
        <ul>
          <li onClick={() => setLang("en")} className={lang === "en" ? "active-lang" : ""}>🇬🇧 English</li>
          <li onClick={() => setLang("id")} className={lang === "id" ? "active-lang" : ""}>🇮🇩 Indonesia</li>
          <li>Office: {MPK.contact.phoneOffice}</li>
        </ul>
      </div>

      {/* NAVBAR */}
      <Navbar
        brand={MPK.brand}
        scrolled={scrolled}
        links={[
          { label: t.home, to: "/" },
          { label: t.produk, to: "/produk" },
          { label: t.tentang, to: "/about" },
          { label: t.layanan, to: "/service" },
          { label: t.hubungi, to: "/contact" },
        ]}
      />

      {/* HERO ABOUT */}
      <section className="about-hero">
        <div className="about-grid">
          <div className="about-text reveal">
            <h1>
              {copy.h1a}{" "}
              <span>{copy.h1b}</span>
            </h1>

            <p>
              {copy.p1}
            </p>

            <p style={{ marginTop: 14 }}>
              <strong>{lang === "id" ? "Pernyataan perusahaan:" : "Company statement:"}</strong>{" "}
              {MPK.statement[lang]}
            </p>

            <ul>
              {copy.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="stats">
              {copy.stats.map((s) => (
                <div className="stat-card" key={s.k}>
                  <h3>{s.v}</h3>
                  <p>{s.k}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image reveal delay-1">
            
            <img
              src="https://www.thehoneylady.co.id/wp-content/uploads/2022/04/ilustrasi-gambar-suasana-meeting-di-kantor.jpg"
              alt="Meeting"
            />
          </div>
        </div>
      </section>

      <section className="about-sections">
        <div className="section-wrap">
          <div className="split">
            <div className="panel reveal">
              <span className="small-title">{lang === "id" ? "Mengapa MPK" : "Why MPK"}</span>
              <h2>{lang === "id" ? "Fokus pada spesifikasi yang tepat" : "Focused on the right specs"}</h2>
              <p>
                {lang === "id"
                  ? "Kami membantu menerjemahkan kebutuhan produk Anda menjadi struktur material, format, dan alur produksi yang rapi. Tujuannya: kemasan tampil menarik, aman saat distribusi, dan konsisten dari batch ke batch."
                  : "We translate your product needs into material structures, formats, and a tidy production flow—so packaging looks great, stays safe during distribution, and remains consistent across batches."}
              </p>
              <ul className="about-checklist">
                {MPK.strengths[lang].map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="panel reveal delay-1">
              <span className="small-title">{lang === "id" ? "Industri" : "Industries"}</span>
              <h2>{lang === "id" ? "Aplikasi nyata di lapangan" : "Real-world applications"}</h2>
              <p>
                {lang === "id"
                  ? "Pengalaman kami dekat dengan kebutuhan FMCG—mulai dari makanan/minuman sampai home care."
                  : "We support FMCG-oriented needs—from food & beverage to home care."}
              </p>
              <div className="about-pill-grid">
                {MPK.industries[lang].map((i) => (
                  <span className="about-pill" key={i}>{i}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="panel-grid">
            <div className="panel reveal">
              <span className="small-title">{lang === "id" ? "Alur Kolaborasi" : "Collaboration Flow"}</span>
              <h2>{lang === "id" ? "Dari brief sampai produksi" : "From brief to production"}</h2>
              <ol className="about-flow">
                {MPK.collaborationFlow[lang].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>

            <div className="panel reveal delay-1">
              <span className="small-title">{lang === "id" ? "Kualitas" : "Quality"}</span>
              <h2>{lang === "id" ? "Kontrol yang konsisten" : "Consistent control"}</h2>
              <p>
                {lang === "id"
                  ? "Kami memprioritaskan kontrol proses agar hasil stabil dan sesuai spesifikasi yang disepakati."
                  : "We prioritize process control so results remain stable and aligned with agreed specifications."}
              </p>
              <ul className="about-checklist">
                {MPK.qualityPoints[lang].map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cta-band reveal">
            <div>
              <h3>{lang === "id" ? "Punya target kemasan tertentu?" : "Have a packaging target?"}</h3>
              <p>{lang === "id" ? "Kirim spesifikasi singkat—kami bantu rekomendasi struktur & format." : "Send a short brief—we’ll help recommend structure & format."}</p>
            </div>
            <button className="cta-btn" onClick={() => navigate("/contact")}>
              {lang === "id" ? "Konsultasi" : "Consult"}
            </button>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </>
  );
}
export default About