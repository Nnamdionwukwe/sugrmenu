import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/CategoryCard.module.css";

export default function CategoryCard({ id, name, icon, image, description }) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(139,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/category/${id}`} className={styles.link}>
        <div className={styles.iconWrapper}>
          {icon ? <i className={`fa fa-${icon}`}></i> : <span>🍽️</span>}
        </div>
        <h3 className={styles.name}>{name}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <span className={styles.arrow}>→</span>
      </Link>
    </motion.div>
  );
}
