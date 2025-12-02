const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  shortDescription: String,
  description: String,
  price: Number, // use lowercase 'price' for consistency
  discount: Number,
  images: Array(String), // ✅ correct way to define an array of strings
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brands",
  },
  isFeatured: Boolean,
  isNew: Boolean,
});
const Product = mongoose.model("products", productSchema); // ✅ use singular model name
module.exports = Product;
