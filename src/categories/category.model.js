const db = require('../config/db');

class Category {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM categorias WHERE estado = 1');
    return rows;
  }

  static async create(nombre) {
    const [result] = await db.query('INSERT INTO categorias (nombre, estado) VALUES (?, 1)', [nombre]);
    return result.insertId;
  }

  static async update(id, nombre) {
    await db.query('UPDATE categorias SET nombre = ? WHERE id = ?', [nombre, id]);
  }

  static async setStatus(id, estado) {
    await db.query('UPDATE categorias SET estado = ? WHERE id = ?', [estado, id]);
  }

  static async getAllWithInactive() {
    const [rows] = await db.query('SELECT * FROM categorias');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
    return rows[0];
  }

}

module.exports = Category;
