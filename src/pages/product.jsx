import "../styles/product.css";
import "../styles/reveal.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MPK } from "../content/companyProfile";
import { useScrollReveal } from "../hooks/useScrollReveal";
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
    title: "Packaging Applications",
    desc:
      "Contoh aplikasi kemasan yang dapat kami kerjakan sesuai kebutuhan produk Anda.",
    features: MPK.packagingApplications,
  },
  {
    title: "Packaging Materials",
    desc:
      "Pilihan material untuk menyesuaikan kebutuhan barrier, kekuatan, dan tampilan kemasan.",
    features: MPK.materials,
  },
  {
    title: "Production Facilities",
    desc:
      "Rangkaian fasilitas produksi untuk mendukung kebutuhan kemasan fleksibel."
    ,
    features: MPK.facilities,
  },
  {
    title: "Future Plans",
    desc:
      "Komitmen MPK untuk terus mengembangkan produk dan meningkatkan kapasitas produksi.",
    features: MPK.futurePlans.id,
  },
];
const productCards = [
  {
    title: "Flexible Packaging",
    short: "Solusi kemasan fleksibel untuk berbagai industri dan kebutuhan distribusi.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Material Options",
    short: `LLDPE, CPP, VMCPP, VMPET, KRAFT, OPP, PET, NYLON, dan lainnya.`,
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Production Process",
    short: "Printing, laminasi, slitting, rewinding, hingga pembuatan bag/pouch.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Packaging Applications",
    short: "Snack, coffee, sugar, cooking oil, detergent, spices, dan lainnya.",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Product() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("id");
  const navigate = useNavigate();
  const t = translations[lang];

  const checklist = MPK.inquiryChecklist?.[lang] ?? [];

  const structureExamples =
    lang === "id"
      ? [
          {
            title: "OPP / VMCPP",
            desc: "Umum untuk kebutuhan tampilan & barrier tertentu. Struktur final mengikuti karakter produk dan jalur distribusi.",
          },
          {
            title: "PET / VMPET / PE",
            desc: "Dipakai pada beberapa kebutuhan ketahanan dan stabilitas. Kami bantu sesuaikan berdasarkan kebutuhan sealing dan handling.",
          },
          {
            title: "KRAFT / Film",
            desc: "Alternatif tampilan natural/premium. Cocok untuk beberapa kategori produk dengan preferensi estetika tertentu.",
          },
        ]
      : [
          {
            title: "OPP / VMCPP",
            desc: "A common option for certain shelf appeal and barrier needs. Final structure depends on product and distribution.",
          },
          {
            title: "PET / VMPET / PE",
            desc: "Used for some durability and stability needs. We align it with sealing and handling requirements.",
          },
          {
            title: "KRAFT / Film",
            desc: "A natural/premium look alternative, depending on category and aesthetic preference.",
          },
        ];

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
          <li>Office: {MPK.contact.phoneOffice}</li>
        </ul>
      </div>

      {/* NAVBAR */}
      <div className={`navbar1 ${scrolled ? "scrolled" : ""}`}>
        <p className="titlenav" onClick={() => navigate("/")}>
          {MPK.brand}
        </p>
        <ul>
          <li onClick={() => navigate("/produk")}>{t.produk}</li>
          <li onClick={() => navigate("/about")}>{t.tentang}</li>
          <li onClick={() => navigate("/service")}>{t.layanan}</li>
          <li onClick={() => navigate("/contact")}>{t.hubungi}</li>
        </ul>
      </div>
      <section className="product-page">
        <div className="product-hero reveal">
          <span className="badge">{lang === "id" ? "Produk & Aplikasi" : "Products & Applications"}</span>
          <h1>
            {lang === "id" ? "Kemasan Fleksibel untuk" : "Flexible Packaging for"}
            <span> Berbagai Industri</span>
          </h1>
          <p>
            {lang === "id"
              ? "MPK membantu Anda menentukan struktur material dan format kemasan yang tepat—dari tampilan hingga ketahanan selama distribusi."
              : "MPK helps you define the right material structure and packaging format—from shelf appeal to distribution durability."}
          </p>
        </div>
        <div className="product-card-list reveal delay-1">
          <h2 className="section-title">{lang === "id" ? "Ringkasan Kapabilitas" : "Capability Overview"}</h2>
          <p className="section-desc">
            {lang === "id"
              ? "Berikut ringkasan material, proses, dan contoh aplikasi kemasan yang menjadi fokus MPK."
              : "A quick overview of MPK materials, processes, and application examples."}
          </p>

          <div className="product-card-grid">
            {productCards.map((item, index) => (
              <div className={`product-image-card reveal delay-${(index % 3) + 1}`} key={index}>
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
          <h1 className="listservice reveal">
          {lang === "id" ? "Detail Produk & Kapabilitas" : "Products & Capability Details"}
          <span className="service"> {lang === "id" ? "(Material • Proses • Aplikasi)" : "(Materials • Process • Applications)"}</span>
        </h1>
        <div className="product-list">
          
          {products.map((item, index) => (
              <div className={`product-card reveal delay-${(index % 3) + 1}`} key={index}>
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

        <div className="product-guides">
          <div className="guide-panel reveal">
            <span className="badge">{lang === "id" ? "Contoh Struktur" : "Structure Examples"}</span>
            <h2>{lang === "id" ? "Mulai dari contoh, finalisasi via konsultasi" : "Start with examples, finalize via consultation"}</h2>
            <p>
              {lang === "id"
                ? "Berikut beberapa contoh struktur yang sering muncul pada flexible packaging. Spesifikasi akhir selalu menyesuaikan produk, barrier, dan distribusi."
                : "Below are common structures in flexible packaging. Final specs always depend on product, barrier, and distribution."}
            </p>

            <div className="structure-grid">
              {structureExamples.map((s) => (
                <div className="structure" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="guide-panel reveal delay-1">
            <span className="badge">{lang === "id" ? "Checklist" : "Checklist"}</span>
            <h2>{lang === "id" ? "Agar rekomendasi cepat dan tepat" : "For faster, more accurate recommendations"}</h2>
            <p>
              {lang === "id"
                ? "Kirim data berikut saat diskusi—kami bisa lebih cepat mengarahkan struktur material dan format."
                : "Share these during discussion so we can align material structure and format faster."}
            </p>
            <ul className="product-checklist">
              {(checklist.length ? checklist : [
                lang === "id" ? "Nama produk & karakter isi" : "Product name & contents characteristics",
                lang === "id" ? "Target ukuran & format" : "Target size & format",
                lang === "id" ? "Perkiraan quantity" : "Estimated quantity",
                lang === "id" ? "Preferensi material/barrier" : "Material/barrier preference",
              ]).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="product-cta reveal">
          <h2>{lang === "id" ? "Panduan Cepat: Pilih Kemasan" : "Quick Guide: Choose Packaging"}</h2>
          <p>
            {lang === "id"
              ? "Secara umum, kami bantu menyesuaikan kemasan berdasarkan 4 hal: produk, barrier, format, dan jalur distribusi."
              : "We typically align packaging based on 4 things: product, barrier, format, and distribution."}
          </p>
          <div className="guide-grid">
            <div className="guide">
              <h3>{lang === "id" ? "1) Produk" : "1) Product"}</h3>
              <p>{lang === "id" ? "Bubuk, cair, berminyak, atau higroskopis." : "Powder, liquid, oily, or hygroscopic."}</p>
            </div>
            <div className="guide">
              <h3>{lang === "id" ? "2) Barrier" : "2) Barrier"}</h3>
              <p>{lang === "id" ? "Kebutuhan aroma, uap air, dan oksigen." : "Aroma, moisture vapor, and oxygen needs."}</p>
            </div>
            <div className="guide">
              <h3>{lang === "id" ? "3) Format" : "3) Format"}</h3>
              <p>{lang === "id" ? `Roll atau bag/pouch (${MPK.formats.join(" / ")}).` : `Roll or bag/pouch (${MPK.formats.join(" / ")}).`}</p>
            </div>
            <div className="guide">
              <h3>{lang === "id" ? "4) Distribusi" : "4) Distribution"}</h3>
              <p>{lang === "id" ? "Handling, transport, dan kondisi penyimpanan." : "Handling, transport, and storage conditions."}</p>
            </div>
          </div>
         
        </div>

        <div className="product-faq reveal">
          <span className="badge">FAQ</span>
          <h2>{lang === "id" ? "Pertanyaan Umum" : "Common Questions"}</h2>
          <div className="faq-grid">
            <details>
              <summary>{lang === "id" ? "Apakah MPK bisa bantu dari desain?" : "Can MPK help from the design stage?"}</summary>
              <p>{lang === "id" ? "Kami dapat membantu dari sisi spesifikasi kemasan (struktur material, format, dan kesiapan artwork untuk proses produksi)." : "We help from packaging specifications (material structure, format, and artwork readiness for production)."}</p>
            </details>
            <details>
              <summary>{lang === "id" ? "Bagaimana menentukan barrier yang dibutuhkan?" : "How do we define the needed barrier?"}</summary>
              <p>{lang === "id" ? "Biasanya ditentukan dari aroma, sensitivitas uap air/oksigen, dan cara distribusi. Ceritakan kondisi produk, kami bantu arahkan." : "Usually defined by aroma, sensitivity to moisture/oxygen, and distribution. Share your conditions and we’ll guide you."}</p>
            </details>
            <details>
              <summary>{lang === "id" ? "Apakah bisa roll maupun pouch?" : "Can you do both roll and pouch?"}</summary>
              <p>{lang === "id" ? `Ya, format yang umum adalah ${MPK.formats.join(" / ")}.` : `Yes—common formats include ${MPK.formats.join(" / ")}.`}</p>
            </details>
            <details>
              <summary>{lang === "id" ? "Apa langkah pertama yang paling aman?" : "What’s the safest first step?"}</summary>
              <p>{lang === "id" ? "Kirim brief singkat + contoh produk (bila ada). Setelah itu kita cocokkan struktur material, format, dan proses produksi." : "Send a short brief plus a product sample (if available). Then we align structure, format, and process."}</p>
            </details>
          </div>
        </div>
      </section>
      <footer className="footer-dark">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>{MPK.legalName}</h2>
            <p>{lang === "id" ? "Flexible Packaging Manufacturer" : "Flexible Packaging Manufacturer"}</p>

            <iframe
            title="maps"
            src={MPK.location.mapsEmbedUrl}
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
              <li>Printing</li>
              <li>Dry Lamination</li>
              <li>Slitting & Rewinding</li>
              <li>Bag Making</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>{lang === "id" ? "Profil Perusahaan" : "Company Profile"}</li>
              <li>{lang === "id" ? "Material" : "Materials"}</li>
              <li>{lang === "id" ? "Aplikasi" : "Applications"}</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>☎ Office: {MPK.contact.phoneOffice}</p>
            <p>☎ Factory: {MPK.contact.phoneFactory}</p>
            <p>{MPK.location.addressLines[1]}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {MPK.brand}</span>
          <span>Privacy • Terms</span>
        </div>
      </footer>
    </>
  );
}
