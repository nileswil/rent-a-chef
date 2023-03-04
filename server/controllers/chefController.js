const db = require('../models/chefModels');

const chefController ={};

//GET ALL THE CHEFS INFO
chefController.getChefs = async (req, res, next) => {
    try {
        const queryString = `SELECT * FROM "user" WHERE "status" = 'chef'`;
        const data = await db.query(queryString);
        res.locals.chefs = data.rows; 
        return next();     
    } catch (err){
      return next({
        log: 'error in chefController.getChefs',
        status: 500,
        message: {
          err: err.message
        }
      });
    }
};

module.exports = chefController;