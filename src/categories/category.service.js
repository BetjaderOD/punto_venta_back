const Category = require('./category.model');

const getCategories = async () => {
  return await Category.getAll();
};

const createCategory = async (name) => {
  return await Category.create(name);
};

const updateCategory = async (id, name) => {
  return await Category.update(id, name);
};

const setStatusCategory = async (id, estado) => {
  return await Category.setStatus(id, estado);
};
const getAllWithInactive = async () => {
  return await Category.getAllWithInactive();
};

const getById = async (id) => {
  return await Category.getById(id);
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  setStatusCategory,
  getAllWithInactive,
  getById
};
