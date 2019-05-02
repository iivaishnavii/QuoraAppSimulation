var Model = require('../config/MongoConnection')

function handle_request(message, callback){
  Model.UserModel.find(
      {
        $or: [ {
        'Email' : message.email },
    
        {   
        'QuestionsFollowed' : {
            $elemMatch: {
                'Topics' : [message.topic]
                }
        }}]

    },function(err,user){
        if(user)
        {
            callback(null,user)
        }
        else
            callback(err,null)
  })
}
exports.handle_request = handle_request;