const db = require('../config/db');

class PreciosClientes {
  static async getLastPrice(cliente_id, producto_id) {
    const [rows] = await db.query(
      `SELECT td.precio_unitario 
       FROM ticket_detalles td
       JOIN tickets t ON td.ticket_id = t.id
       WHERE t.cliente_id = ? AND td.producto_id = ?
       ORDER BY t.fecha DESC
       LIMIT 1`,
      [cliente_id, producto_id]
    );

    return rows.length > 0 ? rows[0].precio_unitario : null;
  }
}

module.exports = PreciosClientes;
