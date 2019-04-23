var Model = require('../config/MongoConnection')

function handle_request(message,callback){
    console.log("Inside Kafka follow topic",message);
//email : current , followEmail : whomToFollow
    Model.UserModel.findOne({
        'Email' : message.body.email
    },(err,user)=>{
        if(err)
        {
            console.log("Unable to fetch user details",err)
            callback(err,null)
        }
        else
        {
        console.log("The user is" + user)
        Model.UserModel.findOne({
            'Email' : message.body.followEmail
        }, (err,userToFollow) => {
            if(err) {
                console.log("User not found");
            } else {
                user.following = user.following || [];
                user.following.push(userToFollow);
                userToFollow.followers = userToFollow.followers || [];
                userToFollow.followers.push(user);
            }
            userToFollow.save().then((doc)=>{
                console.log("Topic added successfully",doc)
               // callback(null,doc)
            },(err)=>{
                console.log("Unable to follow topic",err)
               // callback(err,null)
            })
            user.save().then((doc)=>{
                console.log("Topic added successfully",doc)
                callback(null,doc)
            },(err)=>{
                console.log("Unable to follow topic",err)
                callback(err,null)
            })
            
        })
      
        }
    })
}

exports.handle_request =  handle_request