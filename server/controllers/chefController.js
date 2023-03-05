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

chefController.createProfile = async (req, res, next) => {
  try {
    const {bio, location} = req.body;
    const {userId} = req.user.id;
    console.log(`userId=>${userId}`);
    const queryString = `
      INSERT INTO chef (user_id, bio, location)
      VALUES ($1, $2, $3)
      RETUNING *
    `;
    const values = [userId, bio, location];
    const data = await db.query(queryString, values);
    res.locals.profile = data.rows[0];
    return next();

  } catch (err){
      return next({
        log: 'error in chefController.createProfile',
        status: 500,
        message: {
          err: err.message
        }
    });
  }
};

chefController.updateProfile = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {bio, location} = req.body;
    const queryString = `
    UPDATE chef
    SET
      bio = CASE WHEN $1 IS NOT NULL THEN $1 ELSE bio END,
      location = CASE WHEN $2 IS NOT NULL THEN $2 ELSE location END
    WHERE chef_id = ${id}
    RETURNING *
    `;
    const values = [bio, location];
    const data = db.query(queryString, values);
    return next();
  } catch (err) {
      return next({
        log: 'error in chefController.updateProfile',
        status: 500,
        message: {
          err: err.message
        }
      });
  }
};

chefController.createBooking = async (req,res,next) =>{
  try {
    const {id} = req.user.id;
    const { chefId, bookingDate, startTime, endTime, status, numGuests, specialRequest, totalPrice } = req.body;
    const queryString = `
      INSERT INTO booking (user_id, chef_id, booking_date, start_time, end_time, status, num_guests, special_request, total_price)
      VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *
    `;
    const values = [userId, chefId, bookingDate, startTime, endTime, status, numGuests, specialRequest, totalPrice];
    const data = await db.query(queryString, values);
    console.log(`${chef_id} booking has been created!`)
    res.locals.booking = data.rows[0];
    return next();
  } catch (err){
      return next({
        log: 'error in chefController.createBooking',
        status: 500,
        message: {
          err: err.message
        }
    })
  }

}


module.exports = chefController;