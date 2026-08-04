import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
  FaShare,
  FaStar,
  FaStarHalfAlt,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaCopy,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import { items, categories } from "../data/menuData";
import styles from "../styles/ProductDetail.module.css";
import SugarLoader from "../components/SugarLoader";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCopiedModal, setShowCopiedModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [category, setCategory] = useState(null);

  // ── Load item data ──────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);

    // Simulate loading delay for smooth transition
    const timer = setTimeout(() => {
      const foundItem = items.find((i) => i.id === productId);
      setItem(foundItem || null);

      if (foundItem) {
        const foundCategory = categories.find(
          (c) => c.id === foundItem.category,
        );
        setCategory(foundCategory || null);
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [productId]);

  // ── Check liked status from localStorage ────────────────────────────
  useEffect(() => {
    if (!item) return;
    const likedItems = JSON.parse(localStorage.getItem("liked_items") || "[]");
    setIsLiked(likedItems.includes(item.id));
  }, [item]);

  // ── Toggle like ──────────────────────────────────────────────────────
  const toggleLike = () => {
    if (!item) return;
    const likedItems = JSON.parse(localStorage.getItem("liked_items") || "[]");
    let newLiked;
    if (likedItems.includes(item.id)) {
      newLiked = likedItems.filter((id) => id !== item.id);
    } else {
      newLiked = [...likedItems, item.id];
    }
    localStorage.setItem("liked_items", JSON.stringify(newLiked));
    setIsLiked(!isLiked);
  };

  // ── Share handlers ──────────────────────────────────────────────────
  const shareUrl = window.location.href;
  const shareText = `🍽️ Check out ${item?.name} at Sugar Cocktail Bar!`;

  const socialShare = (platform) => {
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
    };
    if (platform === "instagram" || platform === "tiktok") {
      copyToClipboard(`${shareText} ${shareUrl}`);
    } else if (urls[platform]) {
      window.open(urls[platform], "_blank", "width=600,height=400");
    }
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setShowCopiedModal(true);
    setTimeout(() => {
      setShowCopiedModal(false);
    }, 2000);
  };

  const handleCopyLink = () => {
    copyToClipboard(`${shareText} ${shareUrl}`);
  };

  // ── Show loader while loading ──────────────────────────────────────
  if (loading) {
    return <SugarLoader />;
  }

  // ── If item not found ──────────────────────────────────────────────
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

  // ── Related items ──────────────────────────────────────────────────
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

          {/* ── Actions: Like & Share (Icons only) ── */}
          <div className={styles.actions}>
            <button
              className={`${styles.iconBtn} ${isLiked ? styles.liked : ""}`}
              onClick={toggleLike}
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button
              className={styles.iconBtn}
              onClick={() => setShowShareModal(true)}
              aria-label="Share"
            >
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

      {/* ─── Share Modal ─────────────────────────────────────────────── */}
      {showShareModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowShareModal(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setShowShareModal(false)}
            >
              <FaTimes />
            </button>
            <h3 className={styles.modalTitle}>Share this item</h3>
            <div className={styles.socialGrid}>
              <button
                onClick={() => socialShare("whatsapp")}
                className={styles.socialBtnWhatsapp}
              >
                <FaWhatsapp /> WhatsApp
              </button>
              <button
                onClick={() => socialShare("twitter")}
                className={styles.socialBtnTwitter}
              >
                <FaTwitter /> Twitter
              </button>
              <button
                onClick={() => socialShare("facebook")}
                className={styles.socialBtnFacebook}
              >
                <FaFacebook /> Facebook
              </button>
              <button
                onClick={() => socialShare("instagram")}
                className={styles.socialBtnInstagram}
              >
                <FaInstagram /> Instagram
              </button>
              <button
                onClick={() => socialShare("tiktok")}
                className={styles.socialBtnTiktok}
              >
                <FaTiktok /> TikTok
              </button>
              <button onClick={handleCopyLink} className={styles.socialBtnCopy}>
                <FaCopy /> Copy Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Link Copied Modal ────────────────────────────────────────── */}
      {showCopiedModal && (
        <div className={styles.copiedOverlay}>
          <div className={styles.copiedContent}>
            <FaCheckCircle className={styles.copiedIcon} />
            <p className={styles.copiedText}>Link copied to clipboard!</p>
          </div>
        </div>
      )}
    </div>
  );
}
