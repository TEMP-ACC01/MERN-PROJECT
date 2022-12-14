const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const cookieParser = require('cookie-parser');



const Authenticate = async (req, res, next) => {


    try {
        const token = req.cookies.jwtoken_store;
        // const tokenStr = req.headers.cookie;
//         // const splitToken = tokenStr.split("=");

//         // const token = splitToken[1];


        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser  = await User.findOne({_id:verifyToken._id, "tokens.token":token});
        if (!rootUser) {
            throw new Error("user not Found")
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch (err) {
        res.status(401).send("Unauthorized: no token provided");
        console.log(err);
    }
}

module.exports = Authenticate;