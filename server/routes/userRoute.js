const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController')


router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
    })
router.post('/login', authController.login, (req, res) => {
  return res.status(200).json({validate: res.locals.user}); 
});

    //UPDATE A USER INFO

    //DELETE A USER
    module.exports = router;