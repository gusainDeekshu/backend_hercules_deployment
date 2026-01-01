const express = require('express');
const router = express.Router();
const { 
  getCategories, 
  getProductsBySlug, 
  getServiceBySlug ,
  getProjects
} = require('../controllers/productController');

router.get('/categories', getCategories);
router.get('/products/:slug', getProductsBySlug);
router.get('/services/:slug', getServiceBySlug); // <--- New Route
router.get('/projects', getProjects); // <--- New Route
module.exports = router;