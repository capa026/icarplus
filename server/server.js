const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT ?? 8000;
const cors = require('cors');
const app = express();
const pool = require('./db');
const { v4: uuidv4 } = require('uuid');

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

//Add client to DB
app.post('/clients', (req, res) => {
  const id = uuidv4();
  const { first_name, last_name, car_model, car_type, car_year, auto_part } =
    req.body;
  console.log(req.body);
  try {
    pool.query(
      `INSERT INTO clients(id, first_name, last_name, car_model, car_type, car_year, auto_part) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [id, first_name, last_name, car_model, car_type, car_year, auto_part]
    );
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
