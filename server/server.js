const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT ?? 8000;
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors());

app.get('/clients', async (req, res) => {
  try {
    const clients = await pool.query('SELECT * from clients');
    res.json(clients.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get('/auto_mechanics', async (req, res) => {
  try {
    const auto_mechanics = await pool.query('SELECT * from auto_mechanics');
    res.json(auto_mechanics.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get('/', (req, res) => {
  res.send('Bienvenidoo');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
