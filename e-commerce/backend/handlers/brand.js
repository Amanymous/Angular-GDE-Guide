const Brand = require("./../db/brand");

async function getBrands() {
  let brands = await Brand.find();
  return brands.map((x) => x.toObject());
}

async function getBrand(id) {
  let brand = await Brand.findById(id);
  return brand.toObject();
}

async function addBrand(model) {
  let brand = await new Brand({
    name: model.name,
  });
  brand.save();
  return brand.toObject();
}

async function updateBrand(id, model) {
  await Brand.findOneAndUpdate({ _id: id }, model);
  return;
}

async function deleteCategory(id) {
  await Brand.findByIdAndDelete({ _id: id });
}

module.exports = { getBrands, getBrand, addBrand, updateBrand, deleteCategory };
