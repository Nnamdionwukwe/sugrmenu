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
  FaUtensils,
  FaTag,
} from "react-icons/fa";
import { items, categories } from "../data/menuData";
import styles from "../styles/ProductDetail.module.css";
import SugarLoader from "../components/SugarLoader";

// Map of sub-category names for display
const subCategoryMap = {
  // Main Menu sub-categories
  "Batters & Toasts": "Batters & Toasts",
  "Chicken & Batter": "Chicken & Batter",
  "Fruit Bowls": "Fruit Bowls",
  "Brunch Extras": "Brunch Extras",
  "Early Bird": "Early Bird",
  Starters: "Starters",
  "Rice & Poultry": "Rice & Poultry",
  Seafood: "Seafood",
  Sides: "Sides",
  "Wings & Boneless": "Wings & Boneless",
  Pasta: "Pasta",
  "Local Dish": "Local Dish",
  "Burgers & Sandwiches": "Burgers & Sandwiches",
  Wraps: "Wraps",
  "Salad Bowls": "Salad Bowls",
  Dessert: "Dessert",

  // Mocktails & Beverages sub-categories
  Mocktails: "Mocktails",
  "Milk Shakes": "Milk Shakes",
  "Brunch Smoothies": "Brunch Smoothies",
  "Sugar Special Smoothies": "Sugar Special Smoothies",
  "Pack Juice": "Pack Juice",
  Tea: "Tea",
  "Fresh Juice": "Fresh Juice",
  "Hot Coffee": "Hot Coffee",
  "Soft Drinks": "Soft Drinks",

  // Cocktails sub-categories
  "Cold Coffee": "Cold Coffee",
  "Classic Cocktail": "Classic Cocktails",
  "Signature Cocktails": "Signature Cocktails",
  "Sugar Brunch Cocktails": "Sugar Brunch Cocktails",
  Cognac: "Cognac",
  Tequila: "Tequila",
  Whiskey: "Whiskey",
  Wine: "Wine",
  Prosecco: "Prosecco",
  Champagne: "Champagne",
  Beer: "Beer",
  "Wine per Glass": "Wine per Glass",
  "Shots & Shooters": "Shots & Shooters",
};

// Original sub-category mapping for items
const itemSubCategories = {
  // Batters & Toasts
  "buttermilk-pancake": "Batters & Toasts",
  "french-toast-brioche": "Batters & Toasts",
  "belgian-waffles": "Batters & Toasts",

  // Chicken & Batter
  "chicken-waffles": "Chicken & Batter",
  "chicken-stacks": "Chicken & Batter",

  // Fruit Bowls
  "very-berry-bowl": "Fruit Bowls",
  "crunch-yoghurt": "Fruit Bowls",

  // Brunch Extras
  "corn-on-cob": "Brunch Extras",
  eggs: "Brunch Extras",
  "beef-sausage": "Brunch Extras",
  "chicken-sausage": "Brunch Extras",
  "avocado-slices": "Brunch Extras",
  "extra-prawns": "Brunch Extras",
  "french-toast": "Brunch Extras",
  waffles: "Brunch Extras",
  pancake: "Brunch Extras",
  "side-salad": "Brunch Extras",
  "potato-wedges": "Brunch Extras",

  // Early Bird
  "breakfast-omelette": "Early Bird",
  "full-english-fry-up": "Early Bird",
  "american-breakfast": "Early Bird",
  "steak-eggs": "Early Bird",
  "yam-egg-sauce": "Early Bird",

  // Starters
  "trio-tacos": "Starters",
  calamari: "Starters",
  "prawns-spring-rolls": "Starters",
  "spring-roll": "Starters",
  "chicken-croquettes": "Starters",
  "beef-croquettes": "Starters",
  tacos: "Starters",

  // Rice & Poultry
  "half-baby-chicken": "Rice & Poultry",
  oxtail: "Rice & Poultry",
  "lamb-shank": "Rice & Poultry",
  ribeye: "Rice & Poultry",
  "lamb-chops": "Rice & Poultry",
  "turkey-casserole": "Rice & Poultry",
  "t-bone": "Rice & Poultry",
  "surf-turf": "Rice & Poultry",
  "pot-rice": "Rice & Poultry",
  "ghanaian-jollof": "Rice & Poultry",

  // Seafood
  "sole-fish": "Seafood",
  salmon: "Seafood",
  "chilli-lemon-king-prawns": "Seafood",
  "fish-chips": "Seafood",

  // Sides
  "sugar-special-rice": "Sides",
  "baked-potatoes": "Sides",
  "smokey-jollof-rice": "Sides",
  "sauteed-vegetables": "Sides",
  "vegetable-stir-fried-rice": "Sides",
  "mashed-potatoes": "Sides",
  fries: "Sides",

  // Wings & Boneless
  "regular-wings": "Wings & Boneless",
  "signature-wings": "Wings & Boneless",

  // Pasta
  "spaghetti-bolognese": "Pasta",
  "smoked-chicken-tagliatelle": "Pasta",
  "pasta-alla-vodka": "Pasta",
  "seafood-pasta": "Pasta",
  "alfredo-pasta": "Pasta",
  "spaghetti-meatballs": "Pasta",
  "creole-pasta": "Pasta",

  // Local Dish
  "loaded-native-rice": "Local Dish",
  "yam-porridge": "Local Dish",
  "beans-porridge-plantain": "Local Dish",
  "ayamase-ofada-stew": "Local Dish",
  "egusi-soup": "Local Dish",
  "oxtail-pepper-soup": "Local Dish",

  // Burgers & Sandwiches
  "pulled-beef-sliders": "Burgers & Sandwiches",
  "sugar-beef-burger": "Burgers & Sandwiches",
  "grilled-chicken-burger": "Burgers & Sandwiches",
  "club-sandwich-fries": "Burgers & Sandwiches",
  "smokey-big-cheese": "Burgers & Sandwiches",

  // Wraps
  "pitta-wrap": "Wraps",
  "chicken-wrap": "Wraps",

  // Salad Bowls
  "caesar-salad": "Salad Bowls",
  "shrimp-avo-salad": "Salad Bowls",

  // Dessert
  cheesecake: "Dessert",
  "tres-leche-cake": "Dessert",
  "chocolate-cake": "Dessert",

  // Mocktails
  "virgin-colada": "Mocktails",
  "virgin-mojito": "Mocktails",
  "another-round": "Mocktails",
  "love-portion": "Mocktails",
  "twist-toast": "Mocktails",
  "sugar-chapman": "Mocktails",
  "pineapple-ginger-lemonade": "Mocktails",
  "classic-lemonade": "Mocktails",

  // Milk Shakes
  "strawberry-shake": "Milk Shakes",
  "banana-shake": "Milk Shakes",
  "oreos-shake": "Milk Shakes",
  "vanilla-shake": "Milk Shakes",

  // Brunch Smoothies
  "berry-blast": "Brunch Smoothies",
  faded: "Brunch Smoothies",
  "avm-bliss": "Brunch Smoothies",
  "de-move": "Brunch Smoothies",

  // Sugar Special Smoothies
  "pinky-promise": "Sugar Special Smoothies",
  "sexy-lady": "Sugar Special Smoothies",
  "tutti-fruity": "Sugar Special Smoothies",

  // Pack Juice
  "orange-pack-juice": "Pack Juice",
  "apple-pack-juice": "Pack Juice",
  "pineapple-pack-juice": "Pack Juice",
  "grape-pack-juice": "Pack Juice",
  "cranberry-pack": "Pack Juice",

  // Tea
  "tea-box": "Tea",
  "arabian-tea": "Tea",

  // Fresh Juice
  "orange-juice-fresh": "Fresh Juice",
  "watermelon-juice-fresh": "Fresh Juice",
  "pineapple-juice-fresh": "Fresh Juice",
  "mixed-fruit-juice": "Fresh Juice",

  // Hot Coffee
  espresso: "Hot Coffee",
  "double-espresso": "Hot Coffee",
  cappuccino: "Hot Coffee",
  americano: "Hot Coffee",
  "cafe-latte": "Hot Coffee",
  macchaito: "Hot Coffee",
  "hot-cocoa": "Hot Coffee",
  "chai-latte": "Hot Coffee",

  // Soft Drinks
  coke: "Soft Drinks",
  fanta: "Soft Drinks",
  sprite: "Soft Drinks",
  "energy-drink": "Soft Drinks",
  "tonic-water": "Soft Drinks",
  "soda-water": "Soft Drinks",
  "still-water": "Soft Drinks",

  // Cold Coffee
  "iced-coffee": "Cold Coffee",
  "iced-chia-latte": "Cold Coffee",
  frapuccino: "Cold Coffee",
  "iced-mocha": "Cold Coffee",

  // Classic Cocktails
  "espresso-martini": "Classic Cocktail",
  "long-island": "Classic Cocktail",
  "whiskey-sour": "Classic Cocktail",
  "tequila-sour": "Classic Cocktail",
  negroni: "Classic Cocktail",
  "old-fashioned": "Classic Cocktail",
  "moscow-mule": "Classic Cocktail",
  "spicy-magarita": "Classic Cocktail",
  daiquiri: "Classic Cocktail",
  mojito: "Classic Cocktail",
  cosmopolitan: "Classic Cocktail",
  "pornstar-martini": "Classic Cocktail",
  "singapore-sling": "Classic Cocktail",
  "gin-basil": "Classic Cocktail",
  penicillin: "Classic Cocktail",
  pinacolada: "Classic Cocktail",

  // Signature Cocktails
  "happy-mistake": "Signature Cocktails",
  "love-me-jeje": "Signature Cocktails",
  "7-brothers": "Signature Cocktails",
  "cloud-9": "Signature Cocktails",
  "red-hat-lady": "Signature Cocktails",
  pandemic: "Signature Cocktails",
  "slow-steady": "Signature Cocktails",

  // Sugar Brunch Cocktails
  "aperol-spritz": "Sugar Brunch Cocktails",
  "blue-hawaii": "Sugar Brunch Cocktails",
  appletini: "Sugar Brunch Cocktails",
  "classic-mimosa": "Sugar Brunch Cocktails",
  "strawberry-mimosa": "Sugar Brunch Cocktails",
  "classic-bellini": "Sugar Brunch Cocktails",

  // Cognac
  "hennessy-vs": "Cognac",
  "martell-blue-swift": "Cognac",

  // Tequila
  sierra: "Tequila",
  olmeca: "Tequila",
  patron: "Tequila",
  volcan: "Tequila",
  "casamigo-blanco": "Tequila",

  // Whiskey
  "jameson-black": "Whiskey",
  "monkey-shoulder": "Whiskey",
  "glen-15yrs": "Whiskey",
  "glen-18yrs": "Whiskey",

  // Wine
  "sweet-kiss": "Wine",
  "thomas-barton": "Wine",
  cederburg: "Wine",
  "whispering-angel": "Wine",
  "william-cole": "Wine",

  // Prosecco
  "bottega-rose": "Prosecco",
  "rugger-guistino": "Prosecco",
  "rugger-quartese": "Prosecco",

  // Champagne
  "belaire-rose": "Champagne",
  "moet-rose": "Champagne",
  "veuve-clicquot-brut": "Champagne",

  // Beer
  heineken: "Beer",
  desperado: "Beer",
  star: "Beer",
  guiness: "Beer",

  // Wine per Glass
  "house-sweet-wine-red": "Wine per Glass",
  "house-sweet-wine-white": "Wine per Glass",
  "house-sweet-wine-rose": "Wine per Glass",

  // Shots & Shooters
  "whiskey-shot": "Shots & Shooters",
  "tequila-shot": "Shots & Shooters",
  "gin-shot": "Shots & Shooters",
  "b-52": "Shots & Shooters",
  "jager-bomb": "Shots & Shooters",
};

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCopiedModal, setShowCopiedModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  // ── Load item data ──────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const foundItem = items.find((i) => i.id === productId);
      setItem(foundItem || null);

      if (foundItem) {
        const foundCategory = categories.find(
          (c) => c.id === foundItem.category,
        );
        setCategory(foundCategory || null);

        // Get the sub-category from the mapping
        const subCat = itemSubCategories[foundItem.id] || null;
        setSubCategory(subCat);
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

  // Get the display name for the sub-category
  const subCategoryDisplay = subCategory
    ? subCategoryMap[subCategory] || subCategory
    : null;

  return (
    <div className={styles.container}>
      {/* Back button */}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back to Menu
      </button>

      <div className={styles.vatNotice}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          VAT 7.5% and service charge 5% not inclusive
        </motion.p>
      </div>

      {/* Main Card */}
      <motion.div
        className={styles.mainCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header with Sub-Category and Price */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.categoryBadge}>
              <FaTag className={styles.categoryIcon} />
              {subCategoryDisplay ||
                (category ? category.name : "Uncategorized")}
            </span>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.priceLarge}>₦{item.price}</span>
          </div>
        </div>

        {/* Item Name */}
        <h1 className={styles.name}>{item.name}</h1>

        {/* Rating */}
        <div className={styles.rating}>
          <FaStar className={styles.starFilled} />
          <FaStar className={styles.starFilled} />
          <FaStar className={styles.starFilled} />
          <FaStar className={styles.starFilled} />
          <FaStarHalfAlt className={styles.starHalf} />
          <span className={styles.ratingText}>4.5 (24 reviews)</span>
        </div>

        {/* Description */}
        <p className={styles.description}>{item.description}</p>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className={styles.tags}>
            {item.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Actions: Like & Share */}
        <div className={styles.actions}>
          <button
            className={`${styles.actionBtn} ${isLiked ? styles.liked : ""}`}
            onClick={toggleLike}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            {isLiked ? <FaHeart /> : <FaRegHeart />}
            <span>{isLiked ? "Liked" : "Like"}</span>
          </button>
          <button
            className={styles.actionBtn}
            onClick={() => setShowShareModal(true)}
            aria-label="Share"
          >
            <FaShare />
            <span>Share</span>
          </button>
        </div>
      </motion.div>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <motion.div
          className={styles.related}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.relatedHeader}>
            <FaUtensils className={styles.relatedIcon} />
            <h3 className={styles.relatedTitle}>You might also like</h3>
          </div>
          <div className={styles.relatedGrid}>
            {relatedItems.map((rel) => (
              <Link
                to={`/product/${rel.id}`}
                key={rel.id}
                className={styles.relatedCard}
              >
                <div className={styles.relatedContent}>
                  <h4 className={styles.relatedName}>{rel.name}</h4>
                  <span className={styles.relatedPrice}>₦{rel.price}</span>
                  {rel.tags && rel.tags.length > 0 && (
                    <span className={styles.relatedTag}>{rel.tags[0]}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
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
