const express = require('express');
const router = express.Router();
const ticketController = require('./ticket.controller');

router.post('/', ticketController.createTicket);
router.get('/', ticketController.getAllTickets);
router.get('/cliente/:cliente_id', ticketController.getTicketsByClient);

module.exports = router;
