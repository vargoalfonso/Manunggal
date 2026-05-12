import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import slider1 from "../assets/slider.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import Product1 from "../assets/semuajeniskemasan.jpeg";
import Product2 from "../assets/kemasan beras.jpeg";
import Product3 from "../assets/kemasan masker.jpeg";
import Product4 from "../assets/kemasan sealer.jpeg";
import Product5 from "../assets/kemasan vakum.jpeg";
import Product6 from "../assets/proses .jpeg";


/* ===================== TRANSLATIONS ===================== */
const translations = {
  id: {
    produk: "Produk",
    tentang: "Tentang MPK",
    layanan: "Layanan Kami",
    hubungi: "Hubungi Kami",
    tag: "Flexible Packaging",
    heroTitle: "Solusi Kemasan Plastik untuk Brand Anda",
    heroDesc:
      "Kami memproduksi kemasan roll, pouch, karung, dan vacuum bag untuk kebutuhan pangan, retail, serta industri dengan kualitas cetak yang konsisten.",
    esgTitle: "Keunggulan MPK",
    esgDesc:
      "Material, cetak, dan proses produksi kami dirancang agar kemasan tampil kuat, aman, dan siap bersaing di pasar.",
  },
  en: {
    produk: "Products",
    tentang: "About MPK",
    layanan: "Our Services",
    hubungi: "Contact Us",
    tag: "Flexible Packaging",
    heroTitle: "Plastic Packaging Solutions for Your Brand",
    heroDesc:
      "We produce roll stock, pouches, sacks, and vacuum bags for food, retail, and industrial needs with reliable print quality.",
    esgTitle: "MPK Advantages",
    esgDesc:
      "Our materials, printing, and production process help your packaging stay strong, safe, and market-ready.",
  },
};
const images = [slider1, slider2, slider3];
const cards = [
  {
    img: Product1,
    title: "Semua Jenis Kemasan",
    text: "Pilihan roll, pouch, vacuum, dan karung untuk kebutuhan pangan, retail, dan industri.",
  },
  {
    img: Product2,
    title: "Kemasan Beras",
    text: "Kemasan tangguh untuk beras dan bahan pokok dengan area branding yang jelas.",
  },
  {
    img: Product3,
    title: "Kemasan Masker",
    text: "Kemasan retail yang rapi dan informatif untuk produk kesehatan dan kebutuhan harian.",
  },
  {
    img: Product4,
    title: "Kemasan Sealer",
    text: "Solusi kemasan praktis yang mudah disegel untuk menjaga isi tetap aman dan rapi.",
  },
  {
    img: Product5,
    title: "Kemasan Vakum",
    text: "Kemasan food grade untuk membantu menjaga kesegaran produk lebih lama.",
  },
  {
    img: Product6,
    title: "Proses Produksi",
    text: "Alur cetak, laminasi, dan finishing yang terkontrol untuk hasil lebih konsisten.",
  },
];
// Menjadi ini
const esgItems = [
  {
    title: "Material sesuai kebutuhan produk",
    desc: "Tersedia opsi roll, pouch, vacuum, dan karung dengan struktur material yang disesuaikan dengan isi, berat, dan kebutuhan distribusi.",
    img: Product1,
  },
  {
    title: "Kualitas cetak lebih konsisten",
    desc: "Tampilan kemasan dibuat lebih rapi, informatif, dan mendukung identitas brand agar menonjol di pasar.",
    img: Product4,
  },
  {
    title: "Produksi rapi dan siap kirim",
    desc: "Alur produksi yang efisien membantu menjaga repeat order, ketepatan spesifikasi, dan kesiapan suplai kemasan Anda.",
    img: Product6,
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
          <h1>120+</h1>
          <p>VARIAN KEMASAN</p>
        </div>
        <div className="aset">
          <h1>50+</h1>
          <p>MITRA BRAND</p>
        </div>
        <div className="aset">
          <h1>98%</h1>
          <p>REPEAT ORDER</p>
        </div>
        <div className="aset">
          <h1>15+</h1>
          <p>TAHUN PENGALAMAN</p>
        </div>
      </div>
      {/* ================= PRODUCT ================= */}
      <div className="product-card">
        <h1 className="prod">{t.produk}</h1>
        <h1 className="captionprod">
          Kemasan Fleksibel untuk Berbagai <br /> Kebutuhan Produk Anda
        </h1>
        <div className="prod-card">
          {cards.map((card, i) => (
            <div className="card" key={i}>
              <img src={card.img} className="card-img" alt="" />
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <p className="learnmore">Pelajari solusi kemasannya ›</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ================= ESG ================= */}

      <div className="esg-container">
        <div className="esg-list">
          <div className="esg-title">
            <p className="titleesg">{t.esgTitle}</p>
            <p className="captionesg">
              {t.esgDesc}
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
            <span className="overlay-tag">MANUNGGAL PACKAGING</span>
            <h2>{esgItems[current].title}</h2>
          </div>
        </div>
      </div>

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
export default Home;
