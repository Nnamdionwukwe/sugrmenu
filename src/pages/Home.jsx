import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/menuData";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import QRCodeSection from "../components/QRCodeSection";
import SugarLoader from "../components/SugarLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for smooth initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SugarLoader />;
  }

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/welcomeimage.JPG"
        >
          <source src="/welcomevideo.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our exquisite menu – crafted with passion.
          </motion.p>
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.gridWrapper}>
          <h2 className={styles.gridTitle}>Our Menu</h2>

          <div className={styles.grid}>
            {categories.map((cat) => {
              const IconComponent = Icons[cat.icon];
              // Fallback to FaUtensils if the icon is not found (safety)
              const Icon = IconComponent || Icons.FaUtensils;
              return (
                <Link
                  to={`/category/${cat.id}`}
                  key={cat.id}
                  className={styles.cardLink}
                >
                  <motion.div
                    className={styles.card}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 30px rgba(46, 90, 39, 0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon className={styles.categoryIcon} />
                    </div>
                    <h3>{cat.name}</h3>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Add QR Code Section ── */}
      <QRCodeSection />
    </div>
  );
}
