import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaHeart,
  FaShare,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { items, categories } from "../data/menuData";
import styles from "../styles/ProductDetail.module.css";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const item = items.find((i) => i.id === productId);
  const category = item ? categories.find((c) => c.id === item.category) : null;

  // If item not found, show error with a back button
  if (!item) {
    return (
      <div className={styles.notFound}>
        <h2>Item not found</h2>
        <p>We couldn't find the item you're looking for.</p>
        <button onClick={() => navigate("/")} className={styles.backHomeBtn}>
          Back to Menu
        </button>
      </div>
    );
  }

  // Get related items (same category, excluding current)
  const relatedItems = items
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 4);

  return (
    <div className={styles.container}>
      {/* Back button */}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </button>

      <div className={styles.content}>
        {/* Left: Image */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.name} className={styles.image} />
          </div>
          <div className={styles.imageMeta}>
            <span className={styles.categoryTag}>
              {category ? category.name : "Uncategorized"}
            </span>
            <span className={styles.price}>₦{item.price}</span>
          </div>
        </motion.div>

        {/* Right: Details */}
        <motion.div
          className={styles.detailsSection}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className={styles.name}>{item.name}</h1>
          <div className={styles.rating}>
            <FaStar className={styles.starFilled} />
            <FaStar className={styles.starFilled} />
            <FaStar className={styles.starFilled} />
            <FaStar className={styles.starFilled} />
            <FaStarHalfAlt className={styles.starHalf} />
            <span className={styles.ratingText}>4.5 (24 reviews)</span>
          </div>
          <p className={styles.description}>{item.description}</p>

          <div className={styles.actions}>
            <button className={styles.orderBtn}>
              Add to Order – ₦{item.price}
            </button>
            <button className={styles.iconBtn}>
              <FaHeart />
            </button>
            <button className={styles.iconBtn}>
              <FaShare />
            </button>
          </div>

          {item.tags && item.tags.length > 0 && (
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <div className={styles.related}>
          <h3 className={styles.relatedTitle}>You might also like</h3>
          <div className={styles.relatedGrid}>
            {relatedItems.map((rel) => (
              <Link
                to={`/product/${rel.id}`}
                key={rel.id}
                className={styles.relatedCard}
              >
                <img
                  src={rel.image}
                  alt={rel.name}
                  className={styles.relatedImg}
                />
                <p className={styles.relatedName}>{rel.name}</p>
                <span className={styles.relatedPrice}>₦{rel.price}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
