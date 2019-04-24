var express = require('express')
var router=express.Router();
var kafka = require('../kafka/client')
var passport = require('passport')
var requireAuth = passport.authenticate('jwt',{session : false})


router.get('/:email',function(req,res){

        console.log("In get all questions request"+req.body)
        kafka.make_request("get-answers",req,function(err,result){
            if(err)
            {
                console.log("Unable to get questions",err);
                res.writeHead(400,{
                    'Content-type' : 'text/plain'
                })
                res.end('Error in getting questions')
            }
            else{
                console.log("Questions asked by the user are"+result)
                res.writeHead(200,{
                    'Content-Type' : 'application/json'
                })
                res.end(JSON.stringify(result))
            }
        })
   // }
})

module.exports = router