const express = require('express');
const app = express();
// const path = require('path');
const PORT = 3000;
// const { Pool } = require('pg');
const userRoute = require('./routes/userRoute');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const chefRoute = require('./routes/chefRoute')


//app.use(cookiePaser);
app.use(express.json());
//app.use(express.static());
app.use(express.urlencoded({extended:true}));

/*
PUT MIDDLEWARE BELOW HERE
*/

app.use('/api', userRoute);
app.use('/api', chefRoute);
// app.get('/login', (req, res) => {
//   res.status(200).json({message: 'success'});
// });


/*
PUT MIDDLEWARE ABOVE HERE
*/

app.use((req, res) => res.status(404).send('Page not found'));
app.use((err, req, res, next) => {
    const defaultErr = {
        log: `Express error handler caught unknown middleware error: ${err.message}` ,
        status: 400,
        message: { err:'An error occurred' },
    }
    const errorObj = Object.assign(defaultErr, err);
    console.error(errorObj.log)
    return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {
    console.log(`rent a chef for your next meal right now @${PORT}`)
})


