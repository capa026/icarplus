const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT ?? 8000;
const app = express();
const pool = require('./db');

/*
app.get('/users', async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});
*/
app.get('/', (req, res) => {
  res.send('Bienvenidoo');
});

app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  return res.json(result.rows[0]);
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
