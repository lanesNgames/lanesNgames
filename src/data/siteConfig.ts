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
  price: number;
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
    primaryProvider: "Toast",
    primaryUrl: "https://order.example.com",
    secondaryProvider: "Square",
    secondaryUrl: "https://squareup.example.com"
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0000!2d-0.0000!3d0.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
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
        description: "Classic espresso drinks with a new specialty program.",
        items: [
          {
            name: "House Espresso",
            description: "Chocolatey, balanced, and dialed daily.",
            price: 3.5,
            dietaryTags: ["VG"],
            isSignature: true
          },
          {
            name: "Cappuccino",
            description: "Velvety microfoam with a bright finish.",
            price: 5.25,
            dietaryTags: ["VG"],
            isSignature: true
          },
          {
            name: "Latte",
            description: "Smooth espresso with steamed milk.",
            price: 5.75,
            dietaryTags: ["VG"],
            isSignature: false
          }
        ]
      },
      {
        id: "cold_drinks",
        label: "Cold Brew",
        description: "Iced favorites and seasonal cold brew.",
        items: [
          {
            name: "Cold Brew",
            description: "Slow-steeped, naturally sweet, low acidity.",
            price: 5.5,
            dietaryTags: ["VG"],
            isSignature: true
          },
          {
            name: "Iced Latte",
            description: "Bright espresso over ice with milk.",
            price: 6.0,
            dietaryTags: ["VG"],
            isSignature: false
          },
          {
            name: "Sparkling Citrus Espresso",
            description: "Espresso tonic with a citrus twist.",
            price: 6.25,
            dietaryTags: ["VG", "GF"],
            isSignature: true
          }
        ]
      },
      {
        id: "warm_food",
        label: "Warm Food",
        description: "Toasty, comforting staples made for busy mornings.",
        items: [
          {
            name: "Bacon & Egg Sandwich",
            description: "Soft roll, folded egg, cheddar, herb aioli.",
            price: 9.5,
            dietaryTags: [],
            isSignature: true
          },
          {
            name: "Veggie Breakfast Wrap",
            description: "Egg, roasted peppers, spinach, salsa verde.",
            price: 9.25,
            dietaryTags: ["VG"],
            isSignature: false
          },
          {
            name: "Gluten-Free Oat Bowl",
            description: "Warm oats, maple, berries, toasted seeds.",
            price: 8.0,
            dietaryTags: ["GF", "VG"],
            isSignature: false
          }
        ]
      },
      {
        id: "bakery",
        label: "Pastries",
        description: "Fresh-baked daily (limited quantity).",
        items: [
          {
            name: "Almond Croissant",
            description: "Buttery layers, toasted almonds, light glaze.",
            price: 5.25,
            dietaryTags: ["V"],
            isSignature: true
          },
          {
            name: "Blueberry Muffin",
            description: "Bursting berries with a crisp top.",
            price: 4.75,
            dietaryTags: ["V"],
            isSignature: false
          },
          {
            name: "Gluten-Free Brownie",
            description: "Fudgy, rich cocoa with flaky sea salt.",
            price: 4.95,
            dietaryTags: ["GF", "V"],
            isSignature: true
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

