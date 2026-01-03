// seeder.js
require('dotenv').config();
const mongoose = require('mongoose');

// 1. IMPORT MODELS
const ProductPage = require('./models/ProductPage');
const ServicePage = require('./models/ServicePage');
const Project = require('./models/Project');
const Admin = require('./models/Admin');

// 2. IMPORT MOCK DATA
const db = require('./data/db'); // ← This is your updated database.js with productPages, servicePages, etc.

// 3. SEED FUNCTION
const importData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // --- CLEAR EXISTING DATA ---
    await ProductPage.deleteMany({});
    await ServicePage.deleteMany({});
    await Project.deleteMany({});
    await Admin.deleteMany({});
    console.log('Old data cleared');

    // --- INSERT PRODUCT PAGES (Categories + Full Details) ---
    // We insert the full detailed pages directly from productDetails
    const productInserts = Object.keys(db.productDetails).map((slug) => {
      const details = db.productDetails[slug];

      // Find matching category card from productPages array to get image, shortDescription, title
      const categoryMatch = db.productPages.find((cat) => cat.slug === slug);

      return {
        slug,
        title: categoryMatch?.title || details.pageTitle,
        shortDescription: categoryMatch?.shortDescription || "Premium sports infrastructure solution",
        image: categoryMatch?.image || details.heroImage || "/images/placeholder.jpg",
        isFeatured: true, // All current ones are featured
        pageTitle: details.pageTitle,
        heroImage: details.heroImage,
        intro: details.intro,
        groups: details.groups,
        createdAt: new Date(),
      };
    });

    await ProductPage.insertMany(productInserts);
    console.log(`Product Pages Imported (${productInserts.length})`);

    // --- INSERT SERVICE PAGES ---
    const serviceInserts = Object.keys(db.serviceDetails).map((slug) => {
      const details = db.serviceDetails[slug];
      const categoryMatch = db.servicePages.find((serv) => serv.slug === slug);

      return {
        slug,
        pageTitle: details.pageTitle,
        shortDescription: categoryMatch?.shortDescription || "Professional sports facility service",
        image: categoryMatch?.image || details.heroImage || "/images/placeholder.jpg",
        isFeatured: true,
        heroImage: details.heroImage,
        intro: details.intro,
        groups: details.groups,
        createdAt: new Date(),
      };
    });

    await ServicePage.insertMany(serviceInserts);
    console.log(`Service Pages Imported (${serviceInserts.length})`);

    // --- INSERT PROJECTS ---
    await Project.insertMany(db.projects);
    console.log(`Projects Imported (${db.projects.length})`);

    // --- CREATE ADMIN USER (password hashed automatically in model) ---
    await Admin.create({
      username: 'admin',
      password: 'password123', // Will be hashed via pre('save') middleware
    });
    console.log('Admin User Created → username: admin | password: password123');

    console.log('Database Seeded Successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Seeding Failed: ${error.message}`);
    process.exit(1);
  }
};

// Run the seeder
importData();