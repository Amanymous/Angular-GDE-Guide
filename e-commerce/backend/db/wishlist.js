const mongoose = require("mongoose");
const wishListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
});
const WishList = mongoose.model("wishLists", wishListSchema);
module.exports = WishList;
