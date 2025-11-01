// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersRouter = require('./routes/users');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => res.json({ status: 'OK', service: 'User CRUD Microservice' }));

// Routes
app.use('/api/users', usersRouter);

// Start server after DB init
db.init()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`User CRUD microservice running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to initialize DB:', err);
    process.exit(1);
  });
