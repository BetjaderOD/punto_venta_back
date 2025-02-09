const ticketService = require('./ticket.service');

const createTicket = async (req, res) => {
  try {
    const { cliente_id, productos } = req.body;

    if (!productos || productos.length === 0) {
      return res.status(400).json({ error: 'Se requieren productos para generar el ticket' });
    }

    const ticket_id = await ticketService.createTicket(cliente_id, productos);
    res.status(201).json({ message: 'Ticket generado exitosamente', ticket_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const tickets = await ticketService.getAllTickets();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTicketsByClient = async (req, res) => {
  try {
    const { cliente_id } = req.params;
    const tickets = await ticketService.getTicketsByClient(cliente_id);
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketsByClient
};
