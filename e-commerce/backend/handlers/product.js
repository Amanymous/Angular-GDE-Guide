const Product = require("./../db/product");

async function addProduct(model) {
  try {
    const product = new Product({
      ...model,
    });

    const savedProduct = await product.save();
    console.log("savedProduct===", savedProduct);

    return savedProduct.toObject();
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Failed to add product");
  }
}

async function updateProduct(id, model) {
  await Product.findByIdAndUpdate(id, model);
}

async function deleteProduct(id) {
  await Product.findByIdAndDelete(id);
}

async function getAllProducts() {
  let products = await Product.find();
  return products.map((x) => x.toObject());
}

async function getProduct(id) {
  let product = await Product.findById(id);
  return product.toObject();
}

async function getNewProducts() {
  let newProducts = await Product.find({
    isNew: true,
  });
  return newProducts.map((x) => x.toObject());
}

async function getFeaturedProducts() {
  let newProducts = await Product.find({
    isFeatured: true,
  });
  return newProducts.map((x) => x.toObject());
}

async function getProductForListing(
  searchValue,
  categoryId,
  brandId,
  page,
  pageSize,
  sortBy,
  sortOrder
) {
  if (!sortBy) sortBy = "price";
  if (!sortOrder) sortOrder = -1;

  const queryFilter = {};

  // Search filter
  if (searchValue) {
    queryFilter.$or = [
      { name: { $regex: searchValue, $options: "i" } },
      { shortDescription: { $regex: searchValue, $options: "i" } },
    ];
  }

  if (categoryId) queryFilter.categoryId = categoryId;
  if (brandId) queryFilter.brandId = brandId;

  console.log("queryFilter=", queryFilter);

  let query = Product.find(queryFilter).sort({ [sortBy]: Number(sortOrder) });

  // 🚀 Apply pagination ONLY IF page + pageSize are provided
  if (page && pageSize) {
    query = query
      .skip((Number(page) - 1) * Number(pageSize))
      .limit(Number(pageSize));
  }

  const products = await query.exec();

  return products.map((p) => p.toObject());
}

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  getNewProducts,
  getFeaturedProducts,
  getProductForListing,
};
