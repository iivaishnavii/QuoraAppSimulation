var Model = require('../config/MongoConnection')


function handle_request(message,callback){
    console.log("Inside Kafka get all Questions"+message);
    Model.QuestionsModel.find({  },(err,question)=>{
        if(question)
        {
            console.log("e")
            console.log(question);
            callback(null,question)
        }
        else
        {
            console.log("em")
            callback(err,null)
        }
    
    })
}

exports.handle_request =  handle_request