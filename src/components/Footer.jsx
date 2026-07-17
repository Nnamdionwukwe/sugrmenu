import { FaHeart, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>Sugar</span>
          <p className={styles.tagline}>Cocktail Bar & Restaurant</p>
        </div>
        <div className={styles.links}>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
        </div>
        <div className={styles.social}>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Sugar Cocktail Bar. Made with{" "}
          <FaHeart className={styles.heart} /> in Abuja.
        </p>
      </div>
    </footer>
  );
}
