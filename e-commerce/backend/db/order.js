const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  date: { type: Date, default: Date.now },
  items: [mongoose.Schema.Types.Mixed],
  paymentType: String,
  address: mongoose.Schema.Types.Mixed,
  status: { type: String, default: "In Progress" },
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
