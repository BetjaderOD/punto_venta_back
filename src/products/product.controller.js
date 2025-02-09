const productService = require('./product.service');

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nombre, stock, categoria_id } = req.body;
    if (!nombre || stock === undefined || categoria_id === undefined) {
      return res.status(400).json({ error: 'Nombre, stock y categoría son obligatorios' });
    }

    const id = await productService.createProduct(nombre, stock, categoria_id);
    res.status(201).json({ message: 'Producto creado exitosamente', id, nombre });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, stock, categoria_id } = req.body;
    if (!nombre || stock === undefined || categoria_id === undefined) {
      return res.status(400).json({ error: 'Nombre, stock y categoría son obligatorios' });
    }

    await productService.updateProduct(id, nombre, stock, categoria_id);
    res.json({ message: 'Producto actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const setStatusProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    if (estado === undefined) {
      return res.status(400).json({ error: 'Estado es obligatorio' });
    }

    await productService.setStatusProduct(id, estado);
    res.json({ message: `Producto ${estado ? 'activado' : 'desactivado'} exitosamente` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getActiveProducts = async (req, res) => {
  try {
    const products = await productService.getActiveProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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