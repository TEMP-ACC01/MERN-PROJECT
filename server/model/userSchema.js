const mongoose  = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required:true
    },
    last_name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    phone_no: {
        type: Number,
        required:true
    },
    date_of_birth: {
        type: Date,
        required:true 
    },
    password: {
        type: String,
        required:true
    },
    cpassword: {
        type: String,
        required:true
    },

    date: {
        type: Date,
        default:Date.now
    },

    tasks : [
        {
            first_name : {
                type : String,
                required:true
            },

            task : {
                type : String,
                required:true
            },

            due_date : {
                type : Date,
                required:true
            },

            status : {
                type : String,
                required:true
            }
        }
    ],


    messages: [
        {
            first_name: {
                type: String,
                required:true
            },
            last_name: {
                type: String,
                required:true
            },
            email: {
                type: String,
                required:true
            },
            phone_no: {
                type: Number,
                required:true
            },
            message: {
                type: String,
                required:true
            }
        }
    ],


    tokens:  [
        {
            token : {
                type: String,
                required:true
            }
        }
    ],
    verifytoken:{
        type: String,
    }
});

userSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword =await  bcrypt.hash(this.cpassword, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

userSchema.methods.addMessage = async function(first_name, last_name, email, phone_no, message) {
    try {
        this.messages = this.messages.concat({first_name, last_name, email, phone_no, message});
        await this.save();
        return this.messages;

    } catch (error) {
        console.log(error)
    }
}


// tasks

userSchema.methods.addTask = async function(first_name, task, due_date, status) {
    try {
        this.tasks = this.tasks.concat({first_name, task, due_date, status})
        await this.save();
        return this.tasks;

    } catch (error) {
        console.log(error)
    }
}


const User = mongoose.model("USER", userSchema);

module.exports = User;



