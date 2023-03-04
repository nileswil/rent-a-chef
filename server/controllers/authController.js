const db = require('../models/chefModels');
const authController = {};
const bcrypt = require('bcrypt');

authController.login = async (req, res, next) => {
    const { username, password } = req.body;
 try {
      const queryString = `
      SELECT * FROM "user"
      WHERE username = $1
      `;
        const value = [username];
        const data = await db.query(queryString, value);
        console.log(`${username} has been found`)
        
        if (data.rows.length === 0) res.status(404).json({message:'users not found'});
        console.log(`pass${data.rows[0].password}`)
        const valid = await bcrypt.compare(password, data.rows[0].password)

        // res.locals.user = data.rows[0];
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