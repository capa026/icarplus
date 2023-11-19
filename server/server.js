const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT ?? 8000;
const cors = require('cors');
const app = express();
const pool = require('./db');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/cars', async (req, res) => {
  try {
    const cars = await pool.query('SELECT * from cars');
    res.json(cars.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get('/', (req, res) => {
  res.send('Bienvenidoo');
});

//Add client to DB
app.post('/clients', async (req, res) => {
  const id = uuidv4();
  const {
    first_name,
    last_name,
    car_model,
    car_type,
    car_year,
    auto_part,
    description,
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO clients(id, first_name, last_name, car_model, car_type, car_year, auto_part, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        id,
        first_name,
        last_name,
        car_model,
        car_type,
        car_year,
        auto_part,
        description,
      ]
    );

    await pool.query(
      `INSERT INTO cars(id, client_name, model, type, car_year, auto_part_assigned, description) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        id,
        first_name + ' ' + last_name,
        car_model,
        car_type,
        car_year,
        auto_part,
        description,
      ]
    );
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
