const db = require('../config/db');

class Ticket {
  static async create(cliente_id, total) {
    const [result] = await db.query(
      'INSERT INTO tickets (cliente_id, total) VALUES (?, ?)',
      [cliente_id, total]
    );
    return result.insertId;
  }

  static async addTicketDetail(ticket_id, producto_id, cantidad, precio_unitario) {
    const precio_total = cantidad * precio_unitario;
    await db.query(
      'INSERT INTO ticket_detalles (ticket_id, producto_id, cantidad, precio_unitario, precio_total) VALUES (?, ?, ?, ?, ?)',
      [ticket_id, producto_id, cantidad, precio_unitario, precio_total]
    );
  }

  static async saveClientPrice(cliente_id, producto_id, precio) {
    await db.query(
      'INSERT INTO precios_clientes (cliente_id, producto_id, precio) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE precio = VALUES(precio)',
      [cliente_id, producto_id, precio]
    );
  }

  static async getAll() {
    const [rows] = await db.query(`
      SELECT 
        t.fecha, t.total,
        c.nombre AS cliente,
        td.producto_id, p.nombre AS producto, td.cantidad, td.precio_unitario, td.precio_total
      FROM tickets t
      LEFT JOIN clientes c ON t.cliente_id = c.id
      JOIN ticket_detalles td ON t.id = td.ticket_id
      JOIN productos p ON td.producto_id = p.id
    `);
    return rows;
  }

  static async getByClient(cliente_id) {
    const [rows] = await db.query(`
      SELECT 
        t.fecha, t.total,
        c.nombre AS cliente,
        td.producto_id, p.nombre AS producto, td.cantidad, td.precio_unitario, td.precio_total
      FROM tickets t
      JOIN clientes c ON t.cliente_id = c.id
      JOIN ticket_detalles td ON t.id = td.ticket_id
      JOIN productos p ON td.producto_id = p.id
      WHERE t.cliente_id = ?
    `, [cliente_id]);
    return rows;
  }
}

module.exports = Ticket;
