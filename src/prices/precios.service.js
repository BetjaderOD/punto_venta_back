const PreciosClientes = require('./precios.model');

const getLastPrice = async (cliente_id, producto_id) => {
  return await PreciosClientes.getLastPrice(cliente_id, producto_id);
};

module.exports = {
  getLastPrice
};
