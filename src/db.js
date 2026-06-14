const { Pool } = require('pg');

const pool = new Pool({
    user: 'munteanserghei',
    password: 'Qwerty1234',
    host: 'localhost',
    port: 5432,
    database: 'shopix_nodejs'
});

module.exports = pool;