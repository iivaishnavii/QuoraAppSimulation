var Model = require('../config/MongoConnection');
var bcrypt = require('bcrypt-nodejs');
var mongooseTypes = require('mongoose').Types;
var saltRounds = 10

function handle_request(message, callback){
    console.log('Inside Backend Signup');
    console.log('Message: ', message);
    const hashedPassword = bcrypt.hashSync(message.Password)
    var SignUp = new Model({
        UserSchema:{
            Name : message.Name,
            Password : hashedPassword,
            Email : message.Email
        }
    })
    console.log("SignUp"+SignUp)
    var promise = SignUp.save()
    console.log("Promise"+promise)
    promise.then(res=>{
        res.value= message
        res.code = 200
        console.log("Ressss"+res)
        callback(null,res)
    })
    .catch(err=>{
        if(err.message.includes("Duplicate Key"))
        {
            res.value = "User Exists"
        }
        else 
        {
            res.value = "Error in registering data please try again!";
            res.code = "400";
            callback(null, res);
        }
    })

 }

exports.handle_request = handle_request;