const express = require('express');
const router  = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");
const nodemailer = require("nodemailer");

const keysecret = process.env.SECRET_KEY;

const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../DB/conn');
const User = require("../model/userSchema");



// email config
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"gauravphatkare0920@gmail.com",
        pass:"swfmzepbyntirhsj"
    }
});


router.get('/', (req, res) => {
    res.send("hello world from router");
});


router.post('/register', async (req, res) =>{

    const { first_name, last_name, email, phone_no, date_of_birth, password, cpassword } = req.body;


    if (!first_name || !last_name || !email || !phone_no || !date_of_birth || !password || !cpassword) {
        return res.status(422).json({error:"plz filled the field correctly"})
    }

    try {
        const userExist = await User.findOne({email:email});

        if (userExist) {
            return  res.status(422).json({ error : "Email already Exist"});
        } else if (password != cpassword) {
            return res.status(422).json({ error: "passwords are not matching"});
        } else{
            const user = new User({first_name, last_name, email, phone_no, date_of_birth, password, cpassword});



            await user.save();

            res.status(201).json({ message : "user registered successfuly"});
            

        }

        
    } catch (err) {
        console.log(err);
    }



    // User.findOne({email:email})
    // .then((userExist) => {
    //     if (userExist) {
    //         return  res.status(422).json({ error : "Email already Exist"});
    //     }

    //     const user = new User({first_name, last_name, email, phone_no, date_of_birth, password, cpassword})

    //     user.save().then(() => {
    //         res.status(201).json({ message : "user registered successfuly"});
    //     }).catch((err) => res.status(500).json({ error : "failed to registered"}));
    // }).catch(err => { console.log(err); });

    // console.log(req.body);
    // res.json({message: req.body});
    // res.send("registration page");
});


router.post('/signin', async (req, res) => {


    try{
        // let token;
        const {email, password} = req.body;
        if ( !email || !password) {
            return res.status(400).json({error: "plz fill data"});
        }

        const userLogin = await User.findOne({email:email});

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken_store", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });


            if (!isMatch) {
                res.status(400).json({error:"Invalid Credentials"});
            } else {
                res.json({message:"user login successfully"});
            }

        } else {
            res.status(400).json({error:"Invalid Credentials"});

        }




    } catch (err) {
        console.log(err);
    }
});



router.get('/about', authenticate,  (req, res) => {
    
    
    console.log('hello my About');
    res.send(req.rootUser);
});


router.get('/getData', authenticate, (req, res) =>{
    console.log('hello my contact');
    res.send(req.rootUser);
});



router.post('/contact', authenticate, async (req, res) => {
    try {

        const {first_name, last_name, email, phone_no, message} = req.body;
        if (!first_name || !last_name || !email || !phone_no || !message) {
            console.log("error in contact form");
            return res.json({error : 'please fill the constact form'});


        }

        const userContact =await User.findOne({_id: req.userID});

        if(userContact){
            const userMessage = await userContact.addMessage(first_name, last_name, email, phone_no, message);

            await userContact.save();

            res.status(201).json({message:"user sent message successsfully"});
        }



    } catch (error) {
        console.log(error)
    }
});


router.get('/logout', (req, res) => {
    console.log('hello my logout');
    res.clearCookie("jwtoken_store", {path:"/"});
    res.status(200).send("user logout");
});


// router.get("/todolistdata", authenticate, (req, res) =>{
//     console.log('hello from contact');
//     res.send(req.rootUser);
// })




router.post("/todolist", authenticate, async (req, res) => {
    try {
        const {first_name, task, due_date, status} = req.body;

        if (!first_name || !task || !due_date || !status) {
            console.log("error in task submission");
            return res.json({error:"please filled the complete form"});
        }

        const userTask = await User.findOne({_id:req.userID});

        if (userTask) {
            const userTaskFill = await userTask.addTask(first_name, task, due_date, status);
            
            await userTask.save();

            res.status(201).json({message:"task save successfully"});

        }
    }catch (error) {
        console.log(error);
    }
});


router.get("/getdataTask", authenticate, async (req, res) => {
    console.log('hello From Task');
    res.send(req.rootUser);
});

// send email link for reset password

router.post("/sendpasswordlink", async(req, res) => {
    console.log(req.body)

    const {email} = req.body;
    
    if(!email) {
        res.status(401).json({status: 401, message:"eneter Your Email"})
    }

    try {
        const userfind = await User.findOne({email:email});
        
        const token = jwt.sign({_id:userfind._id}, keysecret,{
            expiresIn :"1d"
        });

        const setusertoken = await User.findByIdAndUpdate({_id:userfind._id},{verifytoken:token}, {new:true});


        if (setusertoken){
            const mailOption = {
                from : "gauravphatkare0920@gmail.com",
                to : email,
                subject : "sending email for password reset",
                text : `This link valid for 2 minutes http://localhost:3000/forgotpassword/${userfind._id}/${setusertoken.verifytoken}`
            }

            transporter.sendMail(mailOption, (error, info) =>{
                if (error) {
                    console.log("error", error);
                    res.status(401).json({status:401, message:"email not send"})
                }else{
                    console.log("Email sent", info.response);
                    res.status(201).json({status:201, message:"email sent successfully"})
                }
            })


        }


        // console.log("setusertoken", setusertoken)
        // console.log("token", token)
        // console.log("userfind", userfind)

    } catch (error) {
        res.status(401).json({status:401, message:"Invlid user"})
    }
});

// varify user at forgot password
router.get('/forgotpassword/:id/:token', async(req, res) => {
    const {id, token} = req.params;
    // console.log(id, token)

    try  {
        const validuser = await User.findOne({_id : id, verifytoken:token});
        // console.log(validuser)
        const verifiyToken = jwt.verify(token, keysecret);
        // console.log(verifiyToken);

        if (validuser && verifiyToken._id) {
            res.status(201).json({status :201 , validuser})
        }else {
            res.status(401).json({status:401, message : "user not exist"})
        }
    } catch (error) {
        res.status(401).json({status:401, error})

    }
});

// change password

router.post("/:id/:token", async(req, res) => {
    const {id, token} = req.params;

    const {password} = req.body;

    try {
        const validuser = await User.findOne({_id:id, verifytoken:token});
        const verifyToken = jwt.verify(token, keysecret);

        if (validuser && verifyToken._id) {
            const newpassword = await bcrypt.hash(password, 12);
            const setnewuserpass = await User.findByIdAndUpdate({_id:id}, {password:newpassword});
            setnewuserpass.save();
            res.status(201).json({status:201, setnewuserpass})

        } else {
            res.status(401).json({status:401, message:"user not exist"})
        }
    } catch (error) {
        res.status(401).json({status:401, error})

    }
})




module.exports = router;