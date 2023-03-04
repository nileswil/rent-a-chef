const db = require('../models/chefModels');
const authController = {};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

authController.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const queryString = `
      SELECT * FROM "user"
      WHERE username = ${username}
      `;
        const data = await db.query(queryString);
        console.log(`${username} has been found`)
        
        if (data.rows.length === 0) res.status(404).json({message:'users not found'});
        const valid = await bcrypt.compare(password, data.rows[0].password)

        if (valid) {
          console.log('password is valid');
            res.locals.userId = data.rows[0]._id;
        } else {
            console.log('invalid password');
            res.locals.validate = false;
        }
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