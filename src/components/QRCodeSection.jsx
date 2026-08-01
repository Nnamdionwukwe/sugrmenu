import { useState } from "react";
import QRCodeGenerator from "./QRCodeGenerator";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import styles from "./QRCodeSection.module.css";

export default function QRCodeSection() {
  const [copied, setCopied] = useState(false);
  const [selectedContact, setSelectedContact] = useState("website");

  const contacts = {
    website: {
      label: "Website",
      value: "https://sugar-menu.vercel.app",
      icon: <FaGlobe />,
    },
    whatsapp: {
      label: "WhatsApp",
      value: "https://wa.me/2348100817411",
      icon: <FaWhatsapp />,
    },
    instagram: {
      label: "Instagram",
      value: "https://www.instagram.com/sugarr_ng",
      icon: <FaInstagram />,
    },
    email: {
      label: "Email",
      value: "mailto:sugarexpressng@gmail.com",
      icon: <FaEnvelope />,
    },
    location: {
      label: "Location",
      value: "https://maps.app.goo.gl/F2uKXeQp1VjrAni2A",
      icon: <FaMapMarkerAlt />,
    },
    phone: {
      label: "Phone",
      value: "tel:+2348100817411",
      icon: <FaPhone />,
    },
  };

  const copyAllContacts = async () => {
    const contactText = `
🍹 Sugar Cocktail Bar

📍 Location: https://maps.app.goo.gl/F2uKXeQp1VjrAni2A
📱 Phone: +234 810 081 7411
📧 Email: sugarexpressng@gmail.com
📸 Instagram: @sugarr_ng
💬 WhatsApp: https://wa.me/2348100817411
🌐 Website: https://sugar-menu.vercel.app
    `.trim();

    try {
      await navigator.clipboard.writeText(contactText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const currentContact = contacts[selectedContact];

  return (
    <div className={styles.qrSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>🍹 Share Sugar Cocktail Bar</h2>
        <p className={styles.subtitle}>
          Scan the QR code or share our contact details
        </p>
      </div>

      <div className={styles.content}>
        {/* Contact Selector */}
        <div className={styles.contactSelector}>
          <p className={styles.selectorLabel}>Select what to share:</p>
          <div className={styles.selectorButtons}>
            {Object.entries(contacts).map(([key, contact]) => (
              <button
                key={key}
                className={`${styles.selectorBtn} ${selectedContact === key ? styles.active : ""}`}
                onClick={() => setSelectedContact(key)}
              >
                {contact.icon}
                <span>{contact.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* QR Code */}
        <QRCodeGenerator
          value={currentContact.value}
          size={220}
          title={`Scan to ${currentContact.label}`}
          subtitle={`${currentContact.label}: ${currentContact.value}`}
          showActions={true}
        />

        {/* Quick Contact Links */}
        <div className={styles.quickLinks}>
          <h3 className={styles.quickTitle}>Quick Links</h3>
          <div className={styles.linkGrid}>
            <a
              href="https://wa.me/2348100817411"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWhatsApp}
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/sugarr_ng"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkInstagram}
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="mailto:sugarexpressng@gmail.com"
              className={styles.linkEmail}
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://maps.app.goo.gl/F2uKXeQp1VjrAni2A"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkLocation}
            >
              <FaMapMarkerAlt /> Location
            </a>
            <a href="tel:+2348100817411" className={styles.linkPhone}>
              <FaPhone /> Call Us
            </a>
            <button onClick={copyAllContacts} className={styles.linkCopy}>
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Copied!" : "Copy All"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
