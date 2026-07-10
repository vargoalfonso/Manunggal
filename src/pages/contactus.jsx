import "../styles/contact.css";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import contactImage from "../assets/maskotcall.png";
import logo from "../assets/logo.png";
import { contactPageTranslations as translations } from "../i18n/translations";

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
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
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
        
        <div className="nav-brand" onClick={() => navigate("/")}> 
                  <img
                    src={logo}
                    alt="Manunggal"
                    className="nav-logo"
                     onClick={() => navigate("/")}
                  />
                  <div className="nav-brand-text">
                    <h2>Manunggal Prima Kemasindo</h2>
                  </div>
                </div>
         <ul>
          <li className={location.pathname.startsWith('/produk') ? 'active-link' : ''} onClick={() => handleNavigate("/produk")}>{t.produk}</li>
          <li className={location.pathname.startsWith('/about') ? 'active-link' : ''} onClick={() => handleNavigate("/about")}>{t.tentang}</li>
          <li className={location.pathname.startsWith('/service') ? 'active-link' : ''} onClick={() => handleNavigate("/service")}>{t.layanan}</li>
          <li className={location.pathname.startsWith('/contact') ? 'active-link' : ''} onClick={() => handleNavigate("/contact")}>{t.hubungi}</li>
        </ul>
      </div>

      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-text">
          <span className="small-title">{t.heroSmall}</span>
          <h2>{t.heroTitle}</h2>
          <p>{t.heroDesc}</p>
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
          <span className="small-title">{t.infoSmall}</span>
          <h2>{t.infoTitle}</h2>
          <p>{t.infoDesc}</p>

          <ul>
            <li>
              📞 WhatsApp Business: 
              <a href="https://wa.me/6285218007006" target="_blank" rel="noopener noreferrer">0852-1800-7006</a>
            </li>
            <li>📧 <a href="mailto:sales@manunggal.co.id">sales@manunggal.co.id</a></li>
            <li>⏰ Senin – Sabtu | 08.00 – 17.00</li>
            <li>
              <button
                className="btn-map"
                onClick={() => window.open("https://maps.app.goo.gl/pCB5TXHxWZFofuqcA?g_st=aw", "_blank")}
              >
                Lihat Lokasi di Maps
              </button>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <ContactForm />
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
             src="https://www.google.com/maps?q=PT.+Manunggal+Prima+Kemasindo,+Jl.+Cukang+Galih+Kidul+No.164,+Cukanggalih,+Kec.+Curug,+Kabupaten+Tangerang,+Banten+15810&output=embed"
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

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const WA_NUMBER = "6285218007006"; // 085218007006

  const handleSubmit = (e) => {
    e.preventDefault();
    const parts = [
      `Nama: ${name}`,
      `E-mail: ${email}`,
      `No WA: ${phone}`,
      `Keluhan / Kebutuhan: ${message}`,
    ];
    const text = encodeURIComponent(parts.join("\n"));
    const url = `https://wa.me/${WA_NUMBER}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form-inner">
      <input
        type="text"
        placeholder={"Nama perusahaan / brand"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder={"E-mail aktif"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder={"Nomor WhatsApp"}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <textarea
        placeholder={"Tuliskan jenis produk, ukuran kemasan, perkiraan jumlah, dan kebutuhan cetak"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Kirim Permintaan Konsultasi</button>
    </form>
  );
}
