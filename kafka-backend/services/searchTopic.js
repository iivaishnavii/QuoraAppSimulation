var Model = require('../config/MongoConnection')

function handle_request(message, callback){
  console.log("Inside search topic")
  console.log(message.topic);
  Model.TopicsModel.find({"topicName":{'$regex':message.topic,'$options':'i'}},function(err,topic){
        if(topic)
        {
            callback(null,topic)
        }
        else
            callback(err,null)
  })
}
exports.handle_request = handle_request;