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
        console.log(`${username} has been added to the database successfully!` );
        console.log('data.rows:', data.rows); 
        console.log('data.rows[0]:', data.rows[0]);
        res.locals._id = data.rows[0]._id.toString();
        console.log('res.locals.newUser:', res.locals.newUser);
        // res.status(200).json({username, toke})
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