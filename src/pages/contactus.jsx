import "../styles/contact.css";
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

function ContactUs() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("id");
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useScrollReveal();

  const officePhone = MPK.contact.phoneOffice;
  const factoryPhone = MPK.contact.phoneFactory;
  const workHours = MPK.location.workingHours[lang];
  const checklist = MPK.inquiryChecklist?.[lang] ?? [];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* LANGUAGE BAR */}
      <div className="language-selector">
        <ul>
          <li onClick={() => setLang("en")} className={lang === "en" ? "active-lang" : ""}>🇬🇧 English</li>
          <li onClick={() => setLang("id")} className={lang === "id" ? "active-lang" : ""}>🇮🇩 Indonesia</li>
          <li>Office: {officePhone}</li>
        </ul>
      </div>

      {/* NAVBAR */}
      <div className={`navbar1 ${scrolled ? "scrolled" : ""}`}>
        <p className="titlenav"onClick={() => navigate("/")}>{MPK.brand}</p>
        <ul>
            <li onClick={() => navigate("/produk")}>{t.produk}</li>
          <li onClick={() => navigate("/about")}>{t.tentang}</li>
          <li onClick={() => navigate("/service")}>{t.layanan}</li>
          <li onClick={() => navigate("/contact")}>{t.hubungi}</li>
        </ul>
      </div>

      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-text reveal">
          <span className="small-title">{t.hubungi}</span>
          <h1>
            {lang === "id" ? "Mari Diskusikan Kebutuhan" : "Let’s Discuss Your"}{" "}
            <span>{lang === "id" ? "Kemasan" : "Packaging"}</span>
          </h1>
          <p>
            {lang === "id"
              ? "Hubungi MPK untuk konsultasi struktur material, format kemasan, dan kebutuhan produksi kemasan fleksibel."
              : "Contact MPK for consultation on material structures, packaging formats, and flexible packaging production."}
          </p>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span className="badge">{MPK.facilities[0]}</span>
            <span className="badge">{MPK.facilities[1]}</span>
            <span className="badge">{MPK.facilities[2]}</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="circle-image reveal delay-1">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
              alt="team"
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-info reveal">
          <span className="small-title">{lang === "id" ? "Hubungi Kami" : "Get In Touch"}</span>
          <h2>{lang === "id" ? "Kontak MPK" : "MPK Contact"}</h2>
          <p>
            {lang === "id"
              ? "Ceritakan kebutuhan produk Anda, tim kami siap membantu."
              : "Tell us about your product needs—we’re ready to help."}
          </p>

          <div className="contact-cards">
            <a className="contact-card" href={`tel:${officePhone}`}>
              <div className="cc-label">☎ {lang === "id" ? "Office" : "Office"}</div>
              <div className="cc-value">{officePhone}</div>
              <div className="cc-hint">{lang === "id" ? "Klik untuk telepon" : "Tap to call"}</div>
            </a>
            <a className="contact-card" href={`tel:${factoryPhone}`}>
              <div className="cc-label">☎ {lang === "id" ? "Factory" : "Factory"}</div>
              <div className="cc-value">{factoryPhone}</div>
              <div className="cc-hint">{lang === "id" ? "Klik untuk telepon" : "Tap to call"}</div>
            </a>
            <div className="contact-card">
              <div className="cc-label">⏰ {lang === "id" ? "Jam Kerja" : "Hours"}</div>
              <div className="cc-value">{workHours}</div>
              <div className="cc-hint">{lang === "id" ? "Respon mengikuti jam kerja" : "Responses follow business hours"}</div>
            </div>
            <a className="contact-card" href={`mailto:${MPK.contact.email}`}>
              <div className="cc-label">✉ {lang === "id" ? "Email" : "Email"}</div>
              <div className="cc-value">{MPK.contact.email}</div>
              <div className="cc-hint">{lang === "id" ? "Klik untuk kirim email" : "Tap to email"}</div>
            </a>
            <div className="contact-card">
              <div className="cc-label">📍 {lang === "id" ? "Alamat" : "Address"}</div>
              <div className="cc-value">{MPK.location.addressLines.join(", ")}</div>
              <div className="cc-hint">{lang === "id" ? "Area Tangerang" : "Tangerang area"}</div>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <h3 style={{ marginBottom: 10 }}>{lang === "id" ? "Agar cepat diproses, sertakan:" : "To speed up, please include:"}</h3>
            <ul>
              {(checklist.length ? checklist : [
                lang === "id" ? "Nama produk & jenis isi" : "Product name & contents type",
                lang === "id" ? "Ukuran/format (roll/pouch)" : "Size/format (roll/pouch)",
                lang === "id" ? "Perkiraan qty & target waktu" : "Estimated quantity & timeline",
                lang === "id" ? "Preferensi material/barrier (jika ada)" : "Material/barrier preference (if any)",
              ]).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="contact-form reveal delay-1">
          <input type="text" placeholder={lang === "id" ? "Nama" : "Name"} />
          <input type="email" placeholder={lang === "id" ? "E-mail" : "Email"} />
          <input type="tel" placeholder={lang === "id" ? "Nomor HP" : "Phone"} />
          <textarea placeholder={lang === "id" ? "Kebutuhan Anda (produk, ukuran, qty, dll.)" : "Your needs (product, size, qty, etc.)"} />
          <button
            type="button"
            onClick={() => {
              const subject = encodeURIComponent(`[${MPK.brand}] Packaging Inquiry`);
              const body = encodeURIComponent(
                lang === "id"
                  ? "Halo MPK,\n\nSaya ingin konsultasi kebutuhan kemasan:\n- Produk: \n- Format (roll/pouch): \n- Ukuran: \n- Qty: \n- Target waktu: \n\nTerima kasih."
                  : "Hello MPK,\n\nI would like to consult about packaging needs:\n- Product: \n- Format (roll/pouch): \n- Size: \n- Qty: \n- Timeline: \n\nThank you."
              );
              window.location.href = `mailto:${MPK.contact.email}?subject=${subject}&body=${body}`;
            }}
          >
            {lang === "id" ? "Buat Draft Email" : "Create Email Draft"}
          </button>
        </div>
      </section>

      <section className="contact-extra">
        <div className="extra-grid">
          <div className="extra-visual reveal">
            <img
              src="https://www.thehoneylady.co.id/wp-content/uploads/2022/04/ilustrasi-gambar-suasana-meeting-di-kantor.jpg"
              alt="Packaging discussion"
            />
            <div className="extra-overlay">
              <h3>{lang === "id" ? "Siap mulai?" : "Ready to start?"}</h3>
              <p>{lang === "id" ? "Kirim brief singkat, kami bantu arahkan spesifikasi." : "Send a short brief and we’ll guide the specs."}</p>
            </div>
          </div>

          <div className="extra-panel reveal delay-1">
            <span className="small-title">{lang === "id" ? "FAQ" : "FAQ"}</span>
            <h2>{lang === "id" ? "Pertanyaan yang sering ditanyakan" : "Common questions"}</h2>

            <div className="faq">
              <details>
                <summary>{lang === "id" ? "Apakah MPK bisa bantu rekomendasi material?" : "Can MPK recommend materials?"}</summary>
                <p>{lang === "id" ? "Ya. Umumnya kami mulai dari karakter produk (kering/cair/berminyak), kebutuhan barrier, dan cara distribusi untuk menyusun struktur material yang cocok." : "Yes. We start from product characteristics, barrier needs, and distribution to recommend a suitable material structure."}</p>
              </details>
              <details>
                <summary>{lang === "id" ? "Format apa saja yang tersedia?" : "Which formats are available?"}</summary>
                <p>{lang === "id" ? `Kami mendukung format ${MPK.formats.join(" / ")}. Detail format final mengikuti kebutuhan aplikasi.` : `We support ${MPK.formats.join(" / ")}. Final format depends on the application.`}</p>
              </details>
              <details>
                <summary>{lang === "id" ? "Apa saja yang perlu disiapkan sebelum produksi?" : "What should we prepare before production?"}</summary>
                <p>{lang === "id" ? "Siapkan informasi produk, target ukuran/format, perkiraan quantity, dan artwork (jika sudah ada)." : "Prepare product info, target size/format, estimated quantity, and artwork (if available)."}</p>
              </details>
              <details>
                <summary>{lang === "id" ? "Berapa lama prosesnya?" : "How long is the process?"}</summary>
                <p>{lang === "id" ? "Timeline bergantung spesifikasi dan kapasitas saat itu. Setelah brief lengkap kami akan bantu estimasi yang lebih akurat." : "Timeline depends on specs and current capacity. Once the brief is complete we can provide a more accurate estimate."}</p>
              </details>
            </div>

            <div className="extra-actions">
              <a className="btn-outline" href={`mailto:${MPK.contact.email}`}>{lang === "id" ? "Email Langsung" : "Email"}</a>
              <a className="btn-outline" href={`tel:${officePhone}`}>{lang === "id" ? "Telepon Office" : "Call Office"}</a>
              <button className="btn-solid" type="button" onClick={() => navigate("/produk")}>
                {lang === "id" ? "Lihat Produk/Aplikasi" : "See Products"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
     <footer className="footer-dark">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>{MPK.legalName}</h2>
            <p>Flexible Packaging Manufacturer</p>

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
              <li>{lang === "id" ? "Profil" : "Profile"}</li>
              <li>{lang === "id" ? "Material" : "Materials"}</li>
              <li>{lang === "id" ? "Aplikasi" : "Applications"}</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>☎ Office: {officePhone}</p>
            <p>☎ Factory: {factoryPhone}</p>
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

export default ContactUs;
