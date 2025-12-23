import "../styles/about.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
              Mitra Strategis dalam{" "}
              <span>Manajemen Fasilitas Terpadu</span>
            </h1>

            <p>
              Manunggal merupakan perusahaan layanan manajemen fasilitas yang
              berkomitmen menghadirkan solusi profesional, berkelanjutan, dan
              berbasis teknologi. Kami mendukung klien dalam menciptakan
              lingkungan kerja yang aman, efisien, dan bernilai jangka panjang.
            </p>

            <ul>
              <li>Standar Operasional Bertaraf Internasional</li>
              <li>Fokus pada ESG & Sustainability</li>
              <li>Didukung Tim Profesional & Berpengalaman</li>
            </ul>

            <div className="stats">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Tahun Pengalaman</p>
              </div>
              <div className="stat-card">
                <h3>150+</h3>
                <p>Klien Aktif</p>
              </div>
              <div className="stat-card">
                <h3>24/7</h3>
                <p>Dukungan Operasional</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Meeting"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-dark">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Manunggal</h2>
            <p>Global Facility Management Company</p>

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
            <h4>Services</h4>
            <ul>
              <li>Facility Management</li>
              <li>Consulting</li>
              <li>Operations</li>
              <li>Asset Management</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>ESG</li>
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