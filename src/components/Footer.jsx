import { Link } from "react-router-dom";
import {
  FaHeart,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>Sugar</span>
          <p className={styles.tagline}>Cocktail Bar & Restaurant</p>
        </div>

        <div className={styles.links}>
          <Link to="/">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={styles.social}>
          <a
            href="https://wa.me/2348100817411"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/sugarr_ng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="mailto:sugarexpressng@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://maps.app.goo.gl/F2uKXeQp1VjrAni2A"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
          >
            <FaMapMarkerAlt />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          VAT 7.3% and service charge 3% not inclusive
        </motion.p>
        <p>
          © {new Date().getFullYear()} Sugar Cocktail Bar & Restaurant. 10 Kolda
          Link, Wuse 2. Made with <FaHeart className={styles.heart} /> in Abuja.
        </p>

        <div className={styles.footerCopy2}>
          powered by{" "}
          <a
            className={styles.footerLink}
            href="https://www.gestechcom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GesTechCom Technologies
          </a>
        </div>
      </div>
    </footer>
  );
}
