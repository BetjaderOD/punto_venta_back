const express = require('express');
const router = express.Router();
const clientController = require('./client.controller');

// Definir rutas
router.get('/', clientController.getClients); // Obtener todos los clientes
router.post('/', clientController.createClient); // Crear un cliente
router.put('/:id', clientController.updateClient); // Actualizar cliente por ID
const getActiveClients = async (req, res) => {
  try {
    const clients = await clientService.getActiveClients();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientService.getClientById(id);
    if (!client) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getClients,
  createClient,
  updateClient,
  getActiveClients,
  getClientById
};