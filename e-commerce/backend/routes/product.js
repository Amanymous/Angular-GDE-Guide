const express = require("express");
const router = express.Router();
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
} = require("./../handlers/product");

router.get("/", async (req, res) => {
  let result = await getAllProducts();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  let id = req.params["id"];
  let result = await getProduct(id);
  res.send(result);
});

router.post("/", async (req, res) => {
  let result = await addProduct(req.body);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  let model = req.body;
  let id = req.params["id"];
  await updateProduct(id, model);
  res.send({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  let id = req.params["id"];
  await deleteProduct(id);
  res.send({ message: "Deleted" });
});

module.exports = router;
