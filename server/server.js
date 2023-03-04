const express = require('express');
const app = express();
const path = require('path');
const PORT = 8081;
const { Pool } = require('pg');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

const PG_URI = 'postgres://lhqlrklz:tdP5mLWEHFOejQeuMDbsuV108GTBgYEd@baasu.db.elephantsql.com/lhqlrklz';
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}

app.use(cookieParser);
app.use(express.json());
//app.use(express.static());
app.use(express.urlencoded({extended:true}));

/*
PUT MIDDLEWARE BELOW HERE
*/

app.get('/login', authController.login, (req, res) => {
  res.status(200).json({message: 'success'});
});


/*
PUT MIDDLEWARE ABOVE HERE
*/

app.use((req, res) => res.status(404).send('Page not found'));
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err:'An error occurred' },
    }
    const errorObj = Object.assign(defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
})

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client in DB', err.stack);
  } else {
    console.log('DB connected');
  }
  release();
});

app.listen(PORT, () => {
    console.log(`rent a chef for your next meal right now @${PORT}`)
})