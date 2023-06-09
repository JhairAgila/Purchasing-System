const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JST_SECRET_KEY, (err, user) => {
            if(err) { 
                res.status(403).json("Token is not valid!") 
            }
            req.user = user; // new value created
            next();
        });
    }else{
        return res.status(401).json("You are not authenticated")
    }
};  

const verifyTokenAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not allowed to that! ");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not allowed to that! ");
        }
    });
};

module.exports = {
    verifyToken,
    verifyTokenAuthorization,
    verifyTokenAndAdmin,
};