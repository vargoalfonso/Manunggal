import "../styles/services.css";
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

const services = [
  {
    title: "Facility Management Services",
    desc:
      "Layanan pengelolaan fasilitas terpadu yang mencakup operasional gedung, pemeliharaan, dan optimalisasi aset.",
  },
  {
    title: "Cleaning Services",
    desc:
      "Layanan kebersihan profesional dengan standar kualitas tinggi untuk mendukung lingkungan kerja yang sehat.",
  },
  {
    title: "Security Services",
    desc:
      "Layanan keamanan terintegrasi dengan personel terlatih dan dukungan teknologi modern.",
  },
  {
    title: "Engineering & Maintenance",
    desc:
      "Layanan teknis dan pemeliharaan gedung untuk memastikan keandalan dan umur panjang aset.",
  },
  {
    title: "Landscaping & Environment",
    desc:
      "Pengelolaan lingkungan dan lanskap untuk menciptakan area yang asri, rapi, dan berkelanjutan.",
  },
  {
    title: "Consulting & Custom Solution",
    desc:
      "Layanan konsultasi untuk merancang solusi manajemen fasilitas yang disesuaikan dengan kebutuhan klien.",
  },
];

export default function Services() {
    const navigate = useNavigate();
      const [lang, setLang] = useState("id");
      const [scrolled, setScrolled] = useState(false);
      const t = translations[lang];
  return (
    <>
    <div className="language-selector">
        <ul>
          <li
            onClick={() => setLang("en")}
            className={lang === "en" ? "active-lang" : ""}
          >
            🇬🇧 English
          </li>
          <li
            onClick={() => setLang("id")}
            className={lang === "id" ? "active-lang" : ""}
          >
            🇮🇩 Indonesia
          </li>
          <li>Call us on +62</li>
        </ul>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className={`navbar1 ${scrolled ? "scrolled" : ""}`}>
       <p className="titlenav"onClick={() => navigate("/")}>Manunggal</p>
        <ul>
            <li onClick={() => navigate("/produk")}>{t.produk}</li>
          <li onClick={() => navigate("/about")}>{t.tentang}</li>
          <li onClick={() => navigate("/service")}>{t.layanan}</li>
          <li onClick={() => navigate("/contact")}>{t.hubungi}</li>
        </ul>
      </div>
    <section className="services-page">
      <div className="services-hero">
        <span className="badge">Layanan Kami</span>
        <h1>
          Layanan Profesional untuk Mendukung
          <span> Keberhasilan Operasional Anda</span>
        </h1>
        <p>
          Kami menyediakan layanan manajemen fasilitas menyeluruh yang dirancang
          untuk meningkatkan efisiensi, keamanan, dan kenyamanan lingkungan kerja.
        </p>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="services-info">
        <h2>Mengapa Memilih Kami?</h2>
        <p>
          Dengan pengalaman, sistem kerja terstandar, serta dukungan sumber daya
          profesional, kami berkomitmen menjadi mitra strategis yang dapat
          diandalkan dalam pengelolaan fasilitas Anda.
        </p>

        <ul>
          <li>Tenaga kerja profesional & tersertifikasi</li>
          <li>Proses kerja terukur dan transparan</li>
          <li>Fleksibel dan menyesuaikan kebutuhan klien</li>
          <li>Komitmen pada kualitas dan keberlanjutan</li>
        </ul>
      </div>
    </section>
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
