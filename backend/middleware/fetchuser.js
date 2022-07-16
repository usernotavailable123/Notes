var jwt = require("jsonwebtoken");
const JWT_SECRET = "harryisagoodboy";

const fetchusers = (req,res,next) =>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status('401').send({error:'Please authenticate a valid token'});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
    req.user = data.user;
    } catch (error) {
        console.log(error.message);
        res.status(401).send({error: 'Please authenticate using a valid token'})
    }
    next();
}
module.exports = fetchusers;