const jwt = require('jsonwebtoken');
require('dotenv').config();
const cookieController = {};

cookieController.jwtEncryptUser = async (req, res, next) => {
  try {
    const {_id} = res.locals;
    console.log('id in cookieController ', _id)
    const token = jwt.sign({id:_id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    console.log(`token => ${token}`);
    
    res.cookie('authToken', token, {httpOnly: true, secure: true});
    res.locals.token = token;
    return next();

  } catch (err) {
    console.log(err);
    return next({
      log: 'Error in jwtEncryptUser middleware',
      status: 500,
      message: {
        err: err.message
      }
    });
  }
};

cookieController.isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    if(!token) res.status(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if(err) return res.status(403).json({validate: false});
      
      res.locals.validate = true;
      return next();
    });

  } catch (err) {
    return next({
      log: 'Error in jwtAuth middleware',
      status: 500,
      message: {
        err: err.message
      }
    })
  }
}

module.exports = cookieController;
