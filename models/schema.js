const mongoose = require("mongoose");

const products = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  imgUrls: { type: String },
  customerRevs: { type: Number },
  stars: { type: Number },
  available: { type: String },
  sku: { type: String },
  category: { type: String },
  company: { type: String },
  colors: { type: String },
  price: { type: Number },
  freeShipping: { type: Number },
});

const product = mongoose.model("products", products);

var my_schemas = {
  product: product,
};

module.exports = my_schemas;
