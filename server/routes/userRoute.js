const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController')


router.route('/login')
    //CREATE A NEW USER;
    .post(userController.createUser, (req, res) => {
        res.status(200).json(res.locals.newUser);
        return next();
    })
    .post(authController.login, (req, res) => {
      return res.status(200).json({validate: res.locals.validate}); 
    })

    //UPDATE A USER INFO

    //DELETE A USER
    module.exports = router;