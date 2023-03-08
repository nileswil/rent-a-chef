const db = require('../models/chefModels');
const authController = {};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

authController.login = async (req, res, next) => {
    const { username, password } = req.body;
    //console.log(`newUser => ${res.locals.newUser}`)
 try {
      const queryString = `
      SELECT * FROM "user"
      WHERE username = $1
      `;
        const value = [username];
        const data = await db.query(queryString, value);
        console.log(`${username} has been found`)
        
        //if (data.rows.length === 0) return res.status(404).json({message:'users not found'});
        console.log(`pass${data.rows[0].password}`)
        const valid = await bcrypt.compare(password, data.rows[0].password)
        console.log(valid)
        if (!valid) {
          //console.log(`newUser => ${res.locals.newUser._id}`)
          res.locals.validate = false;
          return next({message: "invalid password"});
        } 
        res.locals.validate = true;
        console.log(`${username} has been logged in successfully!`);
        return next();
    }
    catch (err) {
        return next({
            log: 'Error in login middleware',
            status: 500,
            message: {
                err: err.message
            }
        })
    }
}

module.exports = authController;