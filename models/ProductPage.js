//server\models\ProductPage.js

const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  title: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String },
  features: [{ type: String }], // Array of strings for bullet points
  image: { type: String }
});

const groupSchema = mongoose.Schema({
  groupTitle: { type: String, required: true }, // e.g., "Shuttle Badminton Posts"
  items: [itemSchema]
});

const productPageSchema = mongoose.Schema({
  slug: { type: String, required: true, unique: true }, // e.g., "sports-equipments"
  pageTitle: { type: String, required: true },
  groups: [groupSchema]
});

module.exports = mongoose.model('ProductPage', productPageSchema);