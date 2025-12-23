import "../styles/contact.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

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
          <li>Call us +62</li>
        </ul>
      </div>

      {/* NAVBAR */}
      <div className={`navbar1 ${scrolled ? "scrolled" : ""}`}>
        <p className="titlenav"onClick={() => navigate("/")}>Manunggal</p>
        <ul>
          <li onClick={() => navigate("")}>{t.produk}</li>
          <li onClick={() => navigate("/about")}>{t.tentang}</li>
          <li onClick={() => navigate("/our_services")}>{t.layanan}</li>
          <li className="active">{t.hubungi}</li>
        </ul>
      </div>

      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-text">
          <span className="small-title">Contact Us</span>
          <h1>We’d Love to Hear From You</h1>
          <p>
            Apakah Anda memiliki pertanyaan atau ingin mendiskusikan kebutuhan
            fasilitas Anda? Tim kami siap membantu.
          </p>
        </div>

        <div className="hero-image">
          <div className="circle-image">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="team"
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-info">
          <span className="small-title">Get In Touch</span>
          <h2>Connect With Us</h2>
          <p>Marketing representatif kami siap membantu Anda.</p>

          <ul>
            <li>📞 WhatsApp Business</li>
            <li>📧 sales@manunggal.co.id</li>
            <li>⏰ Senin – Sabtu | 07.30 – 16.30</li>
          </ul>
        </div>

        <div className="contact-form">
          <input type="text" placeholder="Nama" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Nomor HP" />
          <textarea placeholder="Pesan" />
          <button>Kirim Pesan</button>
        </div>
      </section>

      {/* FOOTER */}
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

export default ContactUs;
