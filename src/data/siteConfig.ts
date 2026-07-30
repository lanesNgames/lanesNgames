export type DietaryTag = "GF" | "VG" | "V";

export type MenuCategoryId = "espresso" | "cold_drinks" | "warm_food" | "bakery";

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type DayHours =
  | { closed: true }
  | {
      closed: false;
      open: string; // "07:00"
      close: string; // "16:00"
    };

export type MenuItem = {
  name: string;
  description: string;
  price: number | null;
  dietaryTags: DietaryTag[];
  isSignature: boolean;
};

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  description?: string;
  items: MenuItem[];
};

export const siteConfig = {
  siteUrl: "https://example.com",
  business: {
    name: "Juniper & Clay Café",
    tagline: "Specialty espresso, warm food, and a community-first space.",
    legacyName: "River Street Coffee",
    address: {
      street: "123 Main St",
      city: "Springfield",
      region: "CA",
      postalCode: "90000",
      country: "US"
    },
    phone: "+1 (555) 123-4567",
    neighborhoodCallout: "Downtown • River District",
    timeZone: "America/Los_Angeles",
    hours: {
      monday: { closed: false, open: "07:00", close: "16:00" },
      tuesday: { closed: false, open: "07:00", close: "16:00" },
      wednesday: { closed: false, open: "07:00", close: "16:00" },
      thursday: { closed: false, open: "07:00", close: "18:00" },
      friday: { closed: false, open: "07:00", close: "18:00" },
      saturday: { closed: false, open: "08:00", close: "18:00" },
      sunday: { closed: false, open: "08:00", close: "15:00" }
    } satisfies Record<Weekday, DayHours>
  },
  ordering: {
    primaryProvider: "Square",
    primaryUrl: "https://www.cakeshopcafe.com/s/order",
    secondaryProvider: "Square",
    secondaryUrl: "https://www.cakeshopcafe.com/"
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps?q=123+Main+St+Springfield+CA+90000&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=123+Main+St+Springfield+CA+90000"
  },
  socials: {
    instagram: "https://instagram.com/example",
    facebook: "https://facebook.com/example",
    tiktok: "https://tiktok.com/@example"
  },
  media: {
    ambientPhotos: [
      { src: "/images/ambient_1.svg", alt: "Bright seating and plants" },
      { src: "/images/ambient_2.svg", alt: "Barista pulling espresso" },
      { src: "/images/ambient_3.svg", alt: "Fresh pastry case" },
      { src: "/images/ambient_4.svg", alt: "Cozy corner seating" }
    ]
  },
  menu: {
    categories: [
      {
        id: "espresso",
        label: "Coffee",
        description: "Hot drinks and espresso classics.",
        items: [
          {
            name: "Drip Coffee",
            description: "16 oz $3.00 • 24 oz $3.29",
            price: 3.0,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cafe au Lait",
            description: "16 oz $2.85 • 24 oz $3.15",
            price: 2.85,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Red Eye",
            description: "16 oz $3.29 • 24 oz $3.79",
            price: 3.29,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Espresso",
            description: "4 oz double",
            price: 4.65,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Macchiato",
            description: "2 oz espresso & foam",
            price: 3.29,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Americano",
            description: "8 oz",
            price: 4.65,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cortado",
            description: "4 oz",
            price: 3.29,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cappuccino",
            description: "8 oz",
            price: 3.69,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Latte",
            description: "16 oz $4.29 • 24 oz $4.79",
            price: 4.29,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Cafe Vanilla",
            description: "16 oz $4.39 • 24 oz $4.89",
            price: 4.39,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cafe Mocha",
            description: "16 oz $4.39 • 24 oz $4.89",
            price: 4.39,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Sweet Matcha",
            description: "$4.89",
            price: 4.89,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Hot Tea",
            description:
              "12 oz or 16 oz $3.25 • English Breakfast, Earl Grey, Blueberry Hibiscus, Turmeric Ginger, Chamomile, Jasmine, Matcha Super Green, Matcha Chai",
            price: 3.25,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Hot Cocoa",
            description: "16 oz $3.00 • 24 oz $3.50",
            price: 3.0,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Local Steamer",
            description:
              "Pearson's Elmhurst Dairy Farm steamed with flavor of choice • 16 oz $2.25 • 24 oz $2.50",
            price: 2.25,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Seven Layer Bar Latte",
            description: "Hot 12/16 oz • Iced 16/24 oz (price not listed online)",
            price: null,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Chocolate Raspberry Latte",
            description: "Hot 12/16 oz • Iced 16/24 oz (price not listed online)",
            price: null,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Almond Joy Latte",
            description: "Hot 12/16 oz • Iced 16/24 oz (price not listed online)",
            price: null,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Maple Pancake Latte",
            description: "Hot 12/16 oz • Iced 16/24 oz (price not listed online)",
            price: null,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Espresso Shot (add-on)",
            description: "Add a shot",
            price: 2.5,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Whipped Cream (add-on)",
            description: "Add whipped cream",
            price: 0.75,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cold Foam (add-on)",
            description: "Flavor of choice",
            price: 0.75,
            dietaryTags: [],
            isSignature: false
          }
        ]
      },
      {
        id: "cold_drinks",
        label: "Cold Brew",
        description: "Iced drinks, iced tea, and smoothies.",
        items: [
          {
            name: "Cold Brew",
            description: "16 oz $3.75 • 24 oz $4.10 • 32 oz $4.50",
            price: 3.75,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Iced Coffee",
            description: "16 oz $3.75 • 24 oz $4.10 • 32 oz $4.50",
            price: 3.75,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Thai Iced Coffee",
            description: "Contains dairy • 16 oz $4.29 • 24 oz $4.79 • 32 oz $5.09",
            price: 4.29,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Red Eye (iced)",
            description:
              "Choice of cold brew or iced coffee • 16 oz $3.79 • 24 oz $4.29 • 32 oz $4.79",
            price: 3.79,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Americano (iced)",
            description: "$4.65",
            price: 4.65,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Latte (iced)",
            description: "16 oz $4.79 • 24 oz $4.99",
            price: 4.79,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cafe Vanilla (iced)",
            description: "16 oz $4.89 • 24 oz $5.19",
            price: 4.89,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cafe Mocha (iced)",
            description: "16 oz $4.89 • 24 oz $5.19",
            price: 4.89,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Chai Latte (iced)",
            description: "16 oz $4.89 • 24 oz $5.19",
            price: 4.89,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Sweet Matcha (iced)",
            description: "16 oz $5.09 • 24 oz $5.49",
            price: 5.09,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Iced Tea",
            description:
              "16/24/32 oz $3.59/$3.79/$3.99 • Wild Berry, Green Citrus, Peach Black, Classic Black",
            price: 3.59,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Chocolate Milk",
            description: "16 oz $3.00 • 24 oz $3.75",
            price: 3.0,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Vanilla Milk",
            description: "16 oz $3.00 • 24 oz $3.75",
            price: 3.0,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Smoothie: Strawberry Banana",
            description: "24 oz $8.75 • frozen strawberries, banana, milk & honey",
            price: 8.75,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Smoothie: BBC (Blueberry Banana Chai)",
            description:
              "24 oz $8.75 • banana, blueberries, raspberries, chia seeds, honey, skim milk",
            price: 8.75,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Smoothie: Peanut Butter Power",
            description: "24 oz $8.75 • banana, peanut butter, homemade chocolate syrup",
            price: 8.75,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Smoothie: Banana Chai",
            description: "24 oz $8.75 • banana, chai concentrate, milk",
            price: 8.75,
            dietaryTags: [],
            isSignature: false
          }
        ]
      },
      {
        id: "warm_food",
        label: "Warm Food",
        description:
          "Breakfast + sandwiches on house-made bread. Gluten-free white bread available. Add house-made garlic aioli +$0.75.",
        items: [
          {
            name: "Breakfast Sandwich: Bacon & Cheddar",
            description: "Fluffy baked egg topped with bacon and cheddar cheese.",
            price: 9.5,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Breakfast Sandwich: Bacon & Pesto",
            description: "Bacon, sliced tomato, melted mozzarella, creamy pesto sauce.",
            price: 9.5,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Breakfast Sandwich: Hawaiian Ham",
            description: "Sliced ham, roasted pineapple, swiss cheese, garlic aioli.",
            price: 9.5,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Breakfast Sandwich: Egg White + Almond Milk (Spinach & Feta)",
            description:
              "Price varies by bread: pretzel $7.25 • english muffin $6.75 • bagel $6.95 • croissant $8.95",
            price: null,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Breakfast Sandwich: Egg White Delight (Ham & Swiss)",
            description:
              "Price varies by bread: pretzel $7.25 • english muffin $6.75 • bagel $6.95 • croissant $8.95",
            price: null,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Hot Sandwich: Turkey",
            description: "Mozzarella, sautéed spinach, sliced tomato, chipotle sauce.",
            price: 9.5,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Hot Sandwich: BLT",
            description: "Bacon, fresh mozzarella, tomato, balsamic glaze.",
            price: 9.5,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Hot Sandwich: French Onion",
            description: "Caramelized onions, swiss, mozzarella, garlic & herb butter.",
            price: 9.5,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Hot Sandwich: Toasted Veggie",
            description:
              "Caramelized onions, sautéed spinach, roasted red bell peppers, sliced tomato. Add cheese +$1.",
            price: 9.5,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Hot Sandwich: Grilled Cheese",
            description: "Made with mild cheddar cheese.",
            price: 6.49,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cold Sandwich: Dill Chicken Salad",
            description: "Choice of bread (varies).",
            price: 9.5,
            dietaryTags: [],
            isSignature: false
          },
          {
            name: "Cold Sandwich: Cranberry Almond Chicken Salad",
            description: "Choice of bread (varies). Add avocado or bacon +$2.",
            price: 9.5,
            dietaryTags: [],
            isSignature: false
          }
        ]
      },
      {
        id: "bakery",
        label: "Pastries",
        description: "Not listed on the online menu (bakery case rotates daily).",
        items: [
          {
            name: "Bakery Case (daily)",
            description: "Ask in store for today's selection.",
            price: null,
            dietaryTags: [],
            isSignature: false
          }
        ]
      }
    ] satisfies MenuCategory[]
  },
  rebrandStory: {
    evolution:
      "We kept the warm community feel you loved and elevated everything around it — from our espresso program to a refreshed space designed for lingering, meeting, and recharging.",
    legacyAcknowledgement:
      "Formerly River Street Coffee, we’re still the same neighborhood stop — now with a new name, a new look, and an even better everyday experience.",
    upgrades: [
      "Expanded seating",
      "New specialty espresso program",
      "Faster pickup + streamlined ordering",
      "Improved Wi‑Fi and more outlets",
      "Local bakery partnerships"
    ]
  }
} as const;

export type SiteConfig = typeof siteConfig;

