// services/userService.js
const db = require('../db');

async function create({ name, email, phone, role }) {
  const sql = `INSERT INTO users (name, email, phone, role) VALUES (?, ?, ?, ?)`;
  const result = await db.runAsync(sql, [name, email, phone || null, role || null]);
  const id = result.lastID;
  const user = await findById(id);
  return user;
}

async function findAll() {
  const sql = `SELECT id, name, email, phone, role, created_at FROM users ORDER BY id DESC`;
  return db.allAsync(sql, []);
}

async function findById(id) {
  const sql = `SELECT id, name, email, phone, role, created_at FROM users WHERE id = ?`;
  return db.getAsync(sql, [id]);
}

async function update(id, { name, email, phone, role }) {
  // Update only provided fields
  const current = await findById(id);
  if (!current) return null;

  const updatedName = name ?? current.name;
  const updatedEmail = email ?? current.email;
  const updatedPhone = phone ?? current.phone;
  const updatedRole = role ?? current.role;

  const sql = `UPDATE users SET name = ?, email = ?, phone = ?, role = ? WHERE id = ?`;
  const result = await db.runAsync(sql, [updatedName, updatedEmail, updatedPhone, updatedRole, id]);
  return result.changes > 0;
}

async function remove(id) {
  const sql = `DELETE FROM users WHERE id = ?`;
  const result = await db.runAsync(sql, [id]);
  return result.changes > 0;
}

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove
};
