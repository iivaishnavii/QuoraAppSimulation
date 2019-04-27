var Model = require('../config/MongoConnection')

function handle_request(message, callback){
  Model.TopicsModel.find({"Question":{'$regex':message.params.question,'$options':'i'}},function(err,topic){
        if(topic)
        {
            callback(null,topic)
        }
        else
            callback(err,null)
  })
}
exports.handle_request = handle_request;