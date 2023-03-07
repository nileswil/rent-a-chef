const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const cookieController = require('../controllers/cookieController');


router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
})
router.post('/login', (req,res,next)=>{console.log("HELLOOOOO"); return next();}, authController.login, (req, res) => {
  res.status(200).json({validate: res.locals.user}); 
});

//UPDATE A USER INFO

//DELETE A USER
module.exports = router;