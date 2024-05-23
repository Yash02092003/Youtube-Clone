const jwt = require('jsonwebtoken');

const verifyToken = (req , res , next) => {
    const token = req.cookies.access_token;
    if(!token) return next(new Error('You Are Not Authecticated'));

    jwt.verify(token , 'Just A litlle Secret' , (err , user) => {
        if(err) return next(new Error('Token is not Valid'));
        req.user = user;
        console.log(req.user);
        next();
    });
}


module.exports = verifyToken;