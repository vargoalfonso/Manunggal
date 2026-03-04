import React, { useState, useRef, useEffect } from "react";
import { MPK } from "../content/companyProfile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/useLanguage";
import "../styles/home.css";

function useInView(ref, options) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}

function CountUpNumber({ to, suffix = "", start, duration = 1400 }) {
  const [value, setValue] = useState(0);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!start || hasRunRef.current) return;
    hasRunRef.current = true;

    const startTime = performance.now();
    const target = Number(to) || 0;

    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [start, to, duration]);

  const formatted = new Intl.NumberFormat().format(value);
  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

/* ===================== TRANSLATIONS ===================== */
const translations = {
  id: {
    home: "Beranda",
    produk: "Produk",
    tentang: "Tentang MPK",
    layanan: "Layanan Kami",
    hubungi: "Hubungi Kami",
    tag: "Flexible Packaging",
    heroTitle: `${MPK.legalName} (${MPK.brand})`,
    heroDesc:
      "Produsen kemasan fleksibel dengan proses produksi lengkap dari printing hingga bag making. Konsultasikan kebutuhan material & format kemasan Anda bersama tim kami.",
    esgTitle: "Prinsip Kerja MPK",
    esgDesc: MPK.statement.id,
    captionProd:
      "Kemasan fleksibel untuk berbagai industri—dibuat dengan fokus pada kualitas dan konsistensi.",
  },
  en: {
    home: "Home",
    produk: "Products",
    tentang: "About MPK",
    layanan: "Our Services",
    hubungi: "Contact Us",
    tag: "Flexible Packaging",
    heroTitle: `${MPK.legalName} (${MPK.brand})`,
    heroDesc:
      "A flexible packaging manufacturer with end-to-end processes—from printing to bag making. Talk to us about material structure and packaging formats.",
    esgTitle: "How MPK Works",
    esgDesc: MPK.statement.en,
    captionProd:
      "Flexible packaging for many industries—built with quality and consistency in mind.",
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
    title: "Snack Packaging",
    text: "Struktur film untuk menjaga kerenyahan & aroma produk.",
  },
  {
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    title: "Coffee Packaging",
    text: "Pilihan material untuk membantu menjaga kesegaran dan tampilan premium.",
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    title: "Sugar Packaging",
    text: "Desain dan kekuatan seal untuk distribusi yang aman.",
  },
  {
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    title: "Cooking Oil Packaging",
    text: "Opsi material untuk kebutuhan ketahanan & kualitas cetak.",
  },
  {
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    title: "Spice Packaging",
    text: "Struktur film yang mendukung barrier dan ketahanan aroma.",
  },
  {
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    title: "Detergent Packaging",
    text: "Solusi film kuat untuk kebutuhan produk rumah tangga.",
  },
];
// Menjadi ini
const esgItems = [
  {
    title: "Quality First",
    desc: "Fokus pada konsistensi hasil cetak, laminasi, dan kualitas akhir produk.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Material & Format Fit",
    desc: `Pilihan material seperti ${MPK.materials.join(", ")} untuk menyesuaikan kebutuhan produk.`,
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Continuous Improvement",
    desc: "Pengembangan produk baru dan peningkatan kualitas/kapasitas mesin.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2nmWoa-66Yo5xylQwIiAxtvMrK2pB2l4CA&s",
  },
];
/* ===================== COMPONENT ===================== */
function Home() {
  /* language */
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  /* slider & ESG */

  const topbarRef = useRef(null);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const measure = () => {
      const h = topbarRef.current?.offsetHeight ?? 0;
      setTopOffset(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const [fadeImg, setFadeImg] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarTopOffset = scrolled ? 0 : topOffset;

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

  const experienceRef = useRef(null);
  const experienceInView = useInView(experienceRef, {
    threshold: 0.35,
    rootMargin: "0px 0px -10% 0px",
  });

  const experienceItems = [
    { to: MPK.facilities.length, suffix: "", label: lang === "id" ? "PROSES PRODUKSI" : "PRODUCTION PROCESSES" },
    { to: MPK.materials.length, suffix: "", label: lang === "id" ? "OPSIONAL MATERIAL" : "MATERIAL OPTIONS" },
    { to: MPK.packagingApplications.length, suffix: "+", label: lang === "id" ? "APLIKASI KEMASAN" : "PACKAGING APPLICATIONS" },
    { to: 5, suffix: "", label: lang === "id" ? "HARI KERJA / MINGGU" : "WORKDAYS / WEEK" },
  ];
  return (
    <>
      {/* ================= LANGUAGE BAR ================= */}
      <div className="language-selector" ref={topbarRef}>
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
          <li>Office: {MPK.contact.phoneOffice}</li>
        </ul>
      </div>

      <Navbar
        brand={MPK.brand}
        scrolled={scrolled}
        variant="overlay"
        topOffset={navbarTopOffset}
        links={[
          { label: t.home, to: "/" },
          { label: t.produk, to: "/produk" },
          { label: t.tentang, to: "/about" },
          { label: t.layanan, to: "/service" },
          { label: t.hubungi, to: "/contact" },
        ]}
      />

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
      <div className="experience" ref={experienceRef}>
        {experienceItems.map((item) => (
          <div className="aset" key={item.label}>
            <h1>
              <CountUpNumber
                to={item.to}
                suffix={item.suffix}
                start={experienceInView}
              />
            </h1>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      {/* ================= PRODUCT ================= */}
      <div className="product-card">
        <h1 className="prod">{t.produk}</h1>
        <h1 className="captionprod">
          {t.captionProd}
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
            <p className="titleesg">{t.esgTitle}</p>
            <p className="captionesg">{t.esgDesc}</p>
          </div>
          <div className="indicator" style={{ top: current * 170 + "px" }} />
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

      <Footer lang={lang} />
    </>
  );
}
export default Home;
