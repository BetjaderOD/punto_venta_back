const preciosService = require('./precios.service');

const getLastPrice = async (req, res) => {
  try {
    const { cliente_id, producto_id } = req.params;

    if (!cliente_id || !producto_id) {
      return res.status(400).json({ error: 'Cliente ID y Producto ID son requeridos' });
    }

    const precio = await preciosService.getLastPrice(cliente_id, producto_id);

    if (precio !== null) {
      res.json({ cliente_id, producto_id, precio });
    } else {
      res.status(404).json({ error: 'No se encontró un precio para este cliente y producto' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getLastPrice
};
