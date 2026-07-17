import { Link } from "react-router-dom";
import { categories } from "../data/menuData";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import logo from "../assets/sugar-logo.PNG";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.logoWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logo}
              alt="Sugar Cocktail Bar"
              className={styles.logoImage}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sugar Cocktail Bar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our exquisite menu – crafted with passion.
          </motion.p>
        </div>
      </section>

      {/* Category Grid */}
      <section className={styles.categories}>
        <div className={styles.gridWrapper}>
          <h2 className={styles.gridTitle}>Our Menu</h2>
          <div className={styles.grid}>
            {categories.map((cat) => {
              const IconComponent = Icons[cat.icon];
              // Since all icons now exist, we don't need a fallback.
              // But we keep a safety check anyway – now using a generic icon instead of emoji.
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
    </div>
  );
}
