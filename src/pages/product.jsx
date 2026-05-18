import "../styles/product.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import allPackaging from "../assets/semuajeniskemasan.jpeg";
import ricePackaging from "../assets/kemasan beras.jpeg";
import maskPackaging from "../assets/kemasan masker.jpeg";
import sealerPackaging from "../assets/kemasan sealer.jpeg";
import vacuumPackaging from "../assets/kemasan vakum.jpeg";
import processPackaging from "../assets/proses .jpeg";
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
    title: "Roll Film Printing",
    image: allPackaging,
    desc: "Kemasan roll printing untuk mesin otomatis dengan hasil cetak stabil, efisien untuk produksi massal, dan fleksibel menyesuaikan karakter produk.",
    features: [
      "Cocok untuk snack, kopi, gula, bumbu, dan kebutuhan retail modern",
      "Pilihan material PET, OPP, CPP, PE, dan kombinasi multilayer",
      "Desain cetak custom untuk identitas brand dan informasi produk",
      "Ideal untuk mesin filling otomatis dengan volume produksi menengah hingga besar",
    ],
  },
  {
    title: "Standing Pouch & Center Seal",
    image: maskPackaging,
    desc: "Kemasan pouch yang praktis dan menarik untuk display rak, cocok untuk produk konsumsi harian yang membutuhkan tampilan profesional dan perlindungan optimal.",
    features: [
      "Model standing pouch, three side seal, center seal, dan bentuk custom",
      "Tersedia opsi zipper, euro hole, window, serta finishing glossy atau doff",
      "Membantu melindungi produk dari udara, kelembapan, dan kontaminasi ringan",
      "Sangat cocok untuk makanan ringan, masker, kopi, bubuk minuman, dan produk retail",
    ],
  },
  {
    title: "Kemasan Beras & Karung Laminasi",
    image: ricePackaging,
    desc: "Kemasan beras dan karung laminasi yang dirancang kuat untuk distribusi, penyimpanan, dan branding produk kebutuhan pokok di pasar retail maupun grosir.",
    features: [
      "Ukuran, ketebalan, dan model handle dapat disesuaikan",
      "Cocok untuk beras, gula, tepung, pakan, dan bahan kebutuhan pokok lain",
      "Sambungan rapi, kuat, dan tahan untuk kebutuhan distribusi",
      "Memberikan ruang informasi produk dan branding yang lebih jelas",
    ],
  },
  {
    title: "Sealer Bag",
    image: sealerPackaging,
    desc: "Sealer bag untuk pengemasan praktis yang membantu menjaga kerapian, keamanan isi, dan tampilan produk sebelum masuk ke pasar.",
    features: [
      "Cocok untuk bumbu, makanan kering, komponen retail, dan produk harian",
      "Ukuran dan ketebalan dapat disiapkan sesuai kebutuhan filling",
      "Mudah dipadukan dengan mesin sealer manual maupun semi otomatis",
      "Membantu kemasan tampil lebih rapi, bersih, dan profesional",
    ],
  },
  {
    title: "Vacuum Bag",
    image: vacuumPackaging,
    desc: "Kemasan vacuum bag untuk membantu menjaga kesegaran produk lebih lama, mengurangi udara di dalam kemasan, dan meningkatkan higienitas produk.",
    features: [
      "Cocok untuk frozen food, daging, seafood, bumbu, dan produk olahan",
      "Material food grade yang aman untuk kebutuhan pengemasan pangan",
      "Tersedia berbagai ukuran, ketebalan, dan spesifikasi seal strength",
      "Mendukung tampilan produk yang bersih, padat, dan siap distribusi",
    ],
  },
  {
    title: "Proses Produksi & Konversi",
    image: processPackaging,
    desc: "Tahap proses produksi kami memastikan setiap kemasan melewati alur cetak, laminasi, pemotongan, dan finishing yang terkontrol sebelum dikirim ke pelanggan.",
    features: [
      "Proses kerja rapi untuk menjaga konsistensi hasil cetak dan ukuran",
      "Pemeriksaan kualitas dilakukan pada material, warna, dan kekuatan seal",
      "Mendukung repeat order dengan spesifikasi yang lebih stabil",
      "Cocok untuk brand yang membutuhkan suplai kemasan berkelanjutan",
    ],
  },
];
const productCards = [
  {
    title: "Semua Jenis Kemasan",
    short: "Pilihan roll, pouch, vacuum, dan karung untuk berbagai kategori produk retail maupun industri.",
    image: allPackaging,
  },
  {
    title: "Kemasan Beras",
    short: "Kemasan kuat untuk beras dan kebutuhan pokok dengan area cetak yang informatif.",
    image: ricePackaging,
  },
  {
    title: "Kemasan Masker & Retail",
    short: "Kemasan praktis untuk produk kesehatan, retail, dan kebutuhan display rak.",
    image: maskPackaging,
  },
  {
    title: "Kemasan Sealer",
    short: "Kemasan praktis untuk menjaga kerapian isi, keamanan, dan kemudahan sealing.",
    image: sealerPackaging,
  },
  {
    title: "Kemasan Vakum",
    short: "Solusi food grade untuk membantu memperpanjang kesegaran dan shelf life produk.",
    image: vacuumPackaging,
  },
  {
    title: "Proses Produksi",
    short: "Tahapan cetak, laminasi, dan finishing yang mendukung hasil kemasan lebih konsisten.",
    image: processPackaging,
  },
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

export default function Product() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("id");
  const navigate = useNavigate();
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
          <li onClick={() => handleNavigate("/produk")}>{t.produk}</li>
          <li onClick={() => handleNavigate("/about")}>{t.tentang}</li>
          <li onClick={() => handleNavigate("/service")}>{t.layanan}</li>
          <li onClick={() => handleNavigate("/contact")}>{t.hubungi}</li>
        </ul>
      </div>
      <section className="product-page">
        <div className="product-hero">
          <span className="badge">Produk Kami</span>
          <h1>
            Solusi Produk Kemasan untuk
            <span> Brand, Retail, dan Industri</span>
          </h1>
          <p>
            Kami menghadirkan berbagai solusi kemasan plastik yang dirancang
            untuk melindungi isi produk, meningkatkan daya tarik visual di rak,
            dan mendukung proses pengemasan hingga distribusi secara lebih
            efisien.
          </p>
        </div>
        <div className="product-card-list">
          <h2 className="section-title">Daftar Produk Kami</h2>
          <p className="section-desc">
            Setiap jenis kemasan dapat disesuaikan dari sisi ukuran, material,
            model, hingga kebutuhan cetak agar selaras dengan karakter produk
            dan strategi penjualan Anda.
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
            Spesifikasi Produk untuk
            <span className="service"> Kebutuhan Kemasan Modern</span>
          </h1>
        <div className="product-list">
          
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-card-thumb">
                <img src={item.image} alt={item.title} />
              </div>
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
          <h2>Butuh Kemasan yang Disesuaikan?</h2>
          <p>
            Tim kami siap membantu menentukan struktur material, ukuran, model,
            sampai kebutuhan cetak agar kemasan Anda lebih fungsional, menarik,
            dan siap diproduksi sesuai target pasar.
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
