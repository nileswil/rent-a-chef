const express = require('express');
const chefController = require('../controllers/chefController');
const router = express.Router();

router.get('/getChefs', chefController.getChefs, (req, res) => {
  return res.status(200).json(res.locals.chefs)
});

router.post('/createBooking', chefController.createBooking, (req, res) =>{
  return res.status(200).json(res.locals.booking)
});

router.post('/createProfile', chefController.createProfile, (req, res)=> {
  return res.status(200).json(res.locals.profile)
});


module.exports = router;