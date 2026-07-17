import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaQrcode,
  FaUtensils,
} from "react-icons/fa";
import { categories } from "../data/menuData";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setCategoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setCategoriesOpen(false);
  }, [location]);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <FaUtensils className={styles.logoIcon} />
          <span>Sugar</span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.navLink} ${styles.dropdownTrigger}`}
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              Menu <span className={styles.arrow}>▾</span>
            </button>
            {categoriesOpen && (
              <div className={styles.dropdown}>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className={styles.dropdownItem}
                    onClick={() => setCategoriesOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/" className={styles.searchLink}>
            <FaSearch />
          </Link>
          <div className={styles.scanBadge}>
            <FaQrcode /> Scan
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link
            to="/"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <div className={styles.mobileCategories}>
            <div className={styles.mobileCategoriesLabel}>Menu Categories</div>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <div className={styles.mobileScan}>
            <FaQrcode /> Scan QR to open menu
          </div>
        </div>
      )}
    </nav>
  );
}
