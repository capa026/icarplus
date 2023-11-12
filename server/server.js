const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT ?? 8000;
const app = express();
const pool = require('./db');

app.get('/users', async (req, res) => {
  const email = 'carlos@example.com';
  try {
    const users = await pool.query('SELECT * from users WHERE email = $1', [
      email,
    ]);
    res.json(users.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

app.get('/', (req, res) => {
  res.send('Bienvenidoo FEATURES BRANCH');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
