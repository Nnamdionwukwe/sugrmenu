import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaSearch, FaFilter } from "react-icons/fa";
import { categories, items } from "../data/menuData";
import styles from "../styles/Category.module.css";

export default function Category() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Memoize category and categoryItems to prevent re-creation on each render
  const category = useMemo(
    () => categories.find((c) => c.id === categoryId),
    [categoryId],
  );
  const categoryItems = useMemo(
    () => items.filter((item) => item.category === categoryId),
    [categoryId],
  );

  // Update filtered items when searchTerm or categoryItems change
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredItems(categoryItems);
    } else {
      const term = searchTerm.toLowerCase().trim();
      setFilteredItems(
        categoryItems.filter(
          (item) =>
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term),
        ),
      );
    }
  }, [searchTerm, categoryItems]); // categoryItems is stable due to useMemo

  if (!category) {
    return (
      <div className={styles.notFound}>
        <h2>Category not found</h2>
        <button onClick={() => navigate("/")}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header with back button and category title */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          <FaArrowLeft /> Menu
        </button>
        <h1 className={styles.title}>{category.name}</h1>
        <div className={styles.spacer} />
      </div>

      {/* Search bar */}
      <div className={styles.searchBar}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        {searchTerm && (
          <button className={styles.clearBtn} onClick={() => setSearchTerm("")}>
            ✕
          </button>
        )}
      </div>

      {/* Items grid */}
      {filteredItems.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No items found in this category.</p>
        </div>
      ) : (
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                }}
              >
                <Link to={`/product/${item.id}`} className={styles.cardLink}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.image}
                      loading="lazy"
                    />
                    {item.price && (
                      <span className={styles.priceBadge}>₦{item.price}</span>
                    )}
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
