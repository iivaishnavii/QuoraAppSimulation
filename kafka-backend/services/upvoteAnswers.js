var Model = require('../config/MongoConnection')

function handle_request(message,callback)
{
     
    console.log("Inside handle requests of bookmark answers:"+message.body.answerid)
     Model.AnswerModel.findOne({"_id":message.body.answerid},
        (err,answer)=>{
            var answerid = message.body.answerid;
           // console.log("Answer is "+answer)
            if(answer)
            {
                console.log("answer:",answer)
                answer.upVotes = answer.upVotes + 1
                //console.log(answerid)
                //console.log("answer.upvotes:",answer.upVotes)
                //console.log(Number(answerid))
                               
                // answer.bookmarkedusers.push(userid)
                
            answer.save().then(doc=>
                {
                    Model.QuestionsModel.findOne({ '_id': message.body.questionid},
                    (err,answers)=>{
                     console.log(answers)
                    //    answers.forEach((answer)=>{
                    //        console.log("Ind answer"+answer)
                    //        if(answer._id===message.body.answerid)
                    //         {
                    //             answer.upVotes = answer.upVotes + 1
                    //             answers.save()
                    //             console.log("Incremented answer"+answer)
                    //             callback(null,answer)
                    //         }
                    //    })
                        
                    })
                                        
                },
                (err)=>{
                    console.log("Unable to save assignment details",err)
                    callback(err,null);
                })   

                }
            })

        
        }

exports.handle_request = handle_request