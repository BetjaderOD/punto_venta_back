const Ticket = require('./ticket.model');

const createTicket = async (cliente_id, productos) => {
  let total = 0;

  for (const producto of productos) {
    total += producto.cantidad * producto.precio_unitario;
  }

  const ticket_id = await Ticket.create(cliente_id, total);

  for (const producto of productos) {
    await Ticket.addTicketDetail(ticket_id, producto.producto_id, producto.cantidad, producto.precio_unitario);
    if (cliente_id) {
      await Ticket.saveClientPrice(cliente_id, producto.producto_id, producto.precio_unitario);
    }
  }

  return ticket_id;
};

const getAllTickets = async () => {
  return await Ticket.getAll();
};

const getTicketsByClient = async (cliente_id) => {
  return await Ticket.getByClient(cliente_id);
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketsByClient
};
