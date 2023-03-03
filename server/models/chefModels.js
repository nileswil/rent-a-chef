const { Pool } = require('pg');

const PG_URI = 'postgres://lhqlrklz:tdP5mLWEHFOejQeuMDbsuV108GTBgYEd@baasu.db.elephantsql.com/lhqlrklz';
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);

  }
};