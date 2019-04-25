var Model = require('../config/MongoConnection')

function handle_request(message, callback){
    console.log('In kafka request for writing answer ', message);
    var answer = Model.AnswerModel({
        answer : message.body.answer,
        owner : message.body.owner,
        isAnonymous:message.body.isAnonymous,
        date:message.body.date,
        question:message.body.question

    })
    answer.save()
    .then(response =>{
        Model.QuestionsModel.findOne({"Question":message.body.question},(err,question)=>{
            console.log("I am Ques"+question)
            question.Answers.push(answer)
            question.save().
            then(res=>{
                callback(null,res)
            })
            .catch(err=>callback(err,null))
        })
    })
}
exports.handle_request = handle_request;