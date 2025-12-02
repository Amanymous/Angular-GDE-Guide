const express = require("express");
const {
  getBrands,
  getBrand,
  addBrand,
  updateBrand,
  deleteCategory,
} = require("../handlers/brand");
const router = express.Router();

router.get("/", async (req, res) => {
  let result = await getBrands();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  let id = req.params["id"];
  let result = await getBrand(id);
  res.send(result);
});

router.post("/", async (req, res) => {
  let result = await addBrand(req.body);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  let model = req.body;
  let id = req.params["id"];
  await updateBrand(id, model);
  res.send({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  let id = req.params["id"];
  await deleteCategory(id);
  res.send({ message: "Deleted" });
});

module.exports = router;
