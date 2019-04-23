var connection =  new require('./kafka/Connection');
//topics files
//var signin = require('./services/signin.js');
var login = require('./services/login.js');

var profile = require('./services/profile')

var signup = require('./services/signup.js');


var following = require('./services/following.js');
var userAnswers = require('./services/userAnswers.js')
var userQuestions = require('./services/userQuestions.js')
var userBookmarks = require('./services/userBookmarks.js')
var updateAnswer = require('./services/updateAnswer.js')

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

handleTopicRequest("update-profile",profile)


handleTopicRequest("signup",signup)

handleTopicRequest("get_following",following)
handleTopicRequest("user_answers",userAnswers)
handleTopicRequest("user_questions",userQuestions)
handleTopicRequest("user_bookmarks",userBookmarks)
handleTopicRequest("update_answer",updateAnswer)
