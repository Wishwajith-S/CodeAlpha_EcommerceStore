const pool = require("../db/db");

const createTables = async () => {
    try {

        // USERS TABLE
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(100),
                email VARCHAR(100) UNIQUE,
                password VARCHAR(255)
            )
        `);

        // PRODUCTS TABLE
        await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                price INTEGER,
                image TEXT,
                description TEXT
            )
        `);

        // ORDERS TABLE
        await pool.query(`
            CREATE TABLE IF NOT EXISTS orders (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id),
                total INTEGER,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log("Tables created successfully");

    } catch (error) {
        console.log(error);
    }
};

createTables();