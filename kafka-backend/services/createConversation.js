var Model = require('../config/MongoConnection')

function handle_request(message, callback){
    console.log('Create Conversation ', message);
 console.log("first time")


var mesg = new Model.ConverstionModel({
    From: message.from,
    To: message.to,
    Subject: message.sub,
    messages: [{
        from: message.from,
        text: message.msg, 
    }]   
})

mesg.save().then((doc) => {
console.log(" Added successfully.", doc);
callback(null, doc);
}, (err) => {
console.log("Unable to add Submission", err);
callback(err, null);
}); 
}
exports.handle_request = handle_request;