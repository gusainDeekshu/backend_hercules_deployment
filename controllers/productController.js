// server/controllers/productController.js
const asyncHandler = require('express-async-handler');
const Category = require('../models/Category');
const ProductPage = require('../models/ProductPage');
const ServicePage = require('../models/ServicePage'); // <--- 1. IMPORT NEW MODEL
const Project = require('../models/Project');

// @desc    Get all categories (For Home Page & Products Page)
// @route   GET /api/categories
const getCategories = asyncHandler(async (req, res) => {
  try {
    const { type } = req.query;
    let query = {};

    // If frontend asks for ?type=service, filter by it.
    if (type) {
      query.type = type;
    }

    const categories = await Category.find(query);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server Error fetching categories" });
  }
});

// @desc    Get detailed product page by slug
// @route   GET /api/products/:slug
const getProductsBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  
  try {
    const productPage = await ProductPage.findOne({ slug: slug });

    if (productPage) {
      res.status(200).json(productPage);
    } else {
      res.status(404).json({ 
        message: "Product page not found",
        slug: slug 
      });
    }
  } catch (error) {
    console.error("Error fetching product page:", error);
    res.status(500).json({ message: "Server Error fetching product details" });
  }
});

// @desc    Get detailed service page by slug (For "Services" Page)
// @route   GET /api/services/:slug
const getServiceBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  
  try {
    // 2. Query the ServicePage collection
    const servicePage = await ServicePage.findOne({ slug: slug });

    if (servicePage) {
      res.status(200).json(servicePage);
    } else {
      res.status(404).json({ 
        message: "Service page not found",
        slug: slug 
      });
    }
  } catch (error) {
    console.error("Error fetching service page:", error);
    res.status(500).json({ message: "Server Error fetching service details" });
  }
});

const getProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error fetching projects" });
  }
});

module.exports = {
  getCategories,
  getProductsBySlug,
  getServiceBySlug // <--- 3. EXPORT IT
  ,getProjects
};