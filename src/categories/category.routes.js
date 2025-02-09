const express = require('express');
const router = express.Router();
const categoryController = require('./category.controller');

router.get('/', categoryController.getCategories);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.patch('/:id/estado', categoryController.setStatusCategory);
router.get('/all', categoryController.getAllWithInactive);
router.get('/:id', categoryController.getCategoryById);

module.exports = router;