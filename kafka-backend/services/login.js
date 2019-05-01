var Model = require('../config/MongoConnection');
var bcrypt = require('bcrypt-nodejs');


function handle_request(msg, callback){
    console.log('Inside  Kafka Backend Login');
    console.log('Message', msg);

    Model.UserModel.findOne({
        'Email': msg.Email
    }, (err, user) => {

        if (err) {
            console.log("Unable to fetch user details.", err);
            callback(err, null);
        }
        else {

            if(user){
                console.log("User exists ");
                
            }
            else{
                console.log("user doesn't exist")
                callback(null, null);
            }
            

        }

    });
}

exports.handle_request = handle_request;