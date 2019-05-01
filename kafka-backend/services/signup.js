var Model = require('../config/MongoConnection');
var bcrypt = require('bcrypt-nodejs');
var mongooseTypes = require('mongoose').Types;
var saltRounds = 10

function handle_request(message,callback){
    console.log("In Sign up "+message.Email)
    
    //const profileId = mongooseTypes.ObjectId();
 
    Model.UserModel.findOne({
        'Email' : message.Email
    },(err,user) => {
        if(err)
        {
            console.log("Unable to fetch use details",err)
            callback(err,null)
        }
        else
        {
            if(user)
            {
                console.log('User Exists',user)
                callback(null,null)                
            }
            else
            {
                const hashedPassword = bcrypt.hashSync(message.Password)
                var user = new Model.UserModel({
                    Name : message.Name,
                    Email : message.Email,
                    Password : hashedPassword
                  
                    
                })
            }
                console.log("User document"+user.Name)
                
                user.save().then((doc)=>{
                    console.log("Success response"+doc)
                    callback(null,doc);
                }, (err)=>{
                    console.log("Unable to save user details",err)
                    callback(err,null);
                })
            }
        }
    
    )


}

exports.handle_request = handle_request;