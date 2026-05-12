import "../styles/about.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import processImage from "../assets/proses .jpeg";
const translations = {
  id: {
    produk: "Produk",
    tentang: "Tentang MPK",
    layanan: "Layanan Kami",
    hubungi: "Hubungi Kami",
  },
  en: {
    produk: "Products",
    tentang: "About MPK",
    layanan: "Our Services",
    hubungi: "Contact Us",
  },
};
function About() {
    const [scrolled, setScrolled] = useState(false);
    const [lang, setLang] = useState("id");
    const navigate = useNavigate();
      const t = translations[lang];
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* TOP BAR */}
      <div className="language-selector">
        <ul>
          <li onClick={() => setLang("en")} className={lang === "en" ? "active-lang" : ""}>🇬🇧 English</li>
          <li onClick={() => setLang("id")} className={lang === "id" ? "active-lang" : ""}>🇮🇩 Indonesia</li>
          <li>Call us +62</li>
        </ul>
      </div>

      {/* NAVBAR */}
      <div className={`navbar1 ${scrolled ? "scrolled" : ""}`}>
        <p className="titlenav"onClick={() => navigate("/")}>Manunggal</p>
        <ul>
            <li onClick={() => navigate("/produk")}>{t.produk}</li>
          <li onClick={() => navigate("/about")}>{t.tentang}</li>
          <li onClick={() => navigate("/service")}>{t.layanan}</li>
          <li onClick={() => navigate("/contact")}>{t.hubungi}</li>
        </ul>
      </div>

      {/* HERO ABOUT */}
      <section className="about-hero">
        <div className="about-content"></div>


        <div className="about-grid">
          <div className="about-text">
            <h1>
              Mitra Strategis untuk{" "}
              <span>Kemasan Fleksibel dan Plastik Berkualitas</span>
            </h1>

            <p>
              Manunggal Packaging berfokus pada produksi kemasan plastik yang
              fungsional, aman, dan menarik secara visual. Kami membantu brand
              dan pelaku industri menghadirkan kemasan yang siap jual melalui
              proses produksi yang rapi, adaptif, dan konsisten.
            </p>

            <p>
              Dari kebutuhan kemasan retail skala menengah hingga suplai untuk
              industri, kami menyesuaikan material, ukuran, model, serta hasil
              cetak agar kemasan tidak hanya melindungi produk, tetapi juga
              memperkuat nilai jualnya.
            </p>

            <ul>
              <li>Spesialis kemasan roll, pouch, karung, sealer, dan vacuum bag</li>
              <li>Dukungan desain, pemilihan material, dan finishing sesuai kebutuhan produk</li>
              <li>Didukung tim produksi berpengalaman dengan quality control yang terjaga</li>
            </ul>

            <div className="stats">
              <div className="stat-card">
                <h3>15+</h3>
                <p>Tahun Pengalaman</p>
              </div>
              <div className="stat-card">
                <h3>120+</h3>
                <p>Varian Kemasan</p>
              </div>
              <div className="stat-card">
                <h3>98%</h3>
                <p>Repeat Order</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src={processImage}
              alt="Proses produksi kemasan"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-dark">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Manunggal</h2>
            <p>Flexible Packaging & Plastic Solutions</p>

            <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.09134404035!2d106.51413157487074!3d-6.250644161249784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4206d3228bb2cf%3A0x8acae4dab232625e!2sBojong%2C%20Cikupa%2C%20Tangerang%20Regency%2C%20Banten%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="180"
            style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>

          <div className="footer-links">
            <h4>Produk</h4>
            <ul>
              <li>Roll Film</li>
              <li>Standing Pouch</li>
              <li>Kemasan Beras</li>
              <li>Vacuum Bag</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Perusahaan</h4>
            <ul>
              <li>Tentang Kami</li>
              <li>Kapasitas Produksi</li>
              <li>Kontrol Kualitas</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>☎ 0812-3456-7890</p>
            <p>Tangerang, Indonesia</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Manunggal</span>
          <span>Privacy • Terms</span>
        </div>
      </footer>
    </>
  );
}
export default About