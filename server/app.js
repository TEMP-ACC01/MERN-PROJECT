const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config({path:"./config.env"});
require('./DB/conn');
// const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;



// middleware

const middleware = (req, res, next) => {
    console.log("hello my midleware");
    next();
}





// app.get('/about',  (req, res) => {
//     res.send("hello world from about");
// });


// app.get('/contact', (req, res) => {
//     res.send("hello world from contact");
// });

// app.get('/signin', (req, res) => {
//     res.send("hello world from signin");
// });

// app.get('/signup', (req, res) => {
//     res.send("hello world from signup");
// });







app.listen(PORT, () => {
    console.log("server is running at 4000");
})

