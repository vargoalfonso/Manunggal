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
    title: "Konsultasi Kemasan",
    desc:
      "Pendampingan untuk menentukan bentuk kemasan, ukuran, struktur material, dan finishing yang sesuai dengan karakter produk dan target pasar Anda.",
  },
  {
    title: "Desain & Persiapan Artwork",
    desc:
      "Membantu menyiapkan desain kemasan agar siap cetak, informatif, dan tetap tampil kuat saat dipasarkan di rak penjualan.",
  },
  {
    title: "Printing Kemasan",
    desc:
      "Proses cetak kemasan dengan kontrol warna yang lebih stabil untuk kebutuhan retail, distribusi, dan industri.",
  },
  {
    title: "Laminasi & Konversi",
    desc:
      "Layanan laminasi multi-layer dan pembentukan kemasan roll, pouch, sealer bag, maupun vacuum bag sesuai spesifikasi produksi.",
  },
  {
    title: "Quality Control Produk",
    desc:
      "Pengecekan kualitas material, hasil cetak, presisi ukuran, serta kekuatan seal untuk menjaga standar produksi tetap konsisten.",
  },
  {
    title: "Pengiriman & Repeat Order",
    desc:
      "Penjadwalan produksi dan pengiriman yang membantu suplai kemasan tetap aman, terencana, dan siap untuk repeat order berikutnya.",
  },
];

export default function Services() {
    const navigate = useNavigate();
      const [lang, setLang] = useState("id");
      const [scrolled, setScrolled] = useState(false);
      const t = translations[lang];
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
          Layanan Produksi untuk Mendukung
          <span> Kebutuhan Kemasan Produk Anda</span>
        </h1>
        <p>
          Kami menyediakan layanan produksi kemasan dari tahap konsultasi,
          desain, cetak, laminasi, hingga finishing untuk membantu produk
          tampil lebih profesional, aman, dan siap distribusi.
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
          Dengan pengalaman produksi, kontrol kualitas, dan fleksibilitas
          pengerjaan, kami siap menjadi mitra jangka panjang untuk kebutuhan
          kemasan plastik brand Anda dari tahap pengembangan hingga repeat
          order rutin.
        </p>

        <ul>
          <li>Material, ukuran, dan model kemasan dapat disesuaikan</li>
          <li>Proses produksi rapi dengan alur kerja yang lebih terjadwal</li>
          <li>Siap melayani kebutuhan UMKM, retail, hingga industri</li>
          <li>Fokus pada kualitas cetak, kekuatan seal, dan konsistensi hasil</li>
        </ul>
      </div>
    </section>
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
              <li>Layanan Produksi</li>
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
