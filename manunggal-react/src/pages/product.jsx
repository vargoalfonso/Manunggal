import "../styles/product.css";
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
const products = [
  {
    title: "Facility Management System",
    desc: "Sistem manajemen fasilitas terintegrasi untuk mengelola aset, pemeliharaan, kebersihan, keamanan, dan operasional gedung secara real-time.",
    features: [
      "Monitoring aset & perawatan",
      "Dashboard laporan real-time",
      "Integrasi mobile & web",
      "Manajemen vendor & teknisi",
    ],
  },
  {
    title: "Integrated Security Solution",
    desc: "Solusi keamanan terpadu berbasis teknologi modern untuk memastikan keamanan area, aset, dan sumber daya manusia.",
    features: [
      "CCTV & access control",
      "Sistem patroli digital",
      "Monitoring 24/7",
      "Pelaporan insiden otomatis",
    ],
  },
  {
    title: "Cleaning & Hygiene Management",
    desc: "Produk layanan kebersihan profesional dengan standar mutu tinggi untuk lingkungan kerja yang sehat dan produktif.",
    features: [
      "Standar SOP kebersihan",
      "Quality control berkala",
      "Tenaga kerja tersertifikasi",
      "Peralatan & bahan ramah lingkungan",
    ],
  },
  {
    title: "Building Maintenance Solution",
    desc: "Solusi perawatan gedung menyeluruh untuk menjaga nilai aset dan kenyamanan pengguna gedung.",
    features: [
      "Preventive & corrective maintenance",
      "Manajemen utilitas gedung",
      "Teknisi berpengalaman",
      "Dokumentasi & laporan lengkap",
    ],
  },
];
const productCards = [
  {
    title: "Facility Management System",
    short: "Sistem pengelolaan fasilitas terintegrasi berbasis teknologi.",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Integrated Security Solution",
    short: "Solusi keamanan modern dengan monitoring dan kontrol penuh.",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cleaning & Hygiene Management",
    short: "Manajemen kebersihan profesional berstandar tinggi.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Building Maintenance Solution",
    short: "Perawatan gedung menyeluruh dan berkelanjutan.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Product() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("id");
  const navigate = useNavigate();
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
          <li>Call us +62</li>
        </ul>
      </div>

      {/* NAVBAR */}
      <div className={`navbar1 ${scrolled ? "scrolled" : ""}`}>
        <p className="titlenav" onClick={() => navigate("/")}>
          Manunggal
        </p>
        <ul>
          <li onClick={() => navigate("/produk")}>{t.produk}</li>
          <li onClick={() => navigate("/about")}>{t.tentang}</li>
          <li onClick={() => navigate("/service")}>{t.layanan}</li>
          <li onClick={() => navigate("/contact")}>{t.hubungi}</li>
        </ul>
      </div>
      <section className="product-page">
        <div className="product-hero">
          <span className="badge">Produk Kami</span>
          <h1>
            Solusi Produk Terintegrasi untuk
            <span> Manajemen Fasilitas Modern</span>
          </h1>
          <p>
            Kami menghadirkan rangkaian produk berbasis layanan dan teknologi
            untuk mendukung efisiensi operasional, keamanan, serta keberlanjutan
            fasilitas Anda.
          </p>
        </div>
        <div className="product-card-list">
          <h2 className="section-title">Daftar Produk Kami</h2>
          <p className="section-desc">
            Produk dan solusi unggulan yang dirancang untuk mendukung
            pengelolaan fasilitas modern secara efisien dan berkelanjutan.
          </p>

          <div className="product-card-grid">
            {productCards.map((item, index) => (
              <div className="product-image-card" key={index}>
                <div className="product-image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="product-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
<h1 className="listservice">
            Solusi Produk Terintegrasi untuk
            <span className="service"> Manajemen Fasilitas Modern</span>
          </h1>
        <div className="product-list">
          
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <h2>{item.title}</h2>
              <p className="product-desc">{item.desc}</p>

              <ul className="product-features">
                {item.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="product-cta">
          <h2>Butuh Solusi yang Disesuaikan?</h2>
          <p>
            Tim kami siap membantu Anda merancang produk dan solusi yang paling
            sesuai dengan kebutuhan bisnis dan fasilitas Anda.
          </p>
          <a href="/contact" className="btn-primary">
            Konsultasi Sekarang
          </a>
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
