var Model = require('../config/MongoConnection')

function handle_request(message, callback){

    console.log("inside search user questions");
  Model.UserModel.find(
      {
        $or: [ 
        {'Email' : message.email },
  
        {
        'QuestionsAnswered' : {
            $elemMatch: {
                'Topics' : [message.topic]
                }
        }}]

    },function(err,user){
        if(topic)
        {
            callback(null,user.QuestionsAnswered)
        }
        else
            callback(err,null)
  })
}
exports.handle_request = handle_request;