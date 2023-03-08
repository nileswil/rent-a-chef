const jwt = require('jsonwebtoken');


const loggedUsers = {};

const cookieController = {};
cookieController.jwtEncryptUser = async (req, res, next) => {
  try {
    const token = jwt.sign(loggedUsers[username], process.env.ACCESS_TOKEN_SECRET);
    loggedUsers[token] = { ...res.locals.user }

    res.cookie('authToken', token);
    next();

  } catch (err) {
    return next({
      log: 'Error in jwtEncryptUser middleware',
      status: 500,
      message: {
        err: err.message
      }
    })
  }
}

cookieController.jwtAuth = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    if(!token) res.status(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (req, res, next) => {
      if(err) res.status(403);
      
      res.status(200).json({ ...loggedUsers[token] })
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
