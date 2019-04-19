var Model = require('../DatabaseConnection');
var bcrypt = require('bcrypt-nodejs');
var mongooseTypes = require('mongoose').Types;

function handle_request(message, callback){
    console.log('Inside Kafka Backend Signup');
    console.log('Message: ', message);


    //User creation query

    const profileId = mongooseTypes.ObjectId();

    //Check if user exists

    Model.Users.findOne({
        'Email': message.Email
    }, (err, user) => {

        if (err) {
            console.log("Unable to fetch user details.", err);
            callback(err, null);            
        }
        else {

            if (user) {
                console.log('User Exists!', user);
            
                   
                    callback(null, null);
                
                
                
            }
            else {

                //Hashing Password!
                const hashedPassword = bcrypt.hashSync(message.Password);

                var user = new Model.Users({
                    Email: message.Email,
                    Password: hashedPassword,
                    FirstName: message.FirstName,
                    LastName: message.LastName,
                    City: '',
                    State : '',
                    ZipCode : '',
                    Profile : '',
                    Education : '',
                    CareerInformation : '',
                    Description : '',
                    ProfileCredential : '',
                    Questions : [],
                    QuestionsFollowed : [],
                    AnswersBookmarked : [],
                    Topics : [],
                    followers : [],
                    following : [],
                    profileviews : 0,
                    QuestionAnswered : []
                });
            }

            user.save().then((doc) => {

                console.log("User saved successfully.", doc);
                callback(null, doc);

            }, (err) => {
                console.log("Unable to save user details.", err);
                callback(err, null);
            });

        }

    });

}

exports.handle_request = handle_request;