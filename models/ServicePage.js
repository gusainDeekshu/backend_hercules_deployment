const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  title: { type: String, required: true },
  model: { type: String },
  description: { type: String },
  features: [{ type: String }],
  image: { type: String }
});

const groupSchema = mongoose.Schema({
  groupTitle: { type: String, required: true }, 
  items: [itemSchema]
});

const servicePageSchema = mongoose.Schema({
  slug: { type: String, required: true, unique: true }, // e.g., "maintenance-works"
  pageTitle: { type: String, required: true },
  groups: [groupSchema]
});

module.exports = mongoose.model('ServicePage', servicePageSchema);