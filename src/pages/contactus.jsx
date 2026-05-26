import "../styles/contact.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import contactImage from "../assets/maskotcall.png";
import logo from "../assets/logo.png";

const translations = {
  id: {
    produk: "Produk",
    tentang: "Tentang MPK",
    layanan: "Layanan Kami",
    hubungi: "Hubungi Kami",
  },
  en: {
    produk: "Products",

    layanan: "Our Services",
    hubungi: "Contact Us",
  },
};

const footerProductLinks = [
  { label: "Roll Film", path: "/produk" },
  { label: "Standing Pouch", path: "/produk" },
  { label: "Kemasan Beras", path: "/produk" },
  { label: "Vacuum Bag", path: "/produk" },
];

const footerCompanyLinks = [
  { label: "Tentang Kami", path: "/about" },
  { label: "Layanan Produksi", path: "/service" },
  { label: "Kontrol Kualitas", path: "/service" },
  { label: "Hubungi Kami", path: "/contact" },
];

function ContactUs() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("id");
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* LANGUAGE BAR */}
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
        <img
          src={logo}
          alt="Manunggal"
          className="nav-logo"
          onClick={() => navigate("/")}
        />
        <ul>
          <li onClick={() => handleNavigate("/produk")}>{t.produk}</li>
          <li onClick={() => handleNavigate("/about")}>{t.tentang}</li>
          <li onClick={() => handleNavigate("/service")}>{t.layanan}</li>
          <li onClick={() => handleNavigate("/contact")}>{t.hubungi}</li>
        </ul>
      </div>

      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-text">
          <span className="small-title">Contact Us</span>
          <h2>Konsultasikan Kebutuhan Kemasan Anda</h2>
          <p>
            Apakah Anda sedang mencari kemasan roll, pouch, vacuum bag, atau
            kemasan plastik custom? Tim kami siap membantu diskusi material,
            ukuran, model, hingga kebutuhan cetak agar kemasan Anda sesuai
            dengan karakter produk dan target pasar.
          </p>
        </div>

        <div className="hero-image">
          <div className="circle-image">
            <img src={contactImage} alt="Contoh kemasan produk" />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-info">
          <span className="small-title">Get In Touch</span>
          <h2>Hubungi Tim Marketing Kami</h2>
          <p>
            Kami siap membantu kebutuhan sampling, penawaran harga, konsultasi
            spesifikasi, hingga penjadwalan repeat order untuk kebutuhan kemasan
            Anda.
          </p>

          <ul>
            <li>
              📞 087890876782
            </li>
            <li>
              📧 sales@manunggal.co.id
            </li>
            <li>⏰ 08.00 – 17.00 (Senin - Jumat)</li>
            <li>📍 Jl. Cukang Galih Kidul No 164, Curug, Tangerang</li>
          </ul>
        </div>

        <div className="contact-form">
          <input type="text" placeholder="Nama perusahaan / brand" />
          <input type="email" placeholder="E-mail aktif" />
          <input type="tel" placeholder="Nomor WhatsApp" />
          <textarea placeholder="Tuliskan jenis produk, ukuran kemasan, perkiraan jumlah, dan kebutuhan cetak" />
          <button>Kirim Permintaan Konsultasi</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-dark">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={logo} alt="Manunggal" className="footer-logo" />
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
              {footerProductLinks.map((item) => (
                <li key={item.label} onClick={() => handleNavigate(item.path)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Perusahaan</h4>
            <ul>
              {footerCompanyLinks.map((item) => (
                <li key={item.label} onClick={() => handleNavigate(item.path)}>
                  {item.label}
                </li>
              ))}
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

export default ContactUs;
