const database = {
  // --- 1. CATEGORIES (For Home Page Cards) ---
  categories: [
    // PRODUCT CATEGORIES
    {
      id: "cat_1",
      title: "BASKETBALL EQUIPMENT",
      slug: "basketball-equipment",
      description: "Professional-grade basketball systems.",
      image: "/images/cats/basketball.jpg",
      type: "product"
    },
    {
      id: "cat_2",
      title: "SPORTS EQUIPMENTS",
      slug: "sports-equipments",
      description: "Professional-grade sports equipment.",
      image: "/images/cats/sports-eq.jpg",
      type: "product"
    },
    {
      id: "cat_3",
      title: "FITNESS EQUIPMENTS",
      slug: "fitness-equipments",
      description: "Heavy-duty strength training machines.",
      image: "/images/cats/fitness.jpg",
      type: "product"
    },
    {
      id: "cat_4",
      title: "GROUNDS - INDOOR",
      slug: "grounds-indoor",
      description: "Premium wooden and synthetic flooring.",
      image: "/images/cats/indoor.jpg",
      type: "product"
    },
    {
      id: "cat_5",
      title: "GROUNDS - OUTDOOR",
      slug: "grounds-outdoor",
      description: "All-weather synthetic courts.",
      image: "/images/cats/outdoor.jpg",
      type: "product"
    },
    {
      id: "cat_6",
      title: "FOOTBALL GROUNDS",
      slug: "football-grounds",
      description: "Standard FIFA size aluminum goal posts.",
      image: "/images/cats/football.jpg",
      type: "product"
    },

    // SERVICE CATEGORIES
    {
      id: "serv_1",
      title: "LIGHTING & SEATING SOLUTIONS",
      slug: "lighting-seating-solutions",
      description: "High-mast lighting and stadium seating.",
      image: "/images/serv-lighting.jpg",
      type: "service"
    },
    {
      id: "serv_2",
      title: "MAINTENANCE WORKS",
      slug: "maintenance-works",
      description: "Annual maintenance for sports infrastructure.",
      image: "/images/serv-maint.jpg",
      type: "service"
    }
  ],

  // --- 2. PRODUCT DETAILS (Fetched via /api/products/:slug) ---
  products: {
    
    // 1. BASKETBALL EQUIPMENT
    "basketball-equipment": {
      pageTitle: "BASKETBALL EQUIPMENT",
      groups: [
        {
          groupTitle: "Hydraulic Systems",
          items: [
            {
              title: "FIBA LEVEL 1 HYDRAULIC BASKETBALL SYSTEM",
              model: "HS BB 01",
              description: "Professional hydraulic portable basketball stop with 3.25m projection.",
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

    // 2. SPORTS EQUIPMENTS
    "sports-equipments": {
      pageTitle: "SPORTS EQUIPMENTS",
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

    // 3. FITNESS EQUIPMENTS
    "fitness-equipments": {
      pageTitle: "FITNESS & GYM EQUIPMENT",
      groups: [
        {
          groupTitle: "Cardio Series",
          items: [
            {
              title: "COMMERCIAL AC MOTOR TREADMILL",
              model: "HS CARDIO 01",
              description: "Heavy duty 7HP treadmill with LED display and auto-incline.",
              image: "/images/products/treadmill.jpg"
            },
            {
              title: "ELLIPTICAL CROSS TRAINER",
              model: "HS CARDIO 02",
              description: "Self-generating elliptical with 20 resistance levels.",
              image: "/images/products/elliptical.jpg"
            }
          ]
        },
        {
          groupTitle: "Strength Series",
          items: [
            {
              title: "MULTI-GYM 4 STATION",
              model: "HS STR 04",
              description: "Compact 4-station gym for full body workout.",
              image: "/images/products/multigym.jpg"
            },
            {
              title: "OLYMPIC FLAT BENCH",
              model: "HS BENCH 01",
              description: "Heavy gauge steel bench with spotter platform.",
              image: "/images/products/bench.jpg"
            }
          ]
        }
      ]
    },

    // 4. GROUNDS - INDOOR
    "grounds-indoor": {
      pageTitle: "INDOOR FLOORING SOLUTIONS",
      groups: [
        {
          groupTitle: "Wooden Flooring",
          items: [
            {
              title: "TEAK WOOD SPORTS FLOORING",
              model: "HS WOOD 01",
              description: "BWF certified Grade-A Teak wood system with air-cushion rubber pads.",
              image: "/images/products/wood-floor.jpg"
            },
            {
              title: "MAPLE WOOD FLOORING",
              model: "HS WOOD 02",
              description: "North American Maple surface for elite basketball arenas.",
              image: "/images/products/maple-floor.jpg"
            }
          ]
        },
        {
          groupTitle: "Synthetic Flooring",
          items: [
            {
              title: "PVC VINYL FLOORING (4.5MM - 8MM)",
              model: "HS PVC 01",
              description: "Multi-layer PVC sports flooring approved by BWF and ITTF.",
              image: "/images/products/pvc-floor.jpg"
            },
            {
              title: "PU INDOOR FLOORING",
              model: "HS PU 01",
              description: "Seamless polyurethane flooring with high shock absorption.",
              image: "/images/products/pu-floor.jpg"
            }
          ]
        }
      ]
    },

    // 5. GROUNDS - OUTDOOR
    "grounds-outdoor": {
      pageTitle: "OUTDOOR COURT SURFACES",
      groups: [
        {
          groupTitle: "Synthetic Acrylic",
          items: [
            {
              title: "8-LAYER ACRYLIC SYNTHETIC COURT",
              model: "HS ACRYLIC 08",
              description: "ITF certified cushioned acrylic surface for Tennis and Basketball.",
              image: "/images/products/acrylic-court.jpg"
            },
            {
              title: "5-LAYER HARD COURT SYSTEM",
              model: "HS ACRYLIC 05",
              description: "Economical hard court solution for schools and parks.",
              image: "/images/products/hard-court.jpg"
            }
          ]
        },
        {
          groupTitle: "Modular Tiles",
          items: [
            {
              title: "INTERLOCKING PP TILES",
              model: "HS PP 01",
              description: "All-weather polypropylene tiles with self-draining design.",
              image: "/images/products/pp-tiles.jpg"
            }
          ]
        }
      ]
    },

    // 6. FOOTBALL GROUNDS
    "football-grounds": {
      pageTitle: "FOOTBALL TURF & INFRASTRUCTURE",
      groups: [
        {
          groupTitle: "Artificial Turf",
          items: [
            {
              title: "FIFA QUALITY PRO TURF (60MM)",
              model: "HS TURF 60",
              description: "Monofilament artificial grass with SBR and silica sand infill.",
              image: "/images/products/turf.jpg"
            },
            {
              title: "LANDSCAPING TURF (35MM)",
              model: "HS TURF 35",
              description: "High density turf for multi-sport areas and landscaping.",
              image: "/images/products/turf-35.jpg"
            }
          ]
        },
        {
          groupTitle: "Goal Posts",
          items: [
            {
              title: "PROFESSIONAL ALUMINUM GOAL POST",
              model: "HS FOOT 01",
              description: "Standard FIFA size (7.32m x 2.44m) aluminum goal post.",
              image: "/images/products/foot01.jpg"
            },
            {
              title: "STEEL FOOTBALL GOAL POST",
              model: "HS FOOT 02",
              description: "Heavy duty steel goal post for training grounds.",
              image: "/images/products/foot02.jpg"
            }
          ]
        }
      ]
    }
  },

  // --- 3. SERVICE DETAILS (Fetched via /api/services/:slug) ---
  services: {
    "lighting-seating-solutions": {
      pageTitle: "LIGHTING & SEATING SOLUTIONS",
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
// --- 4. PROJECTS (New Section) ---
  projects: [
    {
      title: "Hercules project pics - FIBA Women's Asia Cup",
      image: "/images/projects/fiba-women.jpg"
    },
    {
      title: "Hercules Indoor basketball court project - Lakshyan Academy",
      image: "/images/projects/indoor-court-1.jpg"
    },
    {
      title: "Hercules Basketball Court - Lakshyan Sports Academy",
      image: "/images/projects/indoor-court-2.jpg"
    },
    {
      title: "Hercules Basketball Court - FIBA International Championship",
      image: "/images/projects/fiba-champ.jpg"
    },
    {
      title: "Hercules Basketball Court - Lakshyan Sports Academy",
      image: "/images/projects/outdoor-hoop.jpg"
    },
    {
      title: "Hercules Project Pics - FIBA Women's Asia Cup",
      image: "/images/projects/outdoor-court-green.jpg"
    },
    {
      title: "Hercules Project Pics - Outdoor Basketball Court Indian Gymkhana",
      image: "/images/projects/outdoor-structure.jpg"
    },
    {
      title: "Hercules Project Pics - Outdoor Basketball Court Indian Gymkhana",
      image: "/images/projects/outdoor-aerial.jpg"
    },
    {
      title: "Hercules Shuttle Badminton Court - Center for Sports",
      image: "/images/projects/badminton-green.jpg"
    },
    {
      title: "Hercules Shuttle Badminton Court - Center for Sports",
      image: "/images/projects/badminton-red.jpg"
    },
    {
      title: "Hercules Indoor Foldable Basketball Equip | NBA Globetrotters 2005",
      image: "/images/projects/globetrotters.jpg"
    }
  ]
};

module.exports = database;