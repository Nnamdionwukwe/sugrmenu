import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { categories, items } from "../data/menuData";
import styles from "../styles/Category.module.css";
import SugarLoader from "../components/SugarLoader";

// ─── Category Background Images ─────────────────────────────────
const categoryBackgrounds = {
  "main-menu": "/images/categories/main-menu-bg.jpg",
  platters: "/images/categories/platters-bg.jpg",
  pitchers: "/images/categories/pitchers-bg.jpg",
  shisha: "/images/categories/shisha-bg.jpg",
  mocktails: "/images/categories/mocktails-bg.jpg",
  cocktails: "/images/categories/cocktails-bg.jpg",
};

// ─── Sub-Category Map ────────────────────────────────────────────
const subCategoryMap = {
  // Main Menu sub-categories
  "Batters & Toasts": { icon: "🥞", display: "Batters & Toasts" },
  "Chicken & Batter": { icon: "🍗", display: "Chicken & Batter" },
  "Fruit Bowls": { icon: "🥣", display: "Fruit Bowls" },
  "Brunch Extras": { icon: "🍳", display: "Brunch Extras" },
  "Early Bird": { icon: "🌅", display: "Early Bird" },
  Starters: { icon: "🍤", display: "Starters" },
  "Rice & Poultry": { icon: "🍚", display: "Rice & Poultry" },
  Seafood: { icon: "🦐", display: "Seafood" },
  Sides: { icon: "🥗", display: "Sides" },
  "Wings & Boneless": { icon: "🍗", display: "Wings & Boneless" },
  Pasta: { icon: "🍝", display: "Pasta" },
  "Local Dish": { icon: "🍲", display: "Local Dish" },
  "Burgers & Sandwiches": { icon: "🍔", display: "Burgers & Sandwiches" },
  Wraps: { icon: "🌯", display: "Wraps" },
  "Salad Bowls": { icon: "🥗", display: "Salad Bowls" },
  Dessert: { icon: "🍰", display: "Dessert" },

  // Mocktails & Beverages sub-categories
  Mocktails: { icon: "🍹", display: "Mocktails" },
  "Milk Shakes": { icon: "🥛", display: "Milk Shakes" },
  "Brunch Smoothies": { icon: "🥤", display: "Brunch Smoothies" },
  "Sugar Special Smoothies": { icon: "🍓", display: "Sugar Special Smoothies" },
  "Pack Juice": { icon: "🧃", display: "Pack Juice" },
  Tea: { icon: "☕", display: "Tea" },
  "Fresh Juice": { icon: "🍊", display: "Fresh Juice" },
  "Hot Coffee": { icon: "☕", display: "Hot Coffee" },
  "Soft Drinks": { icon: "🥤", display: "Soft Drinks" },

  // Cocktails sub-categories
  "Cold Coffee": { icon: "🧊", display: "Cold Coffee" },
  "Classic Cocktail": { icon: "🍸", display: "Classic Cocktails" },
  "Signature Cocktails": { icon: "🍹", display: "Signature Cocktails" },
  "Sugar Brunch Cocktails": { icon: "🥂", display: "Sugar Brunch Cocktails" },
  Cognac: { icon: "🥃", display: "Cognac" },
  Tequila: { icon: "🥃", display: "Tequila" },
  Whiskey: { icon: "🥃", display: "Whiskey" },
  Wine: { icon: "🍷", display: "Wine" },
  Prosecco: { icon: "🍾", display: "Prosecco" },
  Champagne: { icon: "🍾", display: "Champagne" },
  Beer: { icon: "🍺", display: "Beer" },
  "Wine per Glass": { icon: "🍷", display: "Wine per Glass" },
  "Shots & Shooters": { icon: "🥃", display: "Shots & Shooters" },
};

// ─── Original sub-category mapping ──────────────────────────────
const itemSubCategories = {
  // ... (keep all your existing itemSubCategories mapping here)
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

export default function Category() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
  const category = useMemo(
    () => categories.find((c) => c.id === categoryId),
    [categoryId],
  );

  const categoryItems = useMemo(
    () => items.filter((item) => item.category === categoryId),
    [categoryId],
  );

  // Get the background image for this category
  const backgroundImage = useMemo(() => {
    return (
      categoryBackgrounds[categoryId] || "/images/categories/default-bg.jpg"
    );
  }, [categoryId]);

  // Simulate loading when category changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [categoryId]);

  // Group items by sub-category
  const groupedItems = useMemo(() => {
    const groups = {};
    categoryItems.forEach((item) => {
      const subCategory = itemSubCategories[item.id] || "Other";
      if (!groups[subCategory]) {
        groups[subCategory] = [];
      }
      groups[subCategory].push(item);
    });
    return groups;
  }, [categoryItems]);

  // Filter grouped items based on search
  const filteredGroups = useMemo(() => {
    if (searchTerm.trim() === "") {
      return groupedItems;
    }
    const term = searchTerm.toLowerCase().trim();
    const filtered = {};
    Object.entries(groupedItems).forEach(([subCategory, items]) => {
      const matchingItems = items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term),
      );
      if (matchingItems.length > 0) {
        filtered[subCategory] = matchingItems;
      }
    });
    return filtered;
  }, [groupedItems, searchTerm]);

  const hasFilteredItems = Object.keys(filteredGroups).length > 0;

  // ✅ Now it's safe to have conditional returns
  if (loading) {
    return <SugarLoader />;
  }

  if (!category) {
    return (
      <div className={styles.notFound}>
        <h2>Category not found</h2>
        <button onClick={() => navigate("/")}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div
        className={styles.overlay}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: window.innerWidth <= 768 ? "scroll" : "fixed",
          minHeight: "100vh",
          minHeight: "100dvh",
          width: "100%",
        }}
      ></div>

      <div className={styles.content}>
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
            <button
              className={styles.clearBtn}
              onClick={() => setSearchTerm("")}
            >
              ✕
            </button>
          )}
        </div>

        {/* Items grid with sub-category sections */}
        {!hasFilteredItems ? (
          <div className={styles.emptyState}>
            <p>No items found matching your search.</p>
          </div>
        ) : (
          <motion.div
            className={styles.categoryWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              {Object.entries(filteredGroups).map(([subCategory, items]) => {
                const subInfo = subCategoryMap[subCategory] || {
                  icon: "📋",
                  display: subCategory,
                };
                return (
                  <div key={subCategory} className={styles.subCategorySection}>
                    <div className={styles.subCategoryHeader}>
                      <span className={styles.subCategoryIcon}>
                        {subInfo.icon}
                      </span>
                      <h2 className={styles.subCategoryTitle}>
                        {subInfo.display}
                      </h2>
                      <span className={styles.subCategoryCount}>
                        {items.length}
                      </span>
                    </div>
                    <div className={styles.grid}>
                      {items.map((item, index) => (
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
                          <Link
                            to={`/product/${item.id}`}
                            className={styles.cardLink}
                          >
                            <div className={styles.info}>
                              <div className={styles.namePriceWrapper}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                {item.price && (
                                  <span className={styles.priceBadge}>
                                    ₦{item.price}
                                  </span>
                                )}
                              </div>
                              <p className={styles.description}>
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
