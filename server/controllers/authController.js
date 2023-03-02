const db = require('../server');
const authController = {};
const bcrypt = require()
authController.login = async (req, res, next) => {
    const { username, password } = req.body;
    const queryString = `
        SELECT * FROM "user"
        WHERE username = $1 AND password = $2
        RETURNING *
    `;
    const values = [username, password];
    try {
        const data = await db.query(queryString, values);
        console.log(`${username} has been found`)
        if (data.rows.length === 0) res.status(404).json({message:'users not found'});

        const valid =
        // res.locals.user = data.rows[0];
        return next();
    }
    catch (err) {
        return next({
            log: 'Error in login middleware',
            status: 500,
            message: {
                err:err.message
            }
        })
    }
}

module.exports = authController;