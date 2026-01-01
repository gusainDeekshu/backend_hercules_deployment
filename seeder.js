require('dotenv').config();
const mongoose = require('mongoose');

// 1. IMPORT MODELS
const Category = require('./models/Category');
const ProductPage = require('./models/ProductPage');
const ServicePage = require('./models/ServicePage');
const Project = require('./models/Project');
const Admin = require('./models/Admin'); // <--- 1. NEW IMPORT

// 2. IMPORT DATA
const db = require('./data/db'); 

// 3. PREPARE DATA ARRAYS
const productPagesArray = Object.keys(db.products).map((slug) => {
  const pageData = db.products[slug];
  return {
    slug: slug,
    pageTitle: pageData.pageTitle,
    groups: pageData.groups
  };
});

const servicePagesArray = Object.keys(db.services).map((slug) => {
  const pageData = db.services[slug];
  return {
    slug: slug,
    pageTitle: pageData.pageTitle,
    groups: pageData.groups
  };
});

const importData = async () => {
  try {
    // Connect to DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // --- CLEAR OLD DATA ---
    await Category.deleteMany();
    await ProductPage.deleteMany();
    await ServicePage.deleteMany();
    await Project.deleteMany();
    await Admin.deleteMany(); // <--- 2. Clear old admins (Optional, be careful in production!)
    
    console.log('🗑️  Old data cleared');

    // --- INSERT NEW DATA ---
    
    // 1. Categories
    await Category.insertMany(db.categories);
    console.log('📦 Categories Imported');

    // 2. Products
    await ProductPage.insertMany(productPagesArray);
    console.log('Mz Product Pages Imported');

    // 3. Services
    await ServicePage.insertMany(servicePagesArray);
    console.log('🛠️  Service Pages Imported');

    // 4. Projects
    await Project.insertMany(db.projects);
    console.log('📸 Projects Imported');

    // 5. Admin User (HASHING HAPPENS AUTOMATICALLY VIA MODEL)
    await Admin.create({
        username: 'admin',
        password: 'password123' 
    });
    console.log('👤 Admin User Created: admin / password123');

    console.log('🎉 Database Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

importData();