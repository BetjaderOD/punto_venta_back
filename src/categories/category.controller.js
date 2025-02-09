const categoryService = require('./category.service');

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: 'El nombre es obligatorio' });

    const id = await categoryService.createCategory(nombre);
    res.status(201).json({ message: 'Categoría creada exitosamente', id, nombre });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: 'El nombre es obligatorio' });

    await categoryService.updateCategory(id, nombre);
    res.json({ message: 'Categoría actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const setStatusCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    if (estado !== 0 && estado !== 1) return res.status(400).json({ error: 'El estado debe ser 0 o 1' });

    await categoryService.setStatusCategory(id, estado);
    res.json({ message: `Categoría ${estado === 1 ? 'activada' : 'desactivada'} correctamente` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllWithInactive = async (req, res) => {
  try {
    const categories = await categoryService.getAllWithInactive();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getById(id);
    if (!category) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  setStatusCategory,
  getAllWithInactive,
  getCategoryById
};router.get('/all', categoryController.getAllWithInactive);
router.get('/:id', categoryController.getCategoryById);

module.exports = router;