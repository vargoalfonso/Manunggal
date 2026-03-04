import "../styles/services.css";
import "../styles/reveal.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MPK } from "../content/companyProfile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/useLanguage";
const translations = {
  id: {
    home: "Beranda",
    produk: "Produk",
    tentang: "Tentang MPK",
    layanan: "Layanan Kami",
    hubungi: "Hubungi Kami",
  },
  en: {
    home: "Home",
    produk: "Products",
    tentang: "About MPK",
    layanan: "Our Services",
    hubungi: "Contact Us",
  },
};

const services = [
  {
    title: "Printing",
    desc:
      "Proses cetak untuk kebutuhan desain kemasan dengan fokus pada konsistensi warna dan kualitas hasil.",
  },
  {
    title: "Dry Lamination",
    desc:
      "Laminasi untuk membentuk struktur material sesuai kebutuhan barrier, kekuatan, dan tampilan kemasan.",
  },
  {
    title: "Slitting",
    desc:
      "Pemotongan roll film dengan ukuran yang presisi untuk kebutuhan proses lanjutan.",
  },
  {
    title: "Rewinding",
    desc:
      "Proses rewind untuk merapikan hasil produksi dan menyesuaikan spesifikasi roll.",
  },
  {
    title: "Bag Making",
    desc:
      "Proses pembuatan bag/pouch sesuai format dan kebutuhan aplikasi produk.",
  },
  {
    title: "Packaging Consultation",
    desc:
      "Diskusi kebutuhan produk, rekomendasi struktur material, dan penyesuaian format untuk produksi.",
  },
];

export default function Services() {
    const navigate = useNavigate();
  const { lang, setLang } = useLanguage();
      const [scrolled, setScrolled] = useState(false);
      const t = translations[lang];

      useScrollReveal();

      useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

      const flow = MPK.collaborationFlow?.[lang] ?? [];
      const quality = MPK.qualityPoints?.[lang] ?? [];
      const checklist = MPK.inquiryChecklist?.[lang] ?? [];
      const industries = MPK.industries?.[lang] ?? [];
      const useCases = MPK.packagingApplications.slice(0, 8);
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

      {/* ================= NAVBAR ================= */}
      <Navbar
        brand={MPK.brand}
        scrolled={scrolled}
        links={[
          { label: t.home, to: "/" },
          { label: t.produk, to: "/produk" },
          { label: t.tentang, to: "/about" },
          { label: t.layanan, to: "/service" },
          { label: t.hubungi, to: "/contact" },
        ]}
      />
    <section className="services-page">
      <div className="services-hero reveal">
        <span className="badge">{lang === "id" ? "Kapabilitas Produksi" : "Production Capabilities"}</span>
        <h1>
          {lang === "id" ? "Proses Produksi untuk" : "Production Processes for"}
          <span> Flexible Packaging</span>
        </h1>
        <p>
          {lang === "id"
            ? "MPK menyediakan rangkaian proses produksi kemasan fleksibel dari awal hingga akhir. Kami bantu memilih material, format, dan proses yang cocok untuk kebutuhan produk Anda."
            : "MPK provides end-to-end flexible packaging production processes. We help choose the right materials, formats, and processes for your product."}
        </p>

        <div className="services-chips">
          {MPK.materials.slice(0, 6).map((m) => (
            <span className="chip" key={m}>{m}</span>
          ))}
          <span className="chip">+{MPK.materials.length - 6} {lang === "id" ? "material" : "materials"}</span>
        </div>
      </div>

      <div className="services-split">
        <div className="services-panel reveal">
          <h2>{lang === "id" ? "Yang Anda Dapatkan" : "What You Get"}</h2>
          <p>
            {lang === "id"
              ? "Mulai dari diskusi struktur material sampai finishing, kami bantu menyiapkan spesifikasi yang jelas dan hasil produksi yang rapi."
              : "From structure discussion to finishing, we help align clear specs and deliver neat production output."}
          </p>
          <div className="kpi-grid">
            <div className="kpi">
              <h3>{MPK.facilities.length}</h3>
              <p>{lang === "id" ? "Tahap Proses" : "Process Steps"}</p>
            </div>
            <div className="kpi">
              <h3>{MPK.materials.length}+</h3>
              <p>{lang === "id" ? "Opsi Material" : "Material Options"}</p>
            </div>
            <div className="kpi">
              <h3>{MPK.formats?.length ?? 2}</h3>
              <p>{lang === "id" ? "Format Output" : "Output Formats"}</p>
            </div>
          </div>

          <h3 style={{ marginTop: 20 }}>{lang === "id" ? "Format yang didukung" : "Supported formats"}</h3>
          <div className="services-chips">
            {(MPK.formats ?? ["Roll", "Bag/Pouch"]).map((f) => (
              <span className="chip" key={f}>{f}</span>
            ))}
          </div>
        </div>

        <div className="services-visual reveal delay-1">
          <img
            src="https://www.thehoneylady.co.id/wp-content/uploads/2022/04/ilustrasi-gambar-suasana-meeting-di-kantor.jpg"
            alt="Production capability"
          />
        </div>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className={`service-card reveal delay-${(index % 3) + 1}`} key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="usecases-section">
        <div className="usecases-head reveal">
          <span className="badge">{lang === "id" ? "Aplikasi & Industri" : "Applications & Industries"}</span>
          <h2>{lang === "id" ? "Contoh use case yang sering dikerjakan" : "Common use cases we support"}</h2>
          <p>
            {lang === "id"
              ? "Berikut contoh kategori aplikasi dan industri yang umum—kami bantu arahkan struktur material, format, dan proses yang sesuai."
              : "Below are common application categories and industries—we help align structure, format, and process."}
          </p>
        </div>

        <div className="usecases-grid">
          {useCases.map((u, idx) => (
            <div className={`usecase-card reveal delay-${(idx % 3) + 1}`} key={u}>
              <h3>{u}</h3>
              <p>
                {lang === "id"
                  ? "Penyesuaian struktur material & finishing mengikuti karakter produk dan jalur distribusi."
                  : "Material structure and finishing are aligned to product characteristics and distribution."}
              </p>
            </div>
          ))}
        </div>

        {industries.length > 0 && (
          <div className="industries-row reveal">
            <h3>{lang === "id" ? "Industri yang dilayani" : "Industries we serve"}</h3>
            <div className="services-chips">
              {industries.map((i) => (
                <span className="chip" key={i}>{i}</span>
              ))}
            </div>
          </div>
        )}

        <div className="usecases-cta reveal">
          <div>
            <h3>{lang === "id" ? "Butuh rekomendasi cepat?" : "Need a quick recommendation?"}</h3>
            <p>
              {lang === "id"
                ? "Kirim brief singkat—kami bantu arahkan struktur material, format, dan alur produksi yang tepat."
                : "Send a short brief—we’ll help recommend the right structure, format, and production flow."}
            </p>
          </div>
          <button className="quote-btn" onClick={() => navigate("/contact")}>
            {lang === "id" ? "Konsultasi Sekarang" : "Consult Now"}
          </button>
        </div>
      </section>

      <div className="services-info reveal">
        <h2>{lang === "id" ? "Alur Kerja Produksi" : "Production Workflow"}</h2>
        <p>
          {lang === "id"
            ? "Alur umum produksi kemasan fleksibel yang dapat disesuaikan dengan kebutuhan Anda."
            : "A typical flexible packaging workflow that can be adjusted to your needs."}
        </p>

        <ol className="steps">
          {MPK.facilities.map((s) => (
            <li key={s}>
              <strong>{s}</strong>
              <span>
                {lang === "id"
                  ? " — bagian dari proses end-to-end untuk mencapai kualitas yang konsisten."
                  : " — part of the end-to-end process to achieve consistent quality."}
              </span>
            </li>
          ))}
        </ol>

        {flow.length > 0 && (
          <>
            <h3 style={{ marginTop: 26 }}>{lang === "id" ? "Cara Kerja Sama" : "How We Collaborate"}</h3>
            <ol className="steps compact">
              {flow.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </>
        )}

        {quality.length > 0 && (
          <>
            <h3 style={{ marginTop: 26 }}>{lang === "id" ? "Fokus Kualitas" : "Quality Focus"}</h3>
            <ul>
              {quality.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </>
        )}

        <h3 style={{ marginTop: 26 }}>{lang === "id" ? "Fokus Perbaikan" : "Continuous Improvement"}</h3>
        <ul>
          {MPK.futurePlans[lang].map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        {checklist.length > 0 && (
          <div className="quote-box reveal">
            <h3>{lang === "id" ? "Minta Penawaran Lebih Cepat" : "Get a Faster Quote"}</h3>
            <p>
              {lang === "id"
                ? "Kirim data berikut agar tim kami bisa merekomendasikan struktur dan format dengan lebih cepat."
                : "Share the following so our team can recommend structure and format faster."}
            </p>
            <ul>
              {checklist.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <button className="quote-btn" onClick={() => navigate("/contact")}>
              {lang === "id" ? "Hubungi MPK" : "Contact MPK"}
            </button>
          </div>
        )}

        <div className="faq-box reveal">
          <h3>{lang === "id" ? "FAQ Layanan" : "Services FAQ"}</h3>
          <div className="faq-grid">
            <details>
              <summary>{lang === "id" ? "Apakah MPK bisa bantu menentukan barrier?" : "Can MPK help define barrier requirements?"}</summary>
              <p>{lang === "id" ? "Ya. Biasanya ditentukan dari aroma, kebutuhan ketahanan uap air/oksigen, dan handling saat distribusi." : "Yes. It’s typically defined by aroma, moisture/oxygen needs, and distribution handling."}</p>
            </details>
            <details>
              <summary>{lang === "id" ? "Apakah bisa format roll dan pouch?" : "Do you support roll and pouch formats?"}</summary>
              <p>{lang === "id" ? `Kami mendukung ${MPK.formats.join(" / ")}. Detail final menyesuaikan aplikasi.` : `We support ${MPK.formats.join(" / ")}. Final details depend on the application.`}</p>
            </details>
            <details>
              <summary>{lang === "id" ? "Apa langkah pertama untuk mulai?" : "What’s the first step to start?"}</summary>
              <p>{lang === "id" ? "Kirim brief singkat (produk, format/ukuran, qty, timeline). Setelah itu kami arahkan struktur material & prosesnya." : "Send a short brief (product, format/size, qty, timeline). Then we recommend the structure and process."}</p>
            </details>
            <details>
              <summary>{lang === "id" ? "Apakah MPK bisa bantu pengecekan artwork?" : "Can MPK help check artwork readiness?"}</summary>
              <p>{lang === "id" ? "Kami bantu memastikan spesifikasi dan kesiapan artwork untuk proses produksi sesuai kebutuhan." : "We help align specs and artwork readiness for production."}</p>
            </details>
          </div>
        </div>
      </div>
    </section>
    <Footer lang={lang} />
    </>
  );
}
