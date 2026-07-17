import { Link } from "react-router-dom";
import { categories } from "../data/menuData";
import styles from "../styles/Home.module.css";
import { FaSearch, FaQrcode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sugar Cocktail Bar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our exquisite menu – crafted with passion.
          </motion.p>
          <motion.div
            className={styles.scanBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaQrcode /> Scan to open menu on your phone
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className={styles.categories}>
        <h2>Our Menu</h2>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link
              to={`/category/${cat.id}`}
              key={cat.id}
              className={styles.cardLink}
            >
              <motion.div
                className={styles.card}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.iconWrapper}>
                  <i className={`fa fa-${cat.icon}`}></i>
                  {/* Fallback: using react-icons in actual code */}
                </div>
                <h3>{cat.name}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
