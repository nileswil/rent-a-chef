//NEW USER SIGNUP
const db = require('../models/chefModels');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userController = {};

//INSERT NEW USER TO THE DATABASE
userController.createUser = async (req, res, next) => {
    const { username, password, picture, firstname, lastname, status } = req.body;
    try {
      const hashedPass = await bcrypt.hash(password, SALT_WORK_FACTOR);
      
      const queryString = `
      INSERT INTO "user"(username, password, picture, firstname, lastname, status)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *
      `;
    
      const values = [username, hashedPass, picture, firstname, lastname, status];
        const data = await db.query(queryString, values);
        console.log(`${username} has been added to the database successfully!` )
        res.locals.newUser = data.rows[0];
        return next();
    }
    catch (err) {
        return next({
            log: 'Error in createUser middleware',
            status: 500,
            message: {
                err:err.message
            }
        })
    }
}


//UPDATE A USER INFO
userController.updateUser = async (req, res, next) => {
    const { _id, username, picture, firstname, lastname } = req.body; 

}

//DELETE A CHEF/USER?



module.exports = userController;