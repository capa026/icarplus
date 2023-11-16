const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT ?? 8000;
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors());

app.get('/users/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const users = await pool.query('SELECT * from users WHERE email = $1', [
      email,
    ]);
    res.json(users.rows);
  } catch (error) {
    console.error(error);
  }
});
app.get('/users', async (req, res) => {
  try {
    const users = await pool.query('SELECT * from users');
    res.json(users.rows);
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
