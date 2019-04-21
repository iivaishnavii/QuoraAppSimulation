var connection =  new require('./kafka/Connection');
//topics files
//var signin = require('./services/signin.js');
var login = require('./services/login.js');
<<<<<<< HEAD
var profile = require('./services/profile')
=======
var signup = require('./services/signup.js');
>>>>>>> 0a5ef1095b22586547ece1ba64dc6c8fd96fcaa3

function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        
        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
        
    });
}
// Add your TOPICs here
//first argument is topic namex
//second argument is a function that will handle this topic request
handleTopicRequest("login",login)
<<<<<<< HEAD
handleTopicRequest("update-profile",profile)

=======
handleTopicRequest("signup",signup)
>>>>>>> 0a5ef1095b22586547ece1ba64dc6c8fd96fcaa3
