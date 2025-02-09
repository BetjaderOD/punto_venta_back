const express = require('express');
const router = express.Router();
const preciosController = require('./precios.controller');

router.get('/:cliente_id/:producto_id', preciosController.getLastPrice);

module.exports = router;
