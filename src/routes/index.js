const express = require('express');
const router = express.Router();

const categoryRoutes = require('../categories/category.routes');
const clientRoutes = require('../clients/client.routes');
const productRoutes = require('../products/product.routes');
const ticketRoutes = require('../tickets/ticket.routes');
const priceRoutes = require('../prices/price.routes');
router.use('/categories', categoryRoutes);
router.use('/clients', clientRoutes);
router.use('/products', productRoutes);
router.use('/tickets', ticketRoutes);
router.use('/prices', priceRoutes);


module.exports = router;
