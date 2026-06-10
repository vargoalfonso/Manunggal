import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/useLanguage";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/home.css";
import { homeTranslations as translations } from "../i18n/translations";
import slider1 from "../assets/slider.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import Product1 from "../assets/semuajeniskemasan.jpeg";
import Product2 from "../assets/kemasan beras.jpeg";
import Product3 from "../assets/kemasan masker.jpeg";
import Product4 from "../assets/kemasan sealer.jpeg";
import Product5 from "../assets/kemasan vakum.jpeg";
import Product6 from "../assets/proses .jpeg";
import logo from "../assets/logo.png";

/* translations are centralized in src/i18n/translations.js */
const images = [slider1, slider2, slider3];
const cards = [
  { img: Product1 },
  { img: Product2 },
  { img: Product3 },
  { img: Product4 },
  { img: Product5 },
  { img: Product6 },
];
// Menjadi ini
const esgItems = [
  { img: Product1 },
  { img: Product4 },
  { img: Product6 },
];

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
/* ===================== COMPONENT ===================== */
function Home() {
  const navigate = useNavigate();
  /* language */
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const location = useLocation();
  /* slider & ESG */
  const [menuOpen, setMenuOpen] = useState(false);

  const itemRefs = useRef([]);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const [fadeImg, setFadeImg] = useState(false);
  const [indicatorTop, setIndicatorTop] = useState(0);
  useEffect(() => {
    if (itemRefs.current[current]) {
      setIndicatorTop(itemRefs.current[current].offsetTop);
    }
  }, [current]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeESG = (index) => {
    setFadeImg(true);
    setTimeout(() => {
      setCurrent(index);
      setFadeImg(false);
    }, 200);
  };
  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 300);
  };
  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(false);
    }, 300);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= LANGUAGE BAR ================= */}
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
      <div className={`navbar ${scrolled ? "scrolled" : ""} home`}>
        
        <div className="nav-brand" onClick={() => navigate("/")}> 
          <img
            src={logo}
            alt="Manunggal"
            className="nav-logo"
          />
          <div className="nav-brand-text">
            <h2>Manunggal Prima Kemasindo</h2>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-links">
          <li className={location.pathname.startsWith('/produk') ? 'active-link' : ''} onClick={() => handleNavigate("/produk")}>{t.produk}</li>
          <li className={location.pathname.startsWith('/about') ? 'active-link' : ''} onClick={() => handleNavigate("/about")}>{t.tentang}</li>
          <li className={location.pathname.startsWith('/service') ? 'active-link' : ''} onClick={() => handleNavigate("/service")}>{t.layanan}</li>
          <li className={location.pathname.startsWith('/contact') ? 'active-link' : ''} onClick={() => handleNavigate("/contact")}>{t.hubungi}</li>
        </ul>

        {/* BURGER */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li
            onClick={() => {
              handleNavigate("/produk");
            }}
          >
            {t.produk}
          </li>
          <li
            onClick={() => {
              handleNavigate("/about");
            }}
          >
            {t.tentang}
          </li>
          <li
            onClick={() => {
              handleNavigate("/service");
            }}
          >
            {t.layanan}
          </li>
          <li
            onClick={() => {
              handleNavigate("/contact");
            }}
          >
            {t.hubungi}
          </li>
        </ul>
      </div>

      {/* ================= HERO ================= */}
      <div className="hero-container">
        <img
          src={images[current]}
          className={`hero-img ${fade ? "fade" : ""}`}
          alt="hero"
        />

        <div className="hero-content">
          <p className="tag">{t.tag}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>

          <div className="slider-buttons">
            <button onClick={prevSlide}>‹</button>
            <button onClick={nextSlide}>›</button>
          </div>
        </div>
      </div>
      {/* ================= validasi ================= */}
      <div className="experience">
        <div className="aset">
          <h1>120+</h1>
          <p>{t.experience.variants}</p>
        </div>
        <div className="aset">
          <h1>50+</h1>
          <p>{t.experience.partners}</p>
        </div>
        <div className="aset">
          <h1>98%</h1>
          <p>{t.experience.repeat}</p>
        </div>
        <div className="aset">
          <h1>15+</h1>
          <p>{t.experience.years}</p>
        </div>
      </div>
      {/* ================= PRODUCT ================= */}
      <div className="product-card">
        <h1 className="prod">{t.produk}</h1>
        <h1 className="captionprod">{t.productCaption}</h1>
        <div className="prod-card">
          {cards.map((card, i) => {
            const cardText = t.cards && t.cards[i] ? t.cards[i] : { title: '', text: '' };
            return (
              <div className="card" key={i} onClick={() => handleNavigate("/produk")}>
                <img src={card.img} className="card-img" alt="" />
                <div className="card-body">
                  <h3>{cardText.title}</h3>
                  <p>{cardText.text}</p>
                  <p
                    className="learnmore"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleNavigate("/produk");
                    }}
                  >
                    {t.learnMore}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ================= ESG ================= */}

      <div className="esg-container">
        <div className="esg-list">
          <div className="esg-title">
            <p className="titleesg">{t.esgTitle}</p>
            <p className="captionesg">{t.esgDesc}</p>
          </div>
          <div
            className="indicator"
            style={{ top: indicatorTop + 0 + "px" }}
          />
          {esgItems.map((item, i) => {
            const itemText = t.esgItems && t.esgItems[i] ? t.esgItems[i] : { title: '', desc: '' };
            return (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`esg-item ${current === i ? "active" : ""}`}
                onMouseEnter={() => changeESG(i)}
              >
                <h3>{itemText.title}</h3>
                <p>{itemText.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="esg-image-wrapper">
          <img
            src={esgItems[current].img}
            className={`esg-image ${fadeImg ? "fade" : ""}`}
            alt=""
          />
          <div className={`esg-overlay ${!fadeImg ? "show" : ""}`}>
            <span className="overlay-tag">MANUNGGAL PACKAGING</span>
            <h2>{t.esgItems && t.esgItems[current] ? t.esgItems[current].title : ''}</h2>
          </div>
        </div>
      </div>

      <footer className="footer-dark">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Manunggal Prima Kemasindo</h2>
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
export default Home;
