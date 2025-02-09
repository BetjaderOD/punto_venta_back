const Client = require('./client.model');

// Obtener todos los clientes
const getClients = async () => {
  return await Client.getAll(); // Devuelve todos los clientes.
};

// Crear un nuevo cliente
const createClient = async (nombre) => {
  return await Client.create(nombre); // Llama al método 'create' del modelo.
};

// Actualizar un cliente
const updateClient = async (id, nombre) => {
  return await Client.update(id, nombre); // Llama al método 'update' del modelo.
};

const getActiveClients = async () => {
  return await Client.getActive();
};

const getClientById = async (id) => {
  return await Client.getById(id);
};

module.exports = {
  getClients,
  createClient,
  updateClient,
  getActiveClients,
  getClientById
};