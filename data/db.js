// database.js - Mock data aligned with your new backend models & API
const database = {
  // --- 1. FEATURED / HOME PAGE CATEGORIES (used by /api/home-sections) ---
  // These simulate what ProductPage & ServicePage documents look like in MongoDB
  productPages: [
    // Product Categories (ProductPage model)
    {
      _id: "695657ac9972d59020947b4f",
      title: "BASKETBALL EQUIPMENT",
      slug: "basketball-equipment",
      shortDescription: "Professional-grade basketball systems and hoops for indoor/outdoor use.",
      image: "/images/cats/basketball.jpg",
      isFeatured: true,
      createdAt: new Date("2025-01-01")
    },
    {
      _id: "695657ac9972d59020947b57",
      title: "SPORTS EQUIPMENTS",
      slug: "sports-equipments",
      shortDescription: "Badminton, volleyball, and multi-sport equipment for all levels.",
      image: "/images/cats/sports-eq.jpg",
      isFeatured: true,
      createdAt: new Date("2025-01-02")
    },
    {
      _id: "695657ac9972d59020947b5e",
      title: "FITNESS EQUIPMENTS",
      slug: "fitness-equipments",
      shortDescription: "Commercial-grade cardio and strength training machines.",
      image: "/images/cats/fitness.jpg",
      isFeatured: true,
      createdAt: new Date("2025-01-03")
    },
    {
      _id: "695657ac9972d59020947b65",
      title: "GROUNDS - INDOOR",
      slug: "grounds-indoor",
      shortDescription: "Premium wooden and synthetic indoor sports flooring solutions.",
      image: "/images/cats/indoor.jpg",
      isFeatured: true,
      createdAt: new Date("2025-01-04")
    },
    {
      _id: "695657ac9972d59020947b6c",
      title: "GROUNDS - OUTDOOR",
      slug: "grounds-outdoor",
      shortDescription: "All-weather acrylic and modular outdoor court surfaces.",
      image: "/images/cats/outdoor.jpg",
      isFeatured: true,
      createdAt: new Date("2025-01-05")
    },
    {
      _id: "695657ac9972d59020947b72",
      title: "FOOTBALL GROUNDS",
      slug: "football-grounds",
      shortDescription: "FIFA-certified artificial turf and professional goal posts.",
      image: "/images/cats/football.jpg",
      isFeatured: true,
      createdAt: new Date("2025-01-06")
    }
  ],

  servicePages: [
    // Service Categories (ServicePage model)
    {
      _id: "695657ac9972d59020947b7a",
      pageTitle: "LIGHTING & SEATING SOLUTIONS",
      slug: "lighting-seating-solutions",
      shortDescription: "Stadium floodlights, high-mast lighting, and premium spectator seating.",
      image: "/images/serv-lighting.jpg",
      isFeatured: true,
      createdAt: new Date("2025-01-07")
    },
    {
      _id: "695657ac9972d59020947b81",
      pageTitle: "MAINTENANCE WORKS",
      slug: "maintenance-works",
      shortDescription: "Annual maintenance, repairs, and refurbishment for sports facilities.",
      image: "/images/serv-maint.jpg",
      isFeatured: true,
      createdAt: new Date("2025-01-08")
    }
  ],

  // --- 2. FULL PRODUCT PAGE DETAILS (used by /api/content/products/:slug) ---
  productDetails: {
    "basketball-equipment": {
      pageTitle: "BASKETBALL EQUIPMENT",
      heroImage: "/images/cats/basketball.jpg",
      intro: "World-class basketball systems trusted by FIBA and national academies.",
      groups: [
        {
          groupTitle: "Hydraulic Systems",
          items: [
            {
              title: "FIBA LEVEL 1 HYDRAULIC BASKETBALL SYSTEM",
              model: "HS BB 01",
              description: "Professional hydraulic portable basketball stand with 3.25m projection.",
              image: "/images/products/bb01.jpg"
            }
          ]
        },
        {
          groupTitle: "Wall Mounted Systems",
          items: [
            {
              title: "SIDE FOLD WALL MOUNTED SYSTEM",
              model: "HS BB WALL 01",
              description: "Space-saving side fold basketball system for multi-purpose halls.",
              image: "/images/products/bb-wall.jpg"
            }
          ]
        },
        {
          groupTitle: "Outdoor Systems",
          items: [
            {
              title: "OUTDOOR MOVABLE BASKETBALL POST",
              model: "HS 1500",
              description: "Heavy duty structure with weather-resistant coating.",
              image: "/images/product-basketball-1.jpg"
            },
            {
              title: "FIXED BASKETBALL POLE",
              model: "HS 1502",
              description: "Standard fixed pole system for parks and schools.",
              image: "/images/product-basketball-3.jpg"
            }
          ]
        }
      ]
    },

    "sports-equipments": {
      pageTitle: "SPORTS EQUIPMENTS",
      heroImage: "/images/cats/sports-eq.jpg",
      intro: "Complete range of competition-grade equipment for multiple sports.",
      groups: [
        {
          groupTitle: "Shuttle Badminton Posts",
          items: [
            {
              title: "PROFESSIONAL MOVABLE BADMINTON POSTS",
              model: "HS BADM 01",
              description: "Professional movable badminton posts with heavy base weights for stability.",
              image: "/images/products/badm01.jpg"
            },
            {
              title: "SLEEVE TYPE BADMINTON POSTS",
              model: "HS BADM 02",
              description: "Standard sleeve type posts for indoor/outdoor courts.",
              image: "/images/products/badm02.jpg"
            }
          ]
        },
        {
          groupTitle: "Volleyball Posts",
          items: [
            {
              title: "TELESCOPIC VOLLEYBALL POSTS",
              model: "HS VOLLEY 01",
              description: "Adjustable height aluminum posts with internal winch.",
              image: "/images/products/vol01.jpg"
            },
            {
              title: "FIXED VOLLEYBALL POSTS",
              model: "HS VOLLEY 02",
              description: "Heavy duty steel posts for outdoor usage.",
              image: "/images/products/vol02.jpg"
            }
          ]
        }
      ]
    },

    // ... (include all other product slugs similarly: fitness-equipments, grounds-indoor, etc.)
    // For brevity, add the rest as needed — structure is the same
  },

  // --- 3. FULL SERVICE PAGE DETAILS (used by /api/content/services/:slug) ---
  serviceDetails: {
    "lighting-seating-solutions": {
      pageTitle: "LIGHTING & SEATING SOLUTIONS",
      heroImage: "/images/serv-lighting.jpg",
      intro: "Professional stadium lighting and spectator seating systems.",
      groups: [
        {
          groupTitle: "High Mast Lighting",
          items: [
            {
              title: "LED STADIUM FLOOD LIGHTS",
              model: "HS LIGHT 01",
              description: "High-lumen LED floodlights designed for cricket and football stadiums.",
              image: "/images/services/lighting.jpg"
            },
            {
              title: "INDOOR ARENA LIGHTING",
              model: "HS LIGHT 02",
              description: "Anti-glare LED lights for indoor courts.",
              image: "/images/services/indoor-light.jpg"
            }
          ]
        },
        {
          groupTitle: "Stadium Seating",
          items: [
            {
              title: "VIP BUCKET SEATS",
              model: "HS SEAT 01",
              description: "Ergonomic bucket seats for VIP galleries and dugouts.",
              image: "/images/services/seat-vip.jpg"
            },
            {
              title: "TELESCOPIC BLEACHERS",
              model: "HS SEAT 02",
              description: "Retractable seating systems for multi-purpose halls.",
              image: "/images/services/bleachers.jpg"
            }
          ]
        }
      ]
    },

    "maintenance-works": {
      pageTitle: "MAINTENANCE & REPAIRS",
      heroImage: "/images/serv-maint.jpg",
      intro: "Expert maintenance services to extend the life of your sports infrastructure.",
      groups: [
        {
          groupTitle: "Court Maintenance",
          items: [
            {
              title: "WOODEN FLOORING REFURBISHMENT",
              model: "SERV-WOOD",
              description: "Complete sanding, polishing, and re-coating of indoor wooden courts.",
              image: "/images/services/wood-polish.jpg"
            },
            {
              title: "SYNTHETIC TURF MAINTENANCE",
              model: "SERV-TURF",
              description: "Deep cleaning, decompaction, and rubber granule refilling.",
              image: "/images/services/turf-clean.jpg"
            }
          ]
        },
        {
          groupTitle: "Equipment Repairs",
          items: [
            {
              title: "BASKETBALL SYSTEM SERVICE",
              model: "SERV-BB",
              description: "Hydraulic oil change and structural safety check.",
              image: "/images/services/bb-repair.jpg"
            }
          ]
        }
      ]
    }
  },

  // --- 4. PROJECTS (used by /api/content/projects) ---
  projects: [
    { title: "Hercules project pics - FIBA Women's Asia Cup", image: "/images/projects/fiba-women.jpg" },
    { title: "Hercules Indoor basketball court project - Lakshyan Academy", image: "/images/projects/indoor-court-1.jpg" },
    { title: "Hercules Basketball Court - Lakshyan Sports Academy", image: "/images/projects/indoor-court-2.jpg" },
    { title: "Hercules Basketball Court - FIBA International Championship", image: "/images/projects/fiba-champ.jpg" },
    { title: "Hercules Basketball Court - Lakshyan Sports Academy", image: "/images/projects/outdoor-hoop.jpg" },
    { title: "Hercules Project Pics - FIBA Women's Asia Cup", image: "/images/projects/outdoor-court-green.jpg" },
    { title: "Hercules Project Pics - Outdoor Basketball Court Indian Gymkhana", image: "/images/projects/outdoor-structure.jpg" },
    { title: "Hercules Project Pics - Outdoor Basketball Court Indian Gymkhana", image: "/images/projects/outdoor-aerial.jpg" },
    { title: "Hercules Shuttle Badminton Court - Center for Sports", image: "/images/projects/badminton-green.jpg" },
    { title: "Hercules Shuttle Badminton Court - Center for Sports", image: "/images/projects/badminton-red.jpg" },
    { title: "Hercules Indoor Foldable Basketball Equip | NBA Globetrotters 2005", image: "/images/projects/globetrotters.jpg" }
  ]
};

module.exports = database;