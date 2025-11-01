// controllers/userController.js
const userService = require('../services/userService');

async function createUser(req, res) {
  try {
    const { name, email, phone, role } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'name and email are required' });
    const newUser = await userService.create({ name, email, phone, role });
    res.status(201).json(newUser);
  } catch (err) {
    if (err && err.code === 'SQLITE_CONSTRAINT') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserById(req, res) {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateUser(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { name, email, phone, role } = req.body;
    const updated = await userService.update(id, { name, email, phone, role });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteUser(req, res) {
  try {
    const id = parseInt(req.params.id);
    const deleted = await userService.remove(id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
