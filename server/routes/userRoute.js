const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.route('/')
    //CREATE A NEW USER;
    .post(userController.createUser, (req, res) => {
        res.status(200).json(res.locals.newUser);
        return next();
    })

    //UPDATE A USER INFO

    //DELETE A USER