import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "../styles/Contact.module.css";
import SugarLoader from "../components/SugarLoader";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const whatsappNumber = "2348100817411";
  const email = "sugarexpressng@gmail.com";
  const mapLink = "https://maps.app.goo.gl/F2uKXeQp1VjrAni2A";
  const address = "10 Kolda Link, Wuse 2, Abuja";
  // Embed map using the full address (Google Maps embed will resolve it)
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`;

  useEffect(() => {
    // Simulate loading delay for smooth transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SugarLoader />;
  }

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          We'd love to hear from you. Reach out anytime.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {/* Contact Info Cards */}
        <motion.div
          className={styles.cards}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.card}>
            <FaWhatsapp className={styles.cardIcon} />
            <h3>WhatsApp</h3>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsappNumber}
            </a>
            <p>Chat with us on WhatsApp</p>
          </div>

          <div className={styles.card}>
            <FaEnvelope className={styles.cardIcon} />
            <h3>Email</h3>
            <a href={`mailto:${email}`}>{email}</a>
            <p>We'll respond within 24 hours</p>
          </div>

          <div className={styles.card}>
            <FaMapMarkerAlt className={styles.cardIcon} />
            <h3>Location</h3>
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
            <p>{address}</p>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          className={styles.mapWrapper}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <iframe
            title="Sugar Cocktail Bar Location"
            src={mapEmbedUrl}
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
}
