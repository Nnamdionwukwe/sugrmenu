import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className={styles.cardLink}>
      <motion.div
        className={styles.card}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
            loading="lazy"
          />
          {product.price && (
            <span className={styles.priceBadge}>₦{product.price}</span>
          )}
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
