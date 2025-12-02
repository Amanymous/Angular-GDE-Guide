const express = require("express");
const {
  getNewProducts,
  getFeaturedProducts,
  getProductForListing,
  getProduct,
} = require("../handlers/product");
const { getCategory } = require("../handlers/category");
const { getBrands } = require("../handlers/brand");
const {
  getWishlist,
  addToWishlist,
  reomveFromWishlist,
} = require("../handlers/wishlist");
const {
  removeFromCart,
  addToCart,
  getCart,
  clearCart,
} = require("../handlers/cart");
const { getCustomerOrders, addOrder } = require("../handlers/order");
const router = express.Router();

router.get("/new-products", async (req, res) => {
  const products = await getNewProducts();
  res.send(products);
});

router.get("/featured-products", async (req, res) => {
  const product = await getFeaturedProducts();
  res.send(product);
});

router.get("/categories", async (req, res) => {
  const categories = await getCategory();
  res.send(categories);
});

router.get("/brands", async (req, res) => {
  const brand = await getBrands();
  res.send(brand);
});

router.get("/products", async (req, res) => {
  const {
    searchValue,
    categoryId,
    brandId,
    sortBy,
    sortOrder,
    pageSize,
    page,
  } = req.query;
  const products = await getProductForListing(
    searchValue,
    categoryId,
    brandId,
    sortBy,
    sortOrder,
    pageSize,
    page
  );
  res.send(products);
});

router.get("/product/:id", async (req, res) => {
  const id = req.params["id"];
  const product = await getProduct(id);
  res.send(product);
});

router.get("/wishlist", async (req, res) => {
  console.log(req.user);
  const userId = req.user.id;
  const items = await getWishlist(userId);
  res.send(items);
});

router.post("/wishlist/:id", async (req, res) => {
  console.log(req.user);
  const userId = req.user.id;
  const productId = req.params.id;
  const item = await addToWishlist(userId, productId);
  res.send(item);
});

router.delete("/wishlist/:id", async (req, res) => {
  console.log(req.user);
  const userId = req.user.id;
  const productId = req.params.id;
  await reomveFromWishlist(userId, productId);
  res.send({ message: "Deleted" });
});

router.get("/cart", async (req, res) => {
  console.log(req.user);
  const userId = req.user.id;
  const items = await getCart(userId);
  res.send(items);
});

router.post("/cart/:id", async (req, res) => {
  console.log(req.user);
  const userId = req.user.id;
  const productId = req.params.id;
  const quantity = req.body.quantity;
  const item = await addToCart(userId, productId, quantity);
  res.send(item);
});

router.delete("/cart/:id", async (req, res) => {
  console.log(req.user);
  const userId = req.user.id;
  const productId = req.params.id;
  await removeFromCart(userId, productId);
  res.send({ message: "Deleted" });
});

router.get("/order", async (req, res) => {
  console.log(req.user);
  const userId = req.user.id;
  const orders = await getCustomerOrders(userId);
  res.send(orders);
});

router.post("/order", async (req, res) => {
  const userId = req.user.id;
  const order = req.body;
  await addOrder(userId, order);
  await clearCart(userId);
  return res.send({
    message: "Order Created!",
  });
});

module.exports = router;
