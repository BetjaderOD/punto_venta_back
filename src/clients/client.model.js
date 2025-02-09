const db = require('../config/db'); // Asegúrate de tener configurada tu conexión a la base de datos.

class Client {
  // Obtener todos los clientes
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM clientes');
    return rows;
  }

  // Crear un nuevo cliente
  static async create(nombre) {
    const [result] = await db.query('INSERT INTO clientes (nombre) VALUES (?)', [nombre]);
    return result.insertId; // Retorna el ID del cliente recién creado.
  }

  // Actualizar un cliente por su ID
  static async update(id, nombre) {
    await db.query('UPDATE clientes SET nombre = ? WHERE id = ?', [nombre, id]);
  }

  static async getActive() {
    const [rows] = await db.query('SELECT * FROM clientes WHERE estado = 1');
    return rows;
  }

  // Obtener un cliente por su ID
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM clientes WHERE id = ?', [id]);
    return rows[0];
  }
}

