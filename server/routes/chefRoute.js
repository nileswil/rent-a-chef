const express = require('express');
const chefController = require('../controllers/chefController');
const router = express.Router();


router.get('/getChefs', chefController.getChefs, (req, res) => {
  return res.status(200).json(res.locals.chefs)
});

module.exports = router;