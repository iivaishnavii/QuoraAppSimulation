var Model = require('../config/MongoConnection')


function handle_request(message,callback){
    console.log("Inside get answers request",message);
    Model.QuestionsModel.findById({
        "_id" : message.params.ID
    },(err,question)=>{
        console.log("Questioneee"+question)
        if(question)
        {
            callback(null,question.Answers)
        }
        else
        {
            callback(err,null)
        }
    
    })
}

exports.handle_request =  handle_request

