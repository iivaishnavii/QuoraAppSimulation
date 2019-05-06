var express = require('express')
var router=express.Router();
var kafka = require('../kafka/client')
var passport = require('passport')
var requireAuth = passport.authenticate('jwt',{session : false})
var Model = require('../../kafka-backend/config/MongoConnection');
var multer = require('multer');



router.post('/',function(req,res){

        // console.log("In create question request"+req.body)
        // kafka.make_request("write-answer",req,function(err,result){
        //     if(err)
        //     {
        //         console.log("Unable to create answer",err);
        //         res.writeHead(400,{
        //             'Content-type' : 'text/plain'
        //         })
        //     }
        //     else{
        //         console.log("Questions added successfully body"+result)
        //         res.writeHead(200,{
        //             'Content-Type' : 'text/plain'
        //         })
        //         res.end('Adding an answer successfully')
        //     }
        // })
   // }
//    Model.UserModel.findOne({"Email":req.body.owner},function(err,user)
//    {
       
//       // var imageOfUser = user.ProfilePicture
//        var answer = Model.AnswerModel({
//            answer : req.body.answer,
//            owner : req.body.owner,
//            isAnonymous:req.body.isAnonymous,
//            date:req.body.date,
//            question:req.body.question,
//            imageId : req.body.imageId
//           // images : imageOfUser
//        })
//        user.QuestionsAnswered =  user.QuestionsAnswered || []
//        user.QuestionsAnswered.push(answer)
//        console.log("Pushing"+answer)
//        user.save().
//        then(res=>console.log(res))
//        .catch(err=>console.log("Error saving user"+err))

//        answer.save()
//        .then(response =>{

//            var activity = Model.ActivityModel ({
//                action : "answer",
//                owner_email : req.body.owner,
//                question : {
//                    Question : req.body.question
//                }
//            });

//            activity.save();
//            Model.QuestionsModel.findOne({"Question":req.body.question},(err,question)=>{
//               // console.log("I am Ques"+question)
//                question.Answers.push(answer)
//                question.save().
//                then(response=>{
//                 res.writeHead(200,{
//                                 'Content-Type' : 'text/plain'
//                             })
//                    res.end("Created Answer Successfully")
//                })
//                .catch(err=>
//                 {
//                     res.writeHead(400,{
//                     'Content-type' : 'text/plain'
//                      })
//                     res.end('Unable to create question')
                    
//                 })

//            })
//        })


//    })
})

module.exports = router