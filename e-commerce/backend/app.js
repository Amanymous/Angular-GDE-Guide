const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");
const { verifyToken, isAdmin } = require("./middleware/auth");

// ✅ Parse JSON before hitting routes
app.use(cors());
app.use(express.json());

// ✅ Basic health check route
app.get("/", (req, res) => {
  res.send("✅ Server is running");
});

// ✅ Mount category routes
// Example: POST http://localhost:3000/category
app.use("/category", verifyToken, isAdmin, categoryRoutes);
app.use("/brand", verifyToken, isAdmin, brandRoutes);
app.use("/order", verifyToken, isAdmin, orderRoutes);
app.use("/product", verifyToken, isAdmin, productRoutes);
app.use("/customer", verifyToken, customerRoutes);
app.use("/auth", authRoutes);

// ✅ MongoDB connection
async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comStore-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Exit if DB connection fails
  }
}

connectDb();

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
