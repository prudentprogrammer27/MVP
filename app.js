'use strict';

// Import Depencies
import express from 'express';
import pg from 'pg';
import cors from "cors";
import dotenv from "dotenv";
import postgres from 'postgres';
import 'dotenv/config';
dotenv.config();


// Global Variables
const PORT = 8000;
const app = express();
const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;
// Database Connection Pool
const pool = new Pool({
    connectionString
    // user: 'stevendeclercq',
    // host: 'localhost',
    // database: 'stocks1',
    // password: '1234',
    // port: 5432
});


// Middleware
app.use(express.json());
app.use(express.static("public"))
app.use(cors({ origin: "*" }));

// Routes
app.get('/prices', (req, res) => {
    pool.query('SELECT * FROM prices')
        .then((data) => {
            // Send the data as a JSON response
            res.json(data.rows);
        })
        .catch((error) => {
            // Handle errors
            console.error('Error executing query:', error);
            res.status(500).send('Internal Server Error');
        });
});
app.get('/prices/:id', (req, res) => {
    const { id } = (req.params);
    const ID = parseInt(id, 10);
    console.log(ID)
    pool.query(`SELECT * FROM prices WHERE stock_id = $1`, [ID])
        .then((data) => res.json(data.rows))
        .catch((error) => {
            console.error(error)
            res.status(500).send('server err')
        })
})

//  Start Server
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});


