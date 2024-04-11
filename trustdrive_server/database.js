const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "Gaurav@01062002",
    host: "localhost",
    port: 5433,
    database: "miniproject",
})

module.exports = pool;