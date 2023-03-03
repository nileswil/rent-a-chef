//NEW USER SIGNUP
const jwt = require('jsonwebtoken');
const db = require('../models/chefModels');

const userController = {};

//INSERT NEW USER TO THE DATABASE
userController.createUser = async (req, res, next) => {
    const { username, password, picture, firstname, lastname, status } = req.body;
    const queryString = `
    INSERT INTO "user"(username, password, picture, firstname, lastname, status)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *
    `;
    const values = [username, password, picture, firstname, lastname, status];
    try {
        const data = await db.query(sql, values);
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


//DELETE A CHEF/USER?



module.exports = userController;