// src/data/menuData.js

export const categories = [
  { id: "main-menu", name: "Main Menu", icon: "FaUtensils" },
  { id: "platters", name: "Platters", icon: "FaTable" },
  { id: "pitchers", name: "Pitchers", icon: "FaCocktail" },
  { id: "shisha", name: "Shisha", icon: "FaSmoking" },
  { id: "mocktails", name: "Mocktails & Beverages", icon: "FaBlender" },
  { id: "cocktails", name: "Cocktails", icon: "FaCocktail" },
];

// Helper to generate a placeholder image URL (replace with actual later)
const imagePlaceholder = (id, category) =>
  `https://source.unsplash.com/featured/?${category || "food"}&${id}`;

export const items = [
  // ─── PITCHERS ──────────────────────────────────────────────────────
  {
    id: "tropical-punch-pitcher",
    name: "Tropical Punch Pitcher",
    price: 90,
    category: "pitchers",
    description: "Tropical punch pitcher.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-R96riVsiyBEqOBAGq2ZlpmK_io6hFAEuxwf-KlJRCBigTwH6PJ9OcP88&s=10",
  },
  {
    id: "paloma-pitcher",
    name: "Paloma Pitcher",
    price: 90,
    category: "pitchers",
    description: "Paloma pitcher.",
    image:
      "https://www.hornitostequila.com/sites/default/files/styles/original/public/2023-08/Paloma%20Pitcher%20new.png.webp?itok=sGoOnppu",
  },
  {
    id: "aperol-spritz-jug",
    name: "Aperol Spritz Jug",
    price: 35,
    category: "pitchers",
    description: "Aperol spritz jug (35,000).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbtNphEPpmCRGcIbQep01qhp5uIzrn2OvRa_GbM2F6zuLq1uAx-Y7ejhR&s=10",
  },
  {
    id: "cocktail-tree-5",
    name: "Cocktail Tree for 5",
    price: 46,
    category: "pitchers",
    description: "Cocktail tree for 5 (46,000).",
    image:
      "https://www.thebottleclub.com/cdn/shop/files/the-bottle-club-cocktail-glass-tree-12-arms-tableware-28387569008755.jpg?v=1703667906",
  },
  {
    id: "cocktail-tree-9",
    name: "Cocktail Tree for 9",
    price: 82,
    category: "pitchers",
    description: "Cocktail tree for 9 (82,000).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKa3qpclEZ4juRDRN5O5iVlAeGRHuvxDPLDU2EjLC08wTdhKTh9-0Ci0&s=10",
  },
  {
    id: "bloom-again-sangrai",
    name: "Bloom Again Sangrai",
    price: 45,
    category: "pitchers",
    description: "Bloom again sangrai (45,000).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxrSs6B7QbjaGPiz0qSpgRmLIDWkKdJin2Pz2rOz_gQ5EdbfjGC_9pUM6&s=10",
  },
  {
    id: "mocktail-pitcher-tropical-sunrise",
    name: "Mocktail Pitcher - Tropical Sunrise",
    price: 60,
    category: "pitchers",
    description: "Tropical sunrise mocktail pitcher.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2nNnc_VKHgzowEnxfBdmenUmWkU4pFRRZlqoNveRebfrMLI1usagXLe8&s=10",
  },
  {
    id: "mocktail-pitcher-chapman",
    name: "Mocktail Pitcher - Chapman",
    price: 60,
    category: "pitchers",
    description: "Chapman mocktail pitcher.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0SaZRTLPAHElMb26tR4jfiJ4sKT5ePJSYEhBbIsXULRGvQtbjMb8Lg0Y&s=10",
  },
  {
    id: "mocktail-pitcher-virgin-mojito",
    name: "Mocktail Pitcher - Virgin Mojito",
    price: 60,
    category: "pitchers",
    description: "Virgin mojito mocktail pitcher.",
    image:
      "https://cdn.shopify.com/s/files/1/0193/5041/articles/virgin-mojito-mocktail.jpg?v=1781878623",
  },

  // ─── SHISHA ─────────────────────────────────────────────────────────
  {
    id: "shisha-cream-mint",
    name: "Cream with Mint",
    price: 12,
    category: "shisha",
    description: "Shisha with cream and mint flavor.",
    image: "",
  },
  {
    id: "shisha-blueberry",
    name: "Blueberry",
    price: 12,
    category: "shisha",
    description: "Shisha with blueberry flavor.",
    image: "",
  },
  {
    id: "shisha-cinnamon",
    name: "Cinnamon",
    price: 12,
    category: "shisha",
    description: "Shisha with cinnamon flavor.",
    image: "",
  },
  {
    id: "shisha-magic-love",
    name: "Magic Love",
    price: 12,
    category: "shisha",
    description: "Shisha with magic love flavor.",
    image: "",
  },
  {
    id: "shisha-milk",
    name: "Milk",
    price: 12,
    category: "shisha",
    description: "Shisha with milk flavor.",
    image: "",
  },
  {
    id: "shisha-mint",
    name: "Mint",
    price: 12,
    category: "shisha",
    description: "Shisha with mint flavor.",
    image: "",
  },
  {
    id: "shisha-strawberry",
    name: "Strawberry",
    price: 12,
    category: "shisha",
    description: "Shisha with strawberry flavor.",
    image: "",
  },
  {
    id: "shisha-vanilla",
    name: "Vanilla",
    price: 12,
    category: "shisha",
    description: "Shisha with vanilla flavor.",
    image: "",
  },
  {
    id: "shisha-lemon-mint",
    name: "Lemon with Mint",
    price: 12,
    category: "shisha",
    description: "Shisha with lemon and mint flavor.",
    image: "",
  },
  {
    id: "shisha-grape",
    name: "Grape",
    price: 12,
    category: "shisha",
    description: "Shisha with grape flavor.",
    image: "",
  },
  {
    id: "shisha-orange",
    name: "Orange",
    price: 12,
    category: "shisha",
    description: "Shisha with orange flavor.",
    image: "",
  },
  {
    id: "shisha-mix-flavors",
    name: "Mix Flavors",
    price: 14,
    category: "shisha",
    description: "Shisha with mixed flavors.",
    image: "",
  },

  // ─── MAIN MENU (All Food Categories) ─────────────────────────────

  // ─── BATTERS & TOASTS ───
  {
    id: "buttermilk-pancake",
    name: "Buttermilk Pancake",
    price: 25,
    category: "main-menu",
    description:
      "Fluffy buttermilk pancakes served with beef bacon, eggs, sausage, maple syrup, whipped butter, whipped cream, and powdered sugar.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1cm6ob--vmVxUY_lI1jroxirRH9hgNEqRQyB256qb_4k6dsRnOdW-0aY&s=10",
  },
  {
    id: "french-toast-brioche",
    name: "French Toast Brioche",
    price: 25,
    category: "main-menu",
    description:
      "Brioche French toast with beef bacon, eggs, sausage, maple syrup, whipped butter, whipped cream, and powdered sugar.",
    image:
      "https://sweetandsavorymeals.com/wp-content/uploads/2019/01/moist-brioche-French-toast.jpg",
  },
  {
    id: "belgian-waffles",
    name: "Belgian Waffles",
    price: 25,
    category: "main-menu",
    description:
      "Crispy Belgian waffles served with beef bacon, eggs, sausage, maple syrup, whipped butter, whipped cream, and powdered sugar.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsjI_zT_IHJjL_SgkMNbTQaxKcgays2lCzW3xVzJlr5d2TFFIRkN7W70&s=10",
  },

  // ─── CHICKEN & BATTER ───
  {
    id: "chicken-waffles",
    name: "Chicken and Waffles",
    price: 27,
    category: "main-menu",
    description:
      "Crispy fried chicken served with golden waffles, maple syrup, and butter.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jTWN_u2Wba6sBBO8yNOa2FNnivrCJvRKLAFl6YfdftKVc96GtUtW468&s=10",
  },
  {
    id: "chicken-stacks",
    name: "Chicken on Stacks",
    price: 27,
    category: "main-menu",
    description: "A stack of chicken and waffles with a signature sauce.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9Hi0SWmbBjwGzgmtT4ijteq69YJlJWA5SzPRX8oJIuaxxxEE-T-Mee26&s=10",
  },

  // ─── FRUIT BOWLS ───
  {
    id: "very-berry-bowl",
    name: "Very Berry Bowl",
    price: 20,
    category: "main-menu",
    description:
      "Blueberry compote, Greek yoghurt, granola, fresh berries, shaved coconut.",
    image:
      "https://peasandcrayons.com/wp-content/uploads/2020/07/maple-pecan-granola-recipe-2.jpg",
  },
  {
    id: "crunch-yoghurt",
    name: "Crunch Yoghurt",
    price: 20,
    category: "main-menu",
    description: "Greek yoghurt, granola, fresh berries, shaved coconut.",
    image:
      "https://getinspiredeveryday.com/wp-content/uploads/2022/04/Fruit-and-Yogurt-Parfaits-Get-Inspired-Everyday-11.jpg",
  },

  // ─── BRUNCH EXTRAS ───
  {
    id: "corn-on-cob",
    name: "Corn on the Cob",
    price: 8.5,
    category: "main-menu",
    description: "Grilled corn on the cob with butter and spices.",
    image:
      "https://www.seriouseats.com/thmb/POoH-EXN9POTn32rmsPZ56xg52M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20250626-SEA-SmokedPaprikaHarissaButterGrilledCornontheCob-NiedleCreative-HERO-4a3e614d0dbb41a6aa2f3f26a9b0f466.jpg",
  },
  {
    id: "eggs",
    name: "Eggs (2 pcs as you desire)",
    price: 3,
    category: "main-menu",
    description: "Two eggs cooked your way.",
    image:
      "https://assets.heartfoundation.org.nz/images/marketing/landing-pages/egg-nutrition.png?mtime=1669000905",
  },
  {
    id: "beef-sausage",
    name: "Beef Sausage (2 pcs)",
    price: 3,
    category: "main-menu",
    description: "Two beef sausages.",
    image:
      "https://lh3.googleusercontent.com/proxy/UqtZW3gG5iTj8Mm_6jDKEP8M8jPktaGsZBiJUkSjDz3oZngBTNXgutOZhqsb1GCVnbtXYthmMrB3ubfosw0xnnpa7rsgHZ53zXMO9-kL0LFoci241Q",
  },
  {
    id: "chicken-sausage",
    name: "Chicken Sausage (2 pcs)",
    price: 3,
    category: "main-menu",
    description: "Two chicken sausages.",
    image:
      "https://st4.depositphotos.com/1757359/28906/i/450/depositphotos_289067774-stock-photo-grilled-smoked-sausages-wooden-background.jpg",
  },
  {
    id: "avocado-slices",
    name: "Avocado Slices",
    price: 2,
    category: "main-menu",
    description: "Fresh avocado slices.",
    image:
      "https://www.pacificvalleyfoods.com/wp-content/uploads/Avocado-slices.jpg",
  },
  {
    id: "extra-prawns",
    name: "Extra Prawns",
    price: 8,
    category: "main-menu",
    description: "Extra prawns.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6-J8VsXfex6pftYwI5ElIzHJ80M8phoCF-rQSV2Adi4CKch6FLRCg5U&s=10",
  },
  {
    id: "french-toast",
    name: "French Toast",
    price: 5,
    category: "main-menu",
    description: "French toast slice.",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2024/08/french-toast-recipe.jpg",
  },
  {
    id: "waffles",
    name: "Waffles",
    price: 5,
    category: "main-menu",
    description: "Belgian waffle.",
    image:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Belgian-Waffles26-Thumbnail-1-scaled.jpg",
  },
  {
    id: "pancake",
    name: "Pancake (2 pcs with syrup)",
    price: 5,
    category: "main-menu",
    description: "Two pancakes with syrup.",
    image:
      "https://i.ytimg.com/vi/beNSFIeTp40/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDR7Wd0GzCJDi4X8pxR-uTUrqTKWQ",
  },
  {
    id: "side-salad",
    name: "Side Salad",
    price: 2,
    category: "main-menu",
    description: "Fresh garden salad.",
    image:
      "https://www.cookedandloved.com/wp-content/uploads/2023/06/side-salad-recipe-garden.jpg",
  },
  {
    id: "potato-wedges",
    name: "Potato Wedges",
    price: 5,
    category: "main-menu",
    description: "Crispy potato wedges.",
    image:
      "https://simplehomeedit.com/wp-content/uploads/2022/07/OVEN-BAKED-Crispy-Potato-Wedges-Recipe.webp",
  },

  // ─── EARLY BIRD ───
  {
    id: "breakfast-omelette",
    name: "Breakfast Omelette",
    price: 25,
    category: "main-menu",
    description:
      "3 Eggs with bell peppers, onion, tomatoes, spinach, mozzarella, and cheddar. Served with toast and sauteed potatoes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfEq9Ih87EmSy6xYA56RtjFT3sDfgJv_aHUJbbfYNQq5aUM1gO1xVBmQ-&s=10",
  },
  {
    id: "full-english-fry-up",
    name: "Full English Fry-Up",
    price: 27,
    category: "main-menu",
    description:
      "Toast, Mushrooms, sauteed potatoes, baked beans, beef bacon, butter, grilled tomatoes, and your choice of eggs. Served with sausage (chicken or beef).",
    image:
      "https://assets.epicurious.com/photos/5c4b7ab537d8ef4605419f1d/1:1/w_2560%2Cc_limit/St.-Patrick's-Day-Breakfast-Hash-012319.jpg",
  },
  {
    id: "american-breakfast",
    name: "American Breakfast",
    price: 27,
    category: "main-menu",
    description:
      "Pancake/waffle, Beef bacon crisps, mushroom, baked beans, choice of eggs, sauteed potatoes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLcjPTlrwGrvJh_kX4_UWyjjxPCwic2QGxDjV-iD5FMB8szgnrKSgYYI&s=10",
  },
  {
    id: "steak-eggs",
    name: "Steak & Eggs",
    price: 30,
    category: "main-menu",
    description:
      "Ribeye steak with eggs, grilled tomatoes, sauteed potatoes, and toast. Choice of honey chimichurri, peppercorn, mushroom, or pepper sauce.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisjESE8uS2_Slyyqbp7A5HhJ_hHjAQefu533P7A6_gBrIBtNjLyENtSBF&s=10",
  },
  {
    id: "yam-egg-sauce",
    name: "Yam & Egg Sauce",
    price: 18,
    category: "main-menu",
    description:
      "Boiled yam, saute chopped onions, tomatoes, and scotch bonnet.",
    image:
      "https://www.crsricebowl.org/sites/default/files/styles/hero_half_screen_desktop/public/dam/a2ygsuqt8m/usa2024102665.jpg?h=c63f14ec&itok=QNwHWEW-",
  },

  // ─── STARTERS ───
  {
    id: "trio-tacos",
    name: "Trio Tacos",
    price: 13,
    category: "main-menu",
    description:
      "Three tacos with choice of beef or chicken, fresh onions, crispy lettuce, gooey cheese, and tasty salsa.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ruCH8Qxt5nvhcW9Y1x_aUU8DmNUDsCR3sxNDYHCogwCJW0-3PUMZRXc&s=10",
  },
  {
    id: "calamari",
    name: "Calamari",
    price: 14,
    category: "main-menu",
    description: "Crispy fried calamari with dipping sauce.",
    image:
      "https://www.recipegirl.com/wp-content/uploads/2007/05/Fried-Calamari-1.jpeg",
  },
  {
    id: "prawns-spring-rolls",
    name: "Prawns Spring Rolls",
    price: 14.5,
    category: "main-menu",
    description: "Crispy spring rolls filled with prawns.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXodYaKPZwuVGzaC5S2L-7CGDsAoZAb3slhLgPygqbB8EJc2RD2wrfYLi&s=10",
  },
  {
    id: "spring-roll",
    name: "Spring Roll",
    price: 11.5,
    category: "main-menu",
    description: "Choice of chicken, beef, or vegetable spring rolls.",
    image:
      "https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg",
  },
  {
    id: "chicken-croquettes",
    name: "Chicken Croquettes",
    price: 12,
    category: "main-menu",
    description:
      "Crispy golden bites of seasoned chicken and creamy finely chopped potatoes, lightly breaded, and fried to a delectable perfection.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wl5eHUfXfkTFV5EwJSRqI7CL_okhKAyGsV8-cdd260kdIAJUZnRPwUk&s=10",
  },
  {
    id: "beef-croquettes",
    name: "Beef Croquettes",
    price: 12,
    category: "main-menu",
    description:
      "Crispy golden bites of seasoned beef and creamy finely chopped potatoes, lightly breaded and fried to a delectable perfection.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjnYmqgCgINDPJMNKrbSTpTkSNI0vb3c3VMCfvVOq2HCXbSkBiii3PK9U&s=10",
  },
  {
    id: "tacos",
    name: "Tacos",
    price: 10,
    category: "main-menu",
    description:
      "Beef or chicken seasoned ground beef or chicken, fresh onions, crispy lettuce, gooey cheese, and tasty salsa. (Prawns +4000)",
    image:
      "https://theforkedspoon.com/wp-content/uploads/2019/04/Ground-Beef-Tacos-700x700.jpg",
  },

  // ─── RICE AND POULTRY ───
  {
    id: "half-baby-chicken",
    name: "Half Baby Chicken",
    price: 20,
    category: "main-menu",
    description:
      "Open flamed marinated chicken served with one sauce, and your choice of side: Smokey Jollof rice or sauteed vegetables or potato wedges.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5kpjyaAtyuQOfLn76Sg8V7_DhnlibFpUsKUJ6PBzJAVV921nNFGyt5Fi&s=10",
  },
  {
    id: "oxtail",
    name: "Oxtail",
    price: 35,
    category: "main-menu",
    description:
      "Braised oxtail in rich savory gravy with your choice of side: Mashed potato, Vegetable stir fried rice, Senegalese rice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFY5jtoPmF90wkcL_PRUkHkkFt0rZ5VyEC1d-UfBNPqRTTnVw-rejj30Q&s=10",
  },
  {
    id: "lamb-shank",
    name: "Lamb Shank",
    price: 48,
    category: "main-menu",
    description:
      "Tender slow cooked prime steak, served with one sauce, and your choice of side: Sauteed Veggies, potato wedges, mashed potato.",
    image:
      "https://thegreekfoodie.com/wp-content/uploads/2025/01/Lamb_Shank_SQ-500x500.jpg",
  },
  {
    id: "ribeye",
    name: "Ribeye",
    price: 45,
    category: "main-menu",
    description:
      "Tender slow cooked prime steak, served with one sauce, and your choice of side: Sauteed Veggies, potato wedges, mashed potato.",
    image:
      "https://justcook.butcherbox.com/wp-content/uploads/2025/01/Grain-Finished-Ribeye-Steak-with-Potato-Puree-and-Cipollini-Onion-Marmalade-500x375.jpg",
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops",
    price: 50,
    category: "main-menu",
    description:
      "Tender slow cooked prime steak, served with one sauce, and your choice of side: Sauteed Veggies, potato wedges, mashed potato.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqnyLj0zp37ZK1G8pPOKv_gLkFTJHTYjcCP1mjGPWBLtSQqZMcT-tLcmQ&s=10",
  },
  {
    id: "turkey-casserole",
    name: "Turkey Casserole",
    price: 24,
    category: "main-menu",
    description:
      "Marinated turkey, Curry sauce, veggies, served with your choice of side: Butter steam rice, Vegetable rice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2ibOu7V2pjwKYVAoaWWlPjAxyzXeomikuhJgR_6yMbzx2-hee-iFFugu&s=10",
  },
  {
    id: "t-bone",
    name: "T-Bone",
    price: 45,
    category: "main-menu",
    description:
      "Tender slow cooked prime steak, served with one sauce, and your choice of side: Sauteed Veggies, potato wedges, mashed potato.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLamn-HuTHZ1LYnRtMXGIKiSRKTNd4uuLpMkQj9xWOeCpbB0AlJxTz20s&s=10",
  },
  {
    id: "surf-turf",
    name: "Surf and Turf",
    price: 50,
    category: "main-menu",
    description:
      "Tender slow cooked prime steak, Beef Fillet, Prawns, served with one sauce, and your choice of side: Sauteed Veggies, potato wedges, mashed potato.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4eGkK3Db2I-TAzE0YyCq0rSR7ky1rbqwLSTxFx1fRC8M1nSSAGFM8aQ&s=10",
  },
  {
    id: "pot-rice",
    name: "Pot Rice",
    price: 23.5,
    category: "main-menu",
    description:
      "Rice, Shrimps, beef, chicken, veggies, sweet corn, and green pea.",
    image:
      "https://www.maryswholelife.com/wp-content/uploads/2025/04/Chicken-Shrimp-Fried-Rice-18.jpg",
  },
  {
    id: "ghanaian-jollof",
    name: "Ghanaian Jollof Rice",
    price: 20,
    category: "main-menu",
    description: "Rice, carrot, bell peppers, onions, dry fish, and Asun.",
    image:
      "https://i0.wp.com/www.lubzonline.com/wp-content/uploads/2021/02/E10DB4E6-4731-4829-A5F1-B36B0AC88C98-scaled.jpeg?resize=480%2C270&ssl=1",
  },

  // ─── SEAFOOD ───
  {
    id: "sole-fish",
    name: "Sole Fish",
    price: 22,
    category: "main-menu",
    description:
      "Pan fried panko battered seasoned sole fillet, lemon chilli sauce with your choice of side: Smokey Jollof rice, plantain.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXLfhJuKKfRsextKnleGY4a_BhW8jo_igGUFEvMtxRUN7iz3QfeKMsa7k&s=10",
  },
  {
    id: "salmon",
    name: "Salmon",
    price: 45,
    category: "main-menu",
    description:
      "Seared salmon fillet atop a bed of sauteed veggies with your choice of side: Vegetable rice, mashed potato.",
    image:
      "https://substack-post-media.s3.amazonaws.com/public/images/f99f8fb8-1003-4dbf-9e42-904df4713429_1920x1080.jpeg",
  },
  {
    id: "chilli-lemon-king-prawns",
    name: "Chilli Lemon King Prawns",
    price: 40,
    category: "main-menu",
    description:
      "Open flamed grilled prawns, lemon, chilli with your choice of side: Jollof rice, potato wedges.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmp6-d-lQo2gduk9y0PO9NjgPjod906Ey4uaZGYxSFeYg3wLu1rXf2tFTV&s=10",
  },
  {
    id: "fish-chips",
    name: "Fish and Chips",
    price: 20,
    category: "main-menu",
    description: "Battered fish, home made sauce with Yam Chips.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzB6Ws-xyFMUKFQxCAUH9jkySPum27fLjF0G65dh_2iJwTN7XLkidz6jsj&s=10",
  },

  // ─── SIDES ───
  {
    id: "sugar-special-rice",
    name: "Sugar Special Rice",
    price: 10,
    category: "main-menu",
    description: "Special rice blend.",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2025/02/301_LLBlog_FriedRice_47795.jpg",
  },
  {
    id: "baked-potatoes",
    name: "Baked Potatoes (Irish)",
    price: 8,
    category: "main-menu",
    description: "Irish baked potatoes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuySBWv8cCVINRxm328FVjHzi_WYesi740iQXfTbVznSjK_nmVWalsorw&s=10",
  },
  {
    id: "smokey-jollof-rice",
    name: "Smokey Jollof Rice",
    price: 8.5,
    category: "main-menu",
    description: "Smokey Jollof rice.",
    image:
      "https://static01.nyt.com/images/2024/08/07/multimedia/05FAMILY-REUNIONREX3-jollof-rice-kjhg/FAMILY-REUNIONREX3-jollof-rice-kjhg-mediumSquareAt3X.jpg",
  },
  {
    id: "sauteed-vegetables",
    name: "Sauteed Vegetables",
    price: 6,
    category: "main-menu",
    description: "Fresh sauteed vegetables.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSQaKxTzYCn9ymQzvh9TAVSCtDP3WTpqt25O2GF5p9tRCIkf5mx7OdHXj&s=10",
  },
  {
    id: "vegetable-stir-fried-rice",
    name: "Vegetable Stir-Fried Rice",
    price: 9,
    category: "main-menu",
    description: "Stir-fried rice with vegetables.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0B4AM-LW0XDhGCFoeM2uue40SH1HJksgZgaeaSWlTj4Xj1hXgiVDn2Pu&s=10",
  },
  {
    id: "mashed-potatoes",
    name: "Mashed Potatoes",
    price: 7,
    category: "main-menu",
    description: "Creamy mashed potatoes.",
    image:
      "https://www.theirishmanswife.com/wp-content/uploads/2022/05/Creamy-Mashed-Potato.jpg",
  },
  {
    id: "fries",
    name: "Fries (French/Yam/Plantain)",
    price: 5,
    category: "main-menu",
    description: "Choice of French fries, yam fries, or plantain.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUzp7VoNcRhWAnM6pkfgh3kJJJSCVD0d0xF8XXKoTcYfPtUwHF_3F5Muh&s=10",
  },

  // ─── WINGS AND BONELESS ───
  {
    id: "regular-wings",
    name: "Regular Wings",
    price: 10,
    category: "main-menu",
    description: "Regular chicken wings.",
    image:
      "https://www.allrecipes.com/thmb/AtViolcfVtInHgq_mRtv4tPZASQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-187822-baked-chicken-wings-4x3-5c7b4624c8554f3da5aabb7d3a91a209.jpg",
  },
  {
    id: "signature-wings",
    name: "Signature Wings",
    price: 12.5,
    category: "main-menu",
    description: "10 pieces of signature wings (17,000).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TW5U5x2vraMT7v4V6PxCHYrI_RM-7hRNfEN96D9_FTdOjZInjom-fjRn&s=10",
  },

  // ─── PASTA ───
  {
    id: "spaghetti-bolognese",
    name: "Spaghetti Bolognese",
    price: 20,
    category: "main-menu",
    description:
      "Minced beef, spaghetti, fresh salsa, sprinkled parmesan, garlic bread.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTsR7rc_islFt2uCo7R5JqlzSM1wgKrBOObV7YNkDuxDlU_f6uaWJOAh5&s=10",
  },
  {
    id: "smoked-chicken-tagliatelle",
    name: "Smoked Chicken Tagliatelle",
    price: 22,
    category: "main-menu",
    description:
      "Tagliatelle pasta, smoked chicken, homemade sauce, garlic bread.",
    image:
      "https://saltpepperskillet.com/wp-content/uploads/smoked-chicken-alfredo-pasta-overhead-horizontal-500x375.jpg",
  },
  {
    id: "pasta-alla-vodka",
    name: "Pasta Alla Vodka",
    price: 20,
    category: "main-menu",
    description:
      "Chicken or shrimp, fresh pineapple, tomatoes sauce, vodka, cheese, parsley, butter.",
    image:
      "https://www.allrecipes.com/thmb/-FkFp8Cho0uk7aA9s82fhof_ngE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11815-penne-with-spicy-vodka-tomato-cream-sauce-PICS-Beauty-4x3-c2c1dafdb29e4b3e966f6695055fa554.jpg",
  },
  {
    id: "seafood-pasta",
    name: "Seafood Pasta",
    price: 30,
    category: "main-menu",
    description:
      "Mussels, prawns, linguine, tomato or olive oil base, garlic bread, calamari.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxVyuEMweVXNtpZDCC2ubXqImBScCjq8OYUUUR0ahdPxyaSjv9uttL10&s=10",
  },
  {
    id: "alfredo-pasta",
    name: "Alfredo Pasta",
    price: 20,
    category: "main-menu",
    description: "Chicken or shrimps, tomato based, paprika, alfredo sauce.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzh4m5NI9Sse-WTAuQOB7e0WWRXuQlqR0k6baGTosDImuzvR2tQG3OuKna&s=10",
  },
  {
    id: "spaghetti-meatballs",
    name: "Spaghetti & Meatballs",
    price: 20,
    category: "main-menu",
    description:
      "Traditional spaghetti in roasted tomato marinated sauce chilli oil & butter, yajsi spiced meatballs and herbs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpVqf5BwZ1RuKcDj7c-WCAl1MOXKsvygMKlS8sSJbSh80KXcMexWd8TTJ&s=10",
  },
  {
    id: "creole-pasta",
    name: "Creole Pasta",
    price: 20,
    category: "main-menu",
    description: "Chicken +20,000 | Prawn +25,000 | Salmon +27,000",
    image:
      "https://khinskitchen.com/wp-content/uploads/2022/06/salmon-and-prawn-pasta-09.jpg",
  },

  // ─── LOCAL DISH ───
  {
    id: "loaded-native-rice",
    name: "Loaded Native Rice",
    price: 25,
    category: "main-menu",
    description:
      "A taste of our native pot, our signature native rice, generously served with a protein mix of beef, snail, choice of stock fish and a blend of traditional spices.",
    image:
      "https://cdn.shopify.com/s/files/1/0521/2415/6104/articles/Bowl_of_Nigerian_Native_Jollof_Rice.jpg?v=1670954372",
  },
  {
    id: "yam-porridge",
    name: "Yam Porridge",
    price: 10,
    category: "main-menu",
    description: "Yam, dried fish, red oil, ugwu leaf, and fresh pepper.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyWmkrgL4uYT_9iDnzNfuiIulGKqxI26eh-aLV3zYepseK37lcYjjpIw&s=10",
  },
  {
    id: "beans-porridge-plantain",
    name: "Beans Porridge & Plantain",
    price: 10,
    category: "main-menu",
    description:
      "Honey beans / black eyed beans, palm oil, tomatoes, scotch bonnet, onions, cray fish, plantain.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos7BT59NfsEFVa0izUWfttkkNxyvnNk48sHCCMyNG-C3ZLU91IV-RzWY&s=10",
  },
  {
    id: "ayamase-ofada-stew",
    name: "Ayamase - Ofada Stew (with White Rice)",
    price: 18,
    category: "main-menu",
    description:
      "Scotch bonnet, green bell peppers, onions, palm oil, assorted meat, locust beans, cray fish, stock fish.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSr7wzjD-f2DZnwj5xnHGah3k7e3gsc60DRs5sRuLaFiPyNRLZAN4r5c&s=10",
  },
  {
    id: "egusi-soup",
    name: "Egusi Soup (Semo, Poundo, Wheat, Oat) + (Goat Meat/Beef)",
    price: 15,
    category: "main-menu",
    description: "Egusi, stock fish, dry fish, pomo, crayfish, ugwu.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSr31aEhsj_1CSfDvrtOCRT9lyOrmADbBxRW81-UeP1-M3qioxdtXX7o&s=10",
  },
  {
    id: "oxtail-pepper-soup",
    name: "Oxtail Pepper Soup (Bread Roll)",
    price: 15,
    category: "main-menu",
    description:
      "Cow leg, pepper soup spice, onion, ginger, fresh pepper, scent leaf.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pc7T8xh5NIvC-dE2pz88GMUTQYDu0wvugIn6ZGfARfuiomCYQsC5hEY&s=10",
  },

  // ─── BURGERS AND SANDWICHES ───
  {
    id: "pulled-beef-sliders",
    name: "Pulled Beef Sliders",
    price: 15,
    category: "main-menu",
    description:
      "Three mini burgers of Juicy Pulled Beef, Cheddar Cheese, lettuce and Island sauce.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMGJJBlNSdkm8X7YEck3X13JJYDHT9I9UNvjS05Zt3xaUflPcHFZlR2MJ&s=10",
  },
  {
    id: "sugar-beef-burger",
    name: "Sugar Beef Burger (Fries)",
    price: 16,
    category: "main-menu",
    description: "Beef patty, teriyaki sauce, wasabi mayo, Batavia salad.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSue0iYBCMhxR4RpN2OVxt1_UrgRvOTzqGfY9jacHj2eX52ZIIgfipsyzDw&s=10",
  },
  {
    id: "grilled-chicken-burger",
    name: "Grilled Chicken Burger + (Fries)",
    price: 16,
    category: "main-menu",
    description: "Spicy buttermilk, chicken thigh, extra beef (+5,000).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikEzq3zD9P58zIiUKlzL3CCwgTXekKXxLJzqPBQ3Jkp3dQGqAMMfG-uyc&s=10",
  },
  {
    id: "club-sandwich-fries",
    name: "Club Sandwich + Fries",
    price: 17,
    category: "main-menu",
    description:
      "Sliced toast bread stacked with layers of succulent chicken, crispy bacon, fresh lettuce, tomatoes and cream mayonnaise.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdm_XD3JgsZhtv9BpB_e9mkLIZXRvUhmhlRGQ0Cho9UfSJzy27jmHsmrkt&s=10",
  },
  {
    id: "smokey-big-cheese",
    name: "Smokey Big Cheese",
    price: 18,
    category: "main-menu",
    description:
      "Ragu beef, cheddar cheese, BBQ sauce, caramelized onions, Batavia salad, fries.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawr0-ZKVhEce7-6atywGJADvEG9k-am9Ph7sFu-WIquOtugd4GHhXaDo_&s=10",
  },

  // ─── WRAPS ───
  {
    id: "pitta-wrap",
    name: "Pitta Wrap",
    price: 12,
    category: "main-menu",
    description: "Pitta wrap with fillings.",
    image:
      "https://confessionsofagroceryaddict.com/wp-content/uploads/2023/05/Chicken-Pita-Wraps-square-hero-2.jpg",
  },
  {
    id: "chicken-wrap",
    name: "Chicken Wrap",
    price: 12,
    category: "main-menu",
    description: "Chicken wrap.",
    image:
      "https://www.simplejoy.com/wp-content/uploads/2020/07/Chicken-wrap.jpg",
  },

  // ─── SALAD BOWLS ───
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    price: 15,
    category: "main-menu",
    description:
      "Smoked chicken, lettuce, cherry tomatoes, croutons, parmesan, cucumber, olive oil and Lemon juice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8m6rTyvOusowFru7WZMWyLKtFBQvmezRVM-_Fg8MlQZkqlUO8vZU1Ra3&s=10",
  },
  {
    id: "shrimp-avo-salad",
    name: "Shrimp Avo Salad",
    price: 17,
    category: "main-menu",
    description:
      "Lettuce, cucumber, tomatoes, Crab sticks, shrimps' avocado, salad cream.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDXXHrlOzYjBafCdUz8IPR5CmX1c5J-4cuO-NZvFyTqjOAdsWkEzc7jE&s=10",
  },

  // ─── DESSERT ───
  {
    id: "cheesecake",
    name: "Cheesecake",
    price: 10,
    category: "main-menu",
    description: "Strawberry / blueberry / Salted caramel.",
    image:
      "https://theloopywhisk.com/wp-content/uploads/2021/01/Blueberry-Cheesecake_730px-9.jpg.webp",
  },
  {
    id: "tres-leche-cake",
    name: "Tres Leche Cake",
    price: 10,
    category: "main-menu",
    description: "Classic tres leches cake.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5hBCCZHWd36Knbt6l_oU2L9KjUSArKYAOkAjpK7Ep-OsGHktGy89_8Hw&s=10",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    price: 10,
    category: "main-menu",
    description: "A moist and velvety delight.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7y3ZlZ3Or_HsWEfSg9SVdb9Str7nimmkcvJu3T_1RJ07kFcD07Y9nXnE&s=10",
  },

  // ─── PLATTERS ──────────────────────────────────────────────────────
  {
    id: "sunday-brunch-platter",
    name: "Sunday Brunch Platter",
    price: 32,
    category: "platters",
    description:
      "Waffles, Pancakes, Sausages, Eggs, Toast, Maple Syrup, Nuts (Cashew).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVvxdLxJrN-RDYK3SiKSUW-ERPl5mu90Xov5uelKw8hE4xaqksIv142A&s=10",
  },
  {
    id: "taco-fiesta-board",
    name: "Taco Fiesta Board",
    price: 40,
    category: "platters",
    description:
      "3 Beef Tacos, 3 Chicken Tacos, 3 Prawns Tacos, Guacamole, Pico de Gallo, Sour Cream, Quesadilla.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLPaRUpsdJScdz74r2PDmEGVkRw-uZWQfKhKXGrt_R_hHlcymFMdbHIc&s=10",
  },
  {
    id: "sugar-street-feast",
    name: "Sugar Street Feast (2 - 3 Persons)",
    price: 45,
    category: "platters",
    description:
      "Corn Dog, Chicken Lollipop, Gizzard, Asun, Fries (Yam, Plantain, Potato), Chicken Croquette.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldDGF7f47Kf_5j7aE_VU-lblGdUtQCFdZUET1nwKOSalC8ey_df9pgbw&s=10",
  },
  {
    id: "suya-grill-board",
    name: "Suya & Grill Board (African Twist)",
    price: 45,
    category: "platters",
    description:
      "Beef Suya, Chicken Suya, Gas Meat/Wings, Grilled Plantain, Yam Fries, Pepper Sauce, Onions, Tomatoes, Cucumber, Senegalese Jollof.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3BgNsS0e9gnW0OyJ10I5gD90iKPvq5p-uxZqw7J_8ZGy92smpHmhj-M&s=10",
  },
  {
    id: "seafood-feast-platter",
    name: "Seafood Feast Platter (2 - 3 People)",
    price: 75,
    category: "platters",
    description:
      "Grilled Prawns, Grilled Calamari, Peppered Snail (2 pieces), Crispy Fish Bites, Shrimp Skewers (2 pieces), Fries (Yam, Plantain, Potato), Lemon Butter Dip.",
    image:
      "https://i0.wp.com/dennistheprescott.com/wp-content/uploads/2015/05/dsc_1587-e1430836806759.jpg?ssl=1",
  },
  {
    id: "grill-house-platter",
    name: "Grill House Platter (3 - 5 Persons)",
    price: 75,
    category: "platters",
    description:
      "Beef Fillet, Half Baby Chicken, Grilled Sausage (Chicken & Beef - 2 each), Corn on Cob, Potato Wedges, Chimichurri Sauce, Pepper Sauce.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgltNn_iPCHjzXRZHrATTIi8-riksoKA21bPSIJ5OPeaRMUKUtNMnrUHo&s=10",
  },
  {
    id: "sugar-royale-platter",
    name: "Sugar Royale Platter",
    price: 95,
    category: "platters",
    description:
      "Our ultimate premium sharing board. Choose your selection of premium meat & seafood.",
    image:
      "https://www.healthyfood.com/wp-content/uploads/2024/12/HFG1224_Barbecue-platter-1024x891.jpg",
  },

  // ─── MOCKTAILS & BEVERAGES ──────────────────────────────────────

  // ─── MOCKTAILS ───
  {
    id: "virgin-colada",
    name: "Virgin Colada",
    price: 12,
    category: "mocktails",
    description:
      "Fresh Pineapple, Coconut Milk, Coconut Syrup, Whipping Cream, Ice Cream.",
    image:
      "https://nyssaskitchen.com/wp-content/uploads/2025/06/Virgin-Pina-Coladas-8.jpg",
  },
  {
    id: "virgin-mojito",
    name: "Virgin Mojito",
    price: 12,
    category: "mocktails",
    description: "Orange, Mint Leaf, Simple Syrup & Sprite.",
    image:
      "https://yummynotes.net/wp-content/uploads/2023/08/Orange-Mojito-Mocktail-With-Sprite.jpg",
  },
  {
    id: "another-round",
    name: "Another Round",
    price: 12,
    category: "mocktails",
    description: "Strawberry Puree, Pineapple Juice, Lemon Juice & Sprite.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEymn5uLL7ALjOtlcVKORUmb_AqPT5ppeILdGrVbL4CcDy-m2lrBNJNQ8&s=10",
  },
  {
    id: "love-portion",
    name: "Love Portion",
    price: 12,
    category: "mocktails",
    description:
      "Passion Fruit Syrup, Vanilla Syrup, Lemon Juice, Pineapple Juice and Cranberry Juice.",
    image:
      "https://seekinggoodeats.com/wp-content/uploads/2021/12/passion-fruit-martini-feature-500x375.jpg",
  },
  {
    id: "twist-toast",
    name: "Twist & Toast",
    price: 12,
    category: "mocktails",
    description:
      "Cherry Juice, Pineapple Juice, Orange Juice, Apple Juice, Cranberry Juice, Lemon Juice & Passion Fruit Syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Lo2zFKVGRl4J15451rmqX7Tc-RaespGoLSCws2dO4zQoehLgnV3OLXi8&s=10",
  },
  {
    id: "sugar-chapman",
    name: "Sugar Chapman",
    price: 12,
    category: "mocktails",
    description:
      "Orange Juice, Sprite, Fanta, Angostura Bitters, Granadine Syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehQibHz1pItGL2Lz1eS42KezREIbhipaHwnvk6QXyu0gFdadM-5hsvIE&s=10",
  },
  {
    id: "pineapple-ginger-lemonade",
    name: "Pineapple Ginger Lemonade",
    price: 12,
    category: "mocktails",
    description:
      "Fresh pineapple juice, lemon juice, simple syrup, and ginger ale or beer.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnbV-34aKqKfzy0n7bRhyCq0GYtaRijsIkBxUMoUWAV5qgDTuidqiz0Y6&s=10",
  },
  {
    id: "classic-lemonade",
    name: "Classic Lemonade (ask for available flavors)",
    price: 12,
    category: "mocktails",
    description: "Fresh lemon juice, simple syrup, sprite or soda water.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZscNscYw6XmX3Ks9cTfUNZxGsDK2LV4iivbY8Aj2240sHUmnc9mmc1q50&s=10",
  },

  // ─── MILK SHAKES ───
  {
    id: "strawberry-shake",
    name: "Strawberry Milkshake",
    price: 15,
    category: "mocktails",
    description: "Fresh Frozen Strawberry, Milk, Ice Cream & Whipping Cream.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgSPpgsEuBNB66zj5bQHLT_Glq--yqshO3DJ-0x94D3oYZlPB15EnJFG8&s=10",
  },
  {
    id: "banana-shake",
    name: "Banana Milkshake",
    price: 15,
    category: "mocktails",
    description: "Fresh Banana, Milk and Ice Cream.",
    image:
      "https://www.nobleveggies.com/wp-content/uploads/2025/07/ninja-creami-banana-milkhake.jpg",
  },
  {
    id: "oreos-shake",
    name: "Oreos Milkshake",
    price: 15,
    category: "mocktails",
    description: "Oreo Cookies, Milk, Ice Cream & Whipping Cream.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mMvL1qXkQklKMF3tKeEkJVWPKC7PnGObjKQMNG14q73xBFn46WsxnD2h&s=10",
  },
  {
    id: "vanilla-shake",
    name: "Vanilla Milkshake",
    price: 15,
    category: "mocktails",
    description: "Vanilla Extract, Milk, Ice Cream & Whipping Cream.",
    image:
      "https://liliebakery.fr/wp-content/uploads/2023/06/Milkshake-vanille-Lilie-Bakery.jpg",
  },

  // ─── BRUNCH SMOOTHIES ───
  {
    id: "berry-blast",
    name: "Berry Blast Smoothie",
    price: 14,
    category: "mocktails",
    description: "Blueberry, low fat yoghurt, strawberry.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGBzkSRxgNB9GrkJ6JFyB2qRuvr5DgRBqtzHMbSS58Ncn_aNvTKUFITEs&s=10",
  },
  {
    id: "faded",
    name: "Faded Smoothie",
    price: 14,
    category: "mocktails",
    description: "Strawberry, banana, low fat yoghurt, honey.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAhl6JdXFWmvvwmSGqtlnCyyW-ZhPo_EwDTs6G_VXshmoGK-x3LaPLQA&s=10",
  },
  {
    id: "avm-bliss",
    name: "A.V.M Bliss Smoothie",
    price: 14,
    category: "mocktails",
    description: "Avocado, honey, banana and lowfat yoghurt.",
    image:
      "https://www.arise-app.com/images/dishes/en/strawberry-granola-and-yogurt-bowl-with-avocado-and-b-f0sbve.webp",
  },
  {
    id: "de-move",
    name: "De Move Smoothie",
    price: 14,
    category: "mocktails",
    description: "Mango, Pineapple, Banana.",
    image:
      "https://pickyeaterblog.com/wp-content/uploads/2022/03/easy-healthy-vegan-mango-pineapple-banana-smoothie-recipe.jpg",
  },

  // ─── SUGAR SPECIAL SMOOTHIES ───
  {
    id: "pinky-promise",
    name: "Pinky Promise",
    price: 14,
    category: "mocktails",
    description: "Banana, Pineapple, Vanilla Syrup, Granadine & Ice Cream.",
    image:
      "https://hymnsandverses.com/wp-content/uploads/2022/04/Banana-Pineapple-Dessert-for-Easter-Dinner-540x720.jpg",
  },
  {
    id: "sexy-lady",
    name: "Sexy Lady",
    price: 14,
    category: "mocktails",
    description:
      "Peach Syrup, Ice Cream, Mint Leaf, Pineapple Juice, Blue Curacao.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNewKBK0AW3LvcVLwd9J6u7kARdvldI4a75rkMrbMWFPw-8Z5YXNKAE1c&s=10",
  },
  {
    id: "tutti-fruity",
    name: "Tutti Fruity",
    price: 14,
    category: "mocktails",
    description: "Strawberries, Whipping Cream, Coconut Syrup, Ice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoeE0TfhbbVySShKXG9EfbGHdkQxPOAgZP3rXU2lIk5z233kieTtgMNpF&s=10",
  },

  // ─── PACK JUICE ───
  {
    id: "orange-pack-juice",
    name: "Orange Juice (Pack)",
    price: 4,
    category: "mocktails",
    description: "Packaged orange juice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrg6Wb8u2I5xjyJGxCjR5PGk2kitwnZCbORJgLyCFk9nRsKfzvKiseRWP&s=10",
  },
  {
    id: "apple-pack-juice",
    name: "Apple Juice (Pack)",
    price: 4,
    category: "mocktails",
    description: "Packaged apple juice.",
    image:
      "https://www.supermart.ng/web/image/product.template/5314/image_1024?unique=4ac64b5",
  },
  {
    id: "pineapple-pack-juice",
    name: "Pineapple Juice (Pack)",
    price: 4,
    category: "mocktails",
    description: "Packaged pineapple juice.",
    image:
      "https://www.supermart.ng/cdn/shop/files/fruttapineapple_ee4b0ebe-4772-42d0-849f-779af5db9262.jpg?v=1770033904",
  },
  {
    id: "grape-pack-juice",
    name: "Grape Juice (Pack)",
    price: 4,
    category: "mocktails",
    description: "Packaged grape juice.",
    image:
      "https://www.supermart.ng/cdn/shop/files/sprnw1288_grande.jpg?v=1688838464",
  },
  {
    id: "cranberry-pack",
    name: "Cranberry Juice (Pack)",
    price: 10,
    category: "mocktails",
    description: "Packaged cranberry juice.",
    image:
      "https://d3hjf51r9j54j7.cloudfront.net/wp-content/uploads/sites/7/2019/11/Ocean-Spray.jpg",
  },

  // ─── TEA ───
  {
    id: "tea-box",
    name: "Tea Box",
    price: 5,
    category: "mocktails",
    description: "Assorted tea box.",
    image:
      "https://img-1.kwcdn.com/product/fancy/2c8ffd0d-ac29-491d-b38f-1e94737dc90c.jpg?imageView2/2/w/500/q/80/format/avif",
  },
  {
    id: "arabian-tea",
    name: "Arabian Tea",
    price: 6,
    category: "mocktails",
    description: "Traditional Arabian tea.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjLXiDQORZytAUICSB5WSG0-Kp95ye0S8QZi2jfXq1CQo9J2vOF-5UnKc&s=10",
  },

  // ─── FRESH JUICE ───
  {
    id: "orange-juice-fresh",
    name: "Fresh Orange Juice",
    price: 7,
    category: "mocktails",
    description: "Fresh orange juice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSdHwQhPUELQBqBLze9Vn5HHFeNGkudpZt-JamhxFHIAMAJZyMz3OYSs&s=10",
  },
  {
    id: "watermelon-juice-fresh",
    name: "Fresh Watermelon Juice",
    price: 7,
    category: "mocktails",
    description: "Fresh watermelon juice.",
    image:
      "https://www.rebootwithjoe.com/wp-content/uploads/2012/05/watermelon-pineapple-juice.jpg",
  },
  {
    id: "pineapple-juice-fresh",
    name: "Fresh Pineapple Juice",
    price: 7,
    category: "mocktails",
    description: "Fresh pineapple juice.",
    image:
      "https://theallnaturalvegan.com/wp-content/uploads/2025/07/mango-pineapple-juice.jpg",
  },
  {
    id: "mixed-fruit-juice",
    name: "Mixed Fruit Juice",
    price: 7,
    category: "mocktails",
    description: "Mixed fresh fruit juice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHRPpGlqQmv7ZKhNtCUfnaaGEsA8eeuJtcJ_CKEb-ls7csAEg93Q5X5I&s=10",
  },

  // ─── HOT COFFEE ───
  {
    id: "espresso",
    name: "Espresso",
    price: 4,
    category: "mocktails",
    description: "Classic espresso shot.",
    image:
      "https://peakflavorcoffee.com/cdn/shop/files/Espresso_Shot_2.jpg?v=1742753320&width=3712",
  },
  {
    id: "double-espresso",
    name: "Double Espresso",
    price: 4,
    category: "mocktails",
    description: "Double espresso shot.",
    image:
      "https://134803755.cdn6.editmysite.com/uploads/1/3/4/8/134803755/DFJACN2XQ7U27ZHP6IHGI4DK.jpeg",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 8,
    category: "mocktails",
    description: "Cappuccino with steamed milk foam.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eAhfss-Y9vWBGn1D6lteWE_SfwjFv_jUOOPLxScxZVANyENcAZnNldY&s=10",
  },
  {
    id: "americano",
    name: "Americano",
    price: 9,
    category: "mocktails",
    description: "Espresso with hot water.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKkhl4ibzzjTRQ0m4OD8em33fo5zFf9KMTiuZUQ-e-6RJSq7mm_p3lgQ&s=10",
  },
  {
    id: "cafe-latte",
    name: "Café Latte",
    price: 8,
    category: "mocktails",
    description: "Latte with steamed milk.",
    image:
      "https://www.allrecipes.com/thmb/SUs7po94w7k2OwqYDjC3H_ZW3JQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/96629-cafe-latte-ddmfs-hero-4x3-0288359d9c37485fa69afe5369dbcf2e.jpg",
  },
  {
    id: "macchaito",
    name: "Macchaito",
    price: 9,
    category: "mocktails",
    description: "Espresso macchiato with milk.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYyytpk6ciMDhVo2ueyNV6jBQHdhTW5ZcJkbRol1soQ&s=10",
  },
  {
    id: "hot-cocoa",
    name: "Hot Cocoa",
    price: 10,
    category: "mocktails",
    description: "Rich hot chocolate.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCrP6QmyVSC7ROOwbUO5SODC7blaowrrMEu70GjbkdfZhxlOy55QoF1A&s=10",
  },
  {
    id: "chai-latte",
    name: "Chai Latte",
    price: 10,
    category: "mocktails",
    description: "Spiced chai latte.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt76I46bUFXH_gN6DB8GttcZOJkkG3RZEbnw3-vZZ3t6HCF74hEiiQPwRB&s=10",
  },

  // ─── SOFT DRINKS ───
  {
    id: "coke",
    name: "Coca-Cola",
    price: 2,
    category: "mocktails",
    description: "Coca-Cola.",
    image:
      "https://www.coca-cola.com/content/dam/onexp/ng/home-image/brands/coca-cola-brand-page/coca-cola-less-sugar/Coca%20Cola%20Less%20Sugar_Pack%20Shot.png",
  },
  {
    id: "fanta",
    name: "Fanta",
    price: 2,
    category: "mocktails",
    description: "Fanta.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3RuaOGuLqmk0KZDy3vUTteafqtFdqQ4LFLQY9ivsAOdo7ApfVXyYqIS4&s=10",
  },
  {
    id: "sprite",
    name: "Sprite",
    price: 2,
    category: "mocktails",
    description: "Sprite.",
    image: "https://primegrocers.ng/wp-content/uploads/2025/08/nido-33.jpg",
  },
  {
    id: "energy-drink",
    name: "Energy Drink",
    price: 4,
    category: "mocktails",
    description: "Energy drink.",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/30/11/istock-537022544.jpg",
  },
  {
    id: "tonic-water",
    name: "Tonic Water",
    price: 2,
    category: "mocktails",
    description: "Tonic water.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPtrrCfMoV0qQ0aFe3Cjvz1ss9_HAqdIWsSi8z4p6FtBZhHnPqI2c6rWi&s=10",
  },
  {
    id: "soda-water",
    name: "Soda Water",
    price: 2,
    category: "mocktails",
    description: "Soda water.",
    image: "https://primegrocers.ng/wp-content/uploads/2025/08/nido-29.jpg",
  },
  {
    id: "still-water",
    name: "Still Water",
    price: 1,
    category: "mocktails",
    description: "Still water.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEW7m-9r6FwIlODEEjSkUinVJRkrsL5v8RAiSuZYymj298IrovcO5j9zaU&s=10",
  },

  // ─── COCKTAILS ─────────────────────────────────────────────────────

  // ─── COLD COFFEE ───
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    price: 7,
    category: "cocktails",
    description: "Iced coffee.",
    image:
      "https://www.eatingbirdfood.com/wp-content/uploads/2025/06/iced-coffee-hero-new.jpg",
  },
  {
    id: "iced-chia-latte",
    name: "Iced Chia Latte",
    price: 9,
    category: "cocktails",
    description: "Iced latte with chia seeds.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdt66vx0DM7lqZlBuMzUQC8XtnUBLwwf59j9ve_uoReKba_0eG_NOaiIez&s=10",
  },
  {
    id: "frapuccino",
    name: "Frapuccino",
    price: 8,
    category: "cocktails",
    description: "Frozen coffee frappuccino.",
    image:
      "https://jennifermeyering.com/wp-content/uploads/2015/10/frozen-mocha-frappuccino-1.jpg",
  },
  {
    id: "iced-mocha",
    name: "Iced Mocha",
    price: 8,
    category: "cocktails",
    description: "Iced mocha with chocolate.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XsYC6GwDnXmH-mlB12vFf8ySOKaeebvmh1pHZUh1F49PBAuQX1nEg7RF&s=10",
  },

  // ─── CLASSIC COCKTAILS ───
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    price: 14,
    category: "cocktails",
    description: "Vodka, kahlua, coffee and simple syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxoK52G8r8JchygPY-m2hx21ZkXKICdfi5QBRwwsdKkuI5xt-cz4Uw5A&s=10",
  },
  {
    id: "long-island",
    name: "Long Island",
    price: 14,
    category: "cocktails",
    description:
      "Vodka, gin, Bacardi, tequila, triple sec, simple syrup, lemon juice and coke.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrRP9S-A37_CW1tfeuFPf5AgW0O7_NnAHgzhxHLo8PeXK1_6jLTTFmR-l&s=10",
  },
  {
    id: "whiskey-sour",
    name: "Whiskey Sour",
    price: 14,
    category: "cocktails",
    description:
      "Whiskey, lemon juice, simple syrup, egg white, angostura bitters.",
    image:
      "https://healthylittlepeach.com/wp-content/uploads/2021/10/shaken-whiskey-cocktail-easy-768x1152.jpg",
  },
  {
    id: "tequila-sour",
    name: "Tequila Sour",
    price: 12,
    category: "cocktails",
    description: "Tequila, lemon juice, simple syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0ZPF-QcSEgcI1PFWjfIw_6N74YsqyZQN7jGs4o06wwPxsR5BzFS96vI&s=10",
  },
  {
    id: "negroni",
    name: "Negroni",
    price: 14,
    category: "cocktails",
    description: "Gin, sweet vermouth, Campari.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8xjSTgdZpg9DqSv-PgwvPTk4j18apPI541iGOwBTxYGG60HVtT_o97w_&s=10",
  },
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    price: 14,
    category: "cocktails",
    description:
      "Cube sugar, bourbon, angostura bitters, orange bitters and water.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzEYrQ7CFo983AbDJ8sc37S_LNfpoIi4ArG1bfWoqFw&s",
  },
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    price: 14,
    category: "cocktails",
    description: "Vodka, lime juice, ginger beer.",
    image:
      "https://www.blossomtostem.net/wp-content/uploads/2021/02/Moscow-Mule-7.jpg",
  },
  {
    id: "spicy-magarita",
    name: "Spicy Magarita",
    price: 14,
    category: "cocktails",
    description:
      "Tequila, jalapeno pepper, lime juice, triple sec, simple syrup.",
    image:
      "https://kitchenswagger.com/wp-content/uploads/2023/05/spicy-margarita-5.jpg",
  },
  {
    id: "daiquiri",
    name: "Daiquiri (Frozen and Shake)",
    price: 14,
    category: "cocktails",
    description: "Rum, simple syrup and lemon juice.",
    image:
      "https://feastandwest.com/wp-content/uploads/2026/04/frozen-lemon-daiquiri-picture-735x1103.jpg",
  },
  {
    id: "mojito",
    name: "Mojito",
    price: 14,
    category: "cocktails",
    description: "Rum, mint leaf, lime, sugar, soda.",
    image:
      "https://kitchenswagger.com/wp-content/uploads/2020/07/mojito-recipe_0009_DSC_5509.jpg",
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    price: 14,
    category: "cocktails",
    description: "Vodka, triple sec, lime juice, cranberry juice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFOuuG7rSlCItQ53Oskq5aD7XiwACV2cU34XV1iT3b-cp3UFjFd3QGIw&s=10",
  },
  {
    id: "pornstar-martini",
    name: "Pornstar Martini",
    price: 14,
    category: "cocktails",
    description: "White rum, lime and sugar.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHQLRyr8eS7Veu4_i-BaMBzwC_hNCh-M1MLQpz0XYjYozZjx-QFTExMw&s=10",
  },
  {
    id: "singapore-sling",
    name: "Singapore Sling",
    price: 14,
    category: "cocktails",
    description:
      "Gin, Cointreau, cherry brandy, Benedictine, grenadine, pineapple juice, lemon juice, angostura bitters.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcS724vK_D-_MdSju7CaIqLZtU_ofe8o8wPcnlHXYh6bfMZwMZZp6qMFO&s=10",
  },
  {
    id: "gin-basil",
    name: "Gin Basil",
    price: 11,
    category: "cocktails",
    description: "Basil leaf, Gin, Simple Syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeKbKezH1M87qlDscfr_ooMiKzDR-PerMYq511d3ve8l3NNAyK5o_67U&s=10",
  },
  {
    id: "penicillin",
    name: "Penicillin",
    price: 12,
    category: "cocktails",
    description: "Whiskey, honey, lemon juice and ginger.",
    image:
      "https://www.liquor.com/thmb/FsPcbBZ5fnQy3mWgZ-xDPqxeS0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penicillin-720x720-primary-8157bd54c63948c4b5a3ad5b3986965a.jpg",
  },
  {
    id: "pinacolada",
    name: "Pinacolada",
    price: 13,
    category: "cocktails",
    description:
      "Rum, fresh pineapple, coconut syrup, coconut milk, whipping cream and ice cream.",
    image:
      "https://www.everyday-delicious.com/wp-content/uploads/2019/07/pina-colada-everyday-delicious-2-799x1200.jpg",
  },

  // ─── SIGNATURE COCKTAILS ───
  {
    id: "happy-mistake",
    name: "Happy Mistake",
    price: 16,
    category: "cocktails",
    description:
      "(Light blue) white rum, cinnamon syrup, Cointreau, dark rum, lemon juice, simple syrup and sprite.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqdK5E1EGpbQNbGHTmZZw8mS-xVxVR7xbAaSYPgizdvt2eNS18oNmf8bx&s=10",
  },
  {
    id: "love-me-jeje",
    name: "Love Me Jeje",
    price: 16,
    category: "cocktails",
    description:
      "(The red cocktail) grape juice, lemon juice, egg white, simple syrup, grenadine and tequila.",
    image:
      "https://data.thefeedfeed.com/static/other/15240626985ad759eab4456.jpg",
  },
  {
    id: "7-brothers",
    name: "7 Brothers",
    price: 16,
    category: "cocktails",
    description:
      "vodka, tequila, rum, gin, whiskey, passion fruit syrup, grenadine, simple syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSjp7VLEF0ImqWQZ1zOM-fLqnnWRAAPVWPEFPaLYLpn6qO7OHEueWUcU5&s=10",
  },
  {
    id: "cloud-9",
    name: "Cloud 9",
    price: 16,
    category: "cocktails",
    description:
      "Gin, grape juice, vodka, elderflower syrup, passion fruit syrup and blue curacao.",
    image:
      "https://images.prismic.io/cgc-web/NzE0M2RiZTAtZjYyMS00YmU4LTgyMzctMzFjYzc1OGU0OWI1_elderflowersourcocktail.jpg?auto=compress,format&rect=0,0,640,400&w=640&h=400",
  },
  {
    id: "red-hat-lady",
    name: "Red Hat Lady",
    price: 16,
    category: "cocktails",
    description:
      "Tequila, fresh pineapple juice, passion fruit syrup, lime juice and a dash of grenadine.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYA7RI7UVD_vCuTxnUDHvEc8dyq-ZYR9Xylz9oRCNCkJaNHlehXavbrE&s=10",
  },
  {
    id: "pandemic",
    name: "Pandemic",
    price: 16,
    category: "cocktails",
    description:
      "Whiskey, cinnamon syrup, vodka, lemon juice, blueberries and egg white.",
    image:
      "https://karalydon.com/wp-content/uploads/2020/06/blueberry-basil-vodka-lemonade-5-2.jpg",
  },
  {
    id: "slow-steady",
    name: "Slow and Steady",
    price: 16,
    category: "cocktails",
    description: "Rum, pineapple juice, ginger syrup, lemon juice.",
    image:
      "https://quitegoodfood.co.nz/wp-content/uploads/2016/10/pineapple-ginger-rum-cocktail-1-720x720.jpg",
  },

  // ─── SUGAR BRUNCH COCKTAILS ───
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    price: 13,
    category: "cocktails",
    description: "Prosecco, Aperol, Soda Water.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9ZEgj5rnezCkhoDmwtdR1RFnugDQSvdBw_7W9_staFc_Qkiz7tBu0mT4&s=10",
  },
  {
    id: "blue-hawaii",
    name: "Blue Hawaii",
    price: 12,
    category: "cocktails",
    description: "Vodka, Rum, Blue Curacao, Simple Syrup, Lemon Juice.",
    image:
      "https://artofnaturalliving.com/wp-content/uploads/2025/06/Blue_Hawaii_06.jpg",
  },
  {
    id: "appletini",
    name: "Appletini",
    price: 12,
    category: "cocktails",
    description: "Vodka, Apple Schnapp, Triple Sec.",
    image:
      "https://www.simplejoy.com/wp-content/uploads/2023/08/appletini-ingredients.jpg",
  },
  {
    id: "classic-mimosa",
    name: "Classic Mimosa",
    price: 10,
    category: "cocktails",
    description: "Orange Juice, Sparkling Wine.",
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Mimosa-Cocktail-Recipe-1200.jpg",
  },
  {
    id: "strawberry-mimosa",
    name: "Strawberry Mimosa",
    price: 10,
    category: "cocktails",
    description: "Strawberry, Sparkling Wine, Orange.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0mJOuxqflHFg1tobXYytdVbzW8-QDKv7AMfngOumQliTpDmGGu8sQX-C&s=10",
  },
  {
    id: "classic-bellini",
    name: "Classic Bellini",
    price: 10,
    category: "cocktails",
    description: "Peach Puree & Prosecco.",
    image:
      "https://stacyling.com/wp-content/uploads/2022/02/Updated-bellini-cover-photo2.jpg",
  },

  // ─── COGNAC ───
  {
    id: "hennessy-vs",
    name: "Hennessy VS",
    price: 120,
    category: "cocktails",
    description: "Hennessy VS cognac.",
    image:
      "https://bottlesandglasses.com.ng/wp-content/uploads/2025/03/HENNY-VS-LSTYLE.png",
  },
  {
    id: "martell-blue-swift",
    name: "Martell Blue Swift",
    price: 200,
    category: "cocktails",
    description: "Martell Blue Swift cognac.",
    image:
      "https://24hoursmarket.com/wp-content/uploads/2022/08/273037307_360624582193448_5615651303953078926_n-600x750.jpg",
  },

  // ─── TEQUILA ───
  {
    id: "sierra",
    name: "Sierra Tequila",
    price: 50,
    category: "cocktails",
    description: "Sierra tequila.",
    image:
      "https://res.cloudinary.com/dw0getd2m/image/upload/v1/media/product_media/sierra_silver_tequila.jpg",
  },
  {
    id: "olmeca",
    name: "Olmeca Tequila",
    price: 70,
    category: "cocktails",
    description: "Olmeca tequila.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuSLSlMng6heDLiq4eC_BVpRyp8kz1pOPUZrI7p7s0Q&s=10",
  },
  {
    id: "patron",
    name: "Patron Tequila",
    price: 100,
    category: "cocktails",
    description: "Patron tequila.",
    image:
      "https://cellarcentral.ng/wp-content/uploads/2015/10/Patron-Silver-75CL-1.webp",
  },
  {
    id: "volcan",
    name: "Volcan Tequila",
    price: 150,
    category: "cocktails",
    description: "Volcan tequila.",
    image: "https://cellarcentral.ng/wp-content/uploads/2024/01/volcan.png",
  },
  {
    id: "casamigo-blanco",
    name: "Casamigo Blanco",
    price: 160,
    category: "cocktails",
    description: "Casamigo Blanco tequila.",
    image:
      "https://www.wyncity.ng/web/image/product.template/5314/image_1024?unique=4ac64b5",
  },

  // ─── WHISKEY ───
  {
    id: "jameson-black",
    name: "Jameson Black",
    price: 100,
    category: "cocktails",
    description: "Jameson Black whiskey.",
    image:
      "https://cellarcentral.ng/wp-content/uploads/2020/11/Jameson-Black-Barrel-70cl-copy-1.webp",
  },
  {
    id: "monkey-shoulder",
    name: "Monkey Shoulder",
    price: 100,
    category: "cocktails",
    description: "Monkey Shoulder whiskey.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eL-GRD754SiRsmit0DjZfj-oEjHDthNroq17uHTRRaa2n12QBNR5mu7-&s=10",
  },
  {
    id: "glen-15yrs",
    name: "Glen 15yrs",
    price: 150,
    category: "cocktails",
    description: "Glen 15 years whiskey.",
    image:
      "https://cellarcentral.ng/wp-content/uploads/2017/02/glenfiddich-15-yrs-copy.webp",
  },
  {
    id: "glen-18yrs",
    name: "Glen 18yrs",
    price: 220,
    category: "cocktails",
    description: "Glen 18 years whiskey.",
    image:
      "https://myliquorhub.com/wp-content/uploads/2019/11/Glenfiddich-18-Years.jpg",
  },

  // ─── WINE ───
  {
    id: "sweet-kiss",
    name: "Sweet Kiss Wine",
    price: 40,
    category: "cocktails",
    description: "Sweet Kiss wine.",
    image:
      "https://www.supermart.ng/cdn/shop/files/spxvl1358_f46fd499-9cc2-4abd-975d-b4de89c751ce.jpg?v=1756130385",
  },
  {
    id: "thomas-barton",
    name: "Thomas Barton Wine",
    price: 40,
    category: "cocktails",
    description: "Thomas Barton wine.",
    image:
      "https://spirits.ng/wp-content/uploads/2023/11/Thomas_Barton_Bordeaux_Red_Wine_Case.jpg",
  },
  {
    id: "cederburg",
    name: "Cederburg Wine",
    price: 40,
    category: "cocktails",
    description: "Cederburg wine.",
    image:
      "https://www.cederbergwine.com/wp-content/uploads/2021/11/Home-Styledshots-CED.jpg",
  },
  {
    id: "whispering-angel",
    name: "Whispering Angel",
    price: 40,
    category: "cocktails",
    description: "Whispering Angel wine.",
    image: "https://booze.ng/wp-content/uploads/2024/10/8135-1-1.jpg",
  },
  {
    id: "william-cole",
    name: "William Cole Wine",
    price: 40,
    category: "cocktails",
    description: "William Cole wine.",
    image:
      "https://lh6.googleusercontent.com/proxy/hVyRIYNUqAWHycfsR8Y5VzcLRz9Z42NPaPwgrIy9tg_WCMfCr-Ex1dd1_Glj4xIIeJiz_udPTLghZCdqUC5t3ywYHahc2mESuejfr3hgqjoizTWLOg9PE-Dgno6DF8kRnV1zzddaoAFEUIjB0T0",
  },

  // ─── PROSECCO ───
  {
    id: "bottega-rose",
    name: "Bottega Rose",
    price: 70,
    category: "cocktails",
    description: "Bottega Rose prosecco.",
    image:
      "https://myliquorhub.com/wp-content/uploads/2022/05/Bottega-Rose-75cl.jpg",
  },
  {
    id: "rugger-guistino",
    name: "Rugger Guistino",
    price: 50,
    category: "cocktails",
    description: "Rugger Guistino prosecco.",
    image:
      "https://www.woodberrys.ie/wp-content/uploads/Ruggeri_Giustino_B.jpg",
  },
  {
    id: "rugger-quartese",
    name: "Rugger Quartese",
    price: 40,
    category: "cocktails",
    description: "Rugger Quartese prosecco.",
    image:
      "https://www.ferrowine.it/3589-virtual_product_header/v-ruggeri-pros-sup-quartese-brut-cl-75-docg-veneto.jpg",
  },

  // ─── CHAMPAGNE ───
  {
    id: "belaire-rose",
    name: "Belaire Rose",
    price: 100,
    category: "cocktails",
    description: "Belaire Rose champagne.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNxIO4QS674NxGe8Zfo9OXU9YKITu0NlZWLMMTbLDoiPG3gzsQ2ZDLlY&s=10",
  },
  {
    id: "moet-rose",
    name: "Moet Rose",
    price: 230,
    category: "cocktails",
    description: "Moet Rose champagne.",
    image: "https://cellarcentral.ng/wp-content/uploads/2016/10/MOET.jpg",
  },
  {
    id: "veuve-clicquot-brut",
    name: "Veuve Clicquot Brut",
    price: 210,
    category: "cocktails",
    description: "Veuve Clicquot Brut champagne.",
    image: "https://barrels.ng/wp-content/uploads/2025/06/Artboard-11-100.jpg",
  },

  // ─── BEER ───
  {
    id: "heineken",
    name: "Heineken Beer",
    price: 3.5,
    category: "cocktails",
    description: "Heineken beer.",
    image:
      "https://www.supermart.ng/cdn/shop/files/NBK132_314d07ba-1f93-42a9-a02d-6a67f76ef6d6.jpg?v=1711999655",
  },
  {
    id: "desperado",
    name: "Desperado Beer",
    price: 3,
    category: "cocktails",
    description: "Desperado beer.",
    image:
      "https://www.supermart.ng/cdn/shop/files/spmt3275_770d007d-c893-4e7a-bae7-245413273ba0.jpg?v=1689899905",
  },
  {
    id: "star",
    name: "Star Beer",
    price: 3,
    category: "cocktails",
    description: "Star beer.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8prgpwDqU1gk-XHin7muG0ufhF6tEupQW9Zcrf5dppdPxYSOnk7qiAc&s=10",
  },
  {
    id: "guiness",
    name: "Guiness Beer",
    price: 3,
    category: "cocktails",
    description: "Guiness beer.",
    image:
      "https://www.drinksonline.store/wp-content/uploads/2020/11/Fes-Can-440ml.png",
  },

  // ─── WINE PER GLASS ───
  {
    id: "house-sweet-wine-red",
    name: "House Sweet Wine (Red)",
    price: 10,
    category: "cocktails",
    description: "House sweet red wine per glass.",
    image:
      "https://i5.walmartimages.com/seo/Sutter-Home-Sweet-California-Red-Wine-1-5-L-Glass-Bottle-12-5-ABV_2c30536c-46a4-483b-acb8-dd73028c4a18.8c4ca0fee4cb883f5ffac336c05bcb6c.jpeg",
  },
  {
    id: "house-sweet-wine-white",
    name: "House Sweet Wine (White)",
    price: 10,
    category: "cocktails",
    description: "House sweet white wine per glass.",
    image: "https://assets.sainsburys-groceries.co.uk/gol/7259411/image.jpg",
  },
  {
    id: "house-sweet-wine-rose",
    name: "House Sweet Wine (Rose)",
    price: 10,
    category: "cocktails",
    description: "House sweet rose wine per glass.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkylGcByKvcEL8BOVWmhItnEMaAzy3QaAEC7BruCHMTwYBlPT9TODeXLe&s=10",
  },

  // ─── SHOTS & SHOOTERS ───
  {
    id: "whiskey-shot",
    name: "Whiskey Shot",
    price: 4,
    category: "cocktails",
    description: "Whiskey shot.",
    image:
      "https://pendletonwhisky.com/wp-content/uploads/2020/12/pendleton-shot@4x-2-1.jpg",
  },
  {
    id: "tequila-shot",
    name: "Tequila Shot",
    price: 4,
    category: "cocktails",
    description: "Tequila shot.",
    image:
      "https://olmecatequila.com/wp-content/uploads/2021/10/shot-of-tequila.jpg",
  },
  {
    id: "gin-shot",
    name: "Gin Shot",
    price: 4,
    category: "cocktails",
    description: "Gin shot.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzcTP6E2EZKln_uRVnxybiyezo6CdZ8htcmEOlq9WEA6N4bqjA8JNbB8&s=10",
  },
  {
    id: "b-52",
    name: "B-52 Shot",
    price: 4,
    category: "cocktails",
    description: "B-52 shot.",
    image:
      "https://cdn.foodfaithfitness.com/uploads/2023/07/A_b52-shot-Featured_1.jpg",
  },
  {
    id: "jager-bomb",
    name: "Jager Bomb",
    price: 4,
    category: "cocktails",
    description: "Jager Bomb shot.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHdIEDmZFuuen6_nOQJ9br7_ieLG06cdLYJZfEsy5E4vq2X4sBmiAgQ&s=10",
  },
];
