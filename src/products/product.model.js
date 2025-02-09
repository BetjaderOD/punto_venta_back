const db = require('../config/db');

class Product {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM productos');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(nombre, stock, categoria_id) {
    const [result] = await db.query(
      'INSERT INTO productos (nombre, stock, categoria_id) VALUES (?, ?, ?)',
      [nombre, stock, categoria_id]
    );
    return result.insertId;
  }

  static async update(id, nombre, stock, categoria_id) {
    await db.query(
      'UPDATE productos SET nombre = ?, stock = ?, categoria_id = ? WHERE id = ?',
      [nombre, stock, categoria_id, id]
    );
  }

  static async delete(id) {
    await db.query('DELETE FROM productos WHERE id = ?', [id]);
  }

  static async setStatus(id, estado) {
    await db.query('UPDATE productos SET estado = ? WHERE id = ?', [estado, id]);
  }
  static async getActive() {
    const [rows] = await db.query('SELECT * FROM productos WHERE estado = 1');
    return rows;
  }
}

module.exports = Product;