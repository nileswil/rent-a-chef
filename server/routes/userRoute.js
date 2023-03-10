const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const cookieController = require('../controllers/cookieController');


router.post('/signup', userController.createUser, cookieController.jwtEncryptUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

router.post('/login', authController.login, (req, res) => {
  res.status(200).json(res.locals.validate); 
});

//UPDATE A USER INFO

//DELETE A USER
module.exports = router;