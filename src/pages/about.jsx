import "../styles/about.css";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useLanguage } from "../i18n/useLanguage";
import processImage from "../assets/proses .jpeg";
import logo from "../assets/logo.png";
import { aboutTranslations as translations } from "../i18n/translations";

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

function About() {
  const [scrolled, setScrolled] = React.useState(false);
  const { lang, setLang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

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

      {/* HERO ABOUT */}
      <section className="about-hero">
        <div className="about-content"></div>

        <div className="about-grid">
          <div className="about-text">
              <h1>{t.hero.title}</h1>

              <p>{t.hero.p1}</p>

              <p>{t.hero.p2}</p>

              <ul>
                {t.hero.list.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>

              <div className="stats">
                {t.hero.stats.map((s, i) => (
                  <div className="stat-card" key={i}>
                    <h3>{s.value}</h3>
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>
          </div>

          <div className="about-image">
            <img src={processImage} alt="Proses produksi kemasan" />
          </div>
        </div>

        {/* MISSION VISION GOALS */}
        <div className="mvg-section">
          <div className="mvg-card">
            <h2>{t.missionTitle}</h2>
            <p>{t.missionText}</p>
          </div>

          <div className="mvg-card">
            <h2>{t.visionTitle}</h2>
            <p>{t.visionText}</p>
          </div>

          <div className="mvg-card">
            <h2>{t.goalsTitle}</h2>
            <p>{t.goalsText}</p>
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
              style={{
                border: 0,
                borderRadius: "10px",
                marginTop: "10px",
              }}
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

export default About;