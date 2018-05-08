const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
  try{
    const token = req.body.authorization.split(" ")[1];
    console.log(token);
    const decodedtoken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decodedtoken;
    next();
  } catch(error){
    console.log(error);
    return res.status(401).json({ msg : "Login Required"});
  }
}
