const jwt = require('jsonwebtoken');
const { authorization } = require('../../config');


const jwtAuthentication = async  (req, res ,next) => {
  const token = req.headers.authorization;
  if (!token)  return res.status(401).send();
  try{
    let user = await jwt.verify(token, authorization.secret);
    if (user._id){
      res.locals.user = user._id;  
      res.locals.authenticated = true;
      return next();
    }else{
      res.status(401).send({
        message: "La sesión ha expirado"
      })
    }
  }
  catch(e){
    res.status(401).send({
      message: "La sesión ha expirado"
    })
  }
};


module.exports = jwtAuthentication;