import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

/* ===================== TRANSLATIONS ===================== */
const translations = {
  id: {
    produk: "Produk",
    tentang: "Tentang MPK",
    layanan: "Layanan Kami",
    hubungi: "Hubungi Kami",
    tag: "Manajemen Fasilitas",
    heroTitle: "Grup Layanan Fasilitas Global",
    heroDesc:
      "Misi kami adalah membuat orang dan berbagai tempat beraktivitas menjadi versi terbaik mereka.",
    esgTitle: "Komitmen ESG MPK",
    esgDesc:
      "Sustainability is not just a choice, it is a responsibility for the future.",
  },
  en: {
    produk: "Products",
    tentang: "About MPK",
    layanan: "Our Services",
    hubungi: "Contact Us",
    tag: "Facility Management",
    heroTitle: "Global Facility Services Group",
    heroDesc:
      "Our mission is to make people and places the best version of themselves.",
    esgTitle: "MPK ESG Commitment",
    esgDesc: "Doing the right things in the right way.",
  },
};
const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1920",
];
const cards = [
  {
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
    title: "Running Shoes",
    text: "Sepatu olahraga ringan dan nyaman.",
  },
  {
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    title: "Smart Watch",
    text: "Jam tangan pintar modern.",
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    title: "Headphone",
    text: "Audio premium kualitas tinggi.",
  },
  {
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    title: "Running Shoes",
    text: "Sepatu olahraga ringan dan nyaman.",
  },
  {
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    title: "Smart Watch",
    text: "Jam tangan pintar modern.",
  },
  {
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    title: "Headphone",
    text: "Audio premium kualitas tinggi.",
  },
];
// Menjadi ini
const esgItems = [
  {
    title: "Net zero targets and customers’ goals",
    text: "Helping customers achieve ESG goals.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Supporting best communities",
    text: "Responsibility to communities.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Built on good governance",
    text: "Responsible management practices.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2nmWoa-66Yo5xylQwIiAxtvMrK2pB2l4CA&s",
  },
];
/* ===================== COMPONENT ===================== */
function Home() {
  const navigate = useNavigate();
  /* language */
  const [lang, setLang] = useState("id");
  const t = translations[lang];
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
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <h1 onClick={() => navigate("/")}>Manunggal</h1>

        {/* DESKTOP MENU */}
        <ul className="nav-links">
          <li onClick={() => navigate("/produk")}>{t.produk}</li>
          <li onClick={() => navigate("/about")}>{t.tentang}</li>
          <li onClick={() => navigate("/service")}>{t.layanan}</li>
          <li onClick={() => navigate("/contact")}>{t.hubungi}</li>
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
              navigate("/produk");
              setMenuOpen(false);
            }}
          >
            {t.produk}
          </li>
          <li
            onClick={() => {
              navigate("/about");
              setMenuOpen(false);
            }}
          >
            {t.tentang}
          </li>
          <li
            onClick={() => {
              navigate("/service");
              setMenuOpen(false);
            }}
          >
            {t.layanan}
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
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
          <span className="tag">{t.tag}</span>
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
          <h1>500+</h1>
          <p>ASSET DIKELOLA</p>
        </div>
        <div className="aset">
          <h1>2500</h1>
          <p>KARYAWAN</p>
        </div>
        <div className="aset">
          <h1>98%</h1>
          <p>KEPUASAN KLIEN</p>
        </div>
        <div className="aset">
          <h1>15+</h1>
          <p>PENGALAMAN</p>
        </div>
      </div>
      {/* ================= PRODUCT ================= */}
      <div className="product-card">
        <h1 className="prod">{t.produk}</h1>
        <h1 className="captionprod">
          Solusi Terpadu untuk Setiap <br /> Kebutuhan Fasilitas Anda
        </h1>
        <div className="prod-card">
          {cards.map((card, i) => (
            <div className="card" key={i}>
              <img src={card.img} className="card-img" alt="" />
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <p className="learnmore">learn more ›</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ================= ESG ================= */}

      <div className="esg-container">
        <div className="esg-list">
          <div className="esg-title">
            <p className="titleesg">Our ESG Commitment</p>
            <p className="captionesg">
              Sustainability is not just a choice, it is a responsibility for
              the future.
            </p>
          </div>
          <div className="indicator" style={{ top: current * 110 + "px" }} />
          {esgItems.map((item, i) => (
            <div
              key={i}
              className={`esg-item ${current === i ? "active" : ""}`}
              onMouseEnter={() => changeESG(i)}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="esg-image-wrapper">
          <img
            src={esgItems[current].img}
            className={`esg-image ${fadeImg ? "fade" : ""}`}
            alt=""
          />
          <div className={`esg-overlay ${!fadeImg ? "show" : ""}`}>
            <span className="overlay-tag">SUSTAINABLE IMPACT</span>
            <h2>{esgItems[current].title}</h2>
          </div>
        </div>
      </div>

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
export default Home;
