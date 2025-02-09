const Product = require('./product.model');

const getProducts = async () => {
  return await Product.getAll();
};

const getProductById = async (id) => {
  return await Product.getById(id);
};

const createProduct = async (nombre, stock, categoria_id) => {
  return await Product.create(nombre, stock, categoria_id);
};

const updateProduct = async (id, nombre, stock, categoria_id) => {
  return await Product.update(id, nombre, stock, categoria_id);
};

const deleteProduct = async (id) => {
  return await Product.delete(id);
};

const setStatusProduct = async (id, estado) => {
  return await Product.setStatus(id, estado);
};

const getActiveProducts = async () => {
  return await Product.getActive();
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  setStatusProduct,
  getActiveProducts
};