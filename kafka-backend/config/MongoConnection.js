const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://quorauser:quorauser@.mlab.com:6ddbb/Quora');



mongoose.connect('mongodb+srv://quorauser:quorauser@cluster0-6ddbb.mongodb.net/test?retryWrites=true',{
    useMongoClient : true

}).then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })

  var UserSchema = new Schema({
    Name: { type: String, trim: true},
    City: { type: String, trim: true },
    State: { type: String, trim: true },
    ZipCode: { type: String, trim: true, default: "" },
    Profile: { type: String, trim: true, default: "" },
    Education: { type: String, trim: true, default: "" },
    CareerInformation: { type: String, trim: true, default: "" },
    Description: { type: String, trim: true, default: "" },
    ProfileCredential: { type: String, trim: true, default: "" },
    Questions: { type: Array, trim: true, default: "" },
    QuestionsFollowed: { type: Array, trim: true, default: "" },
    AnswersBookmarked : {type :Array,trim:true,default:""},
    Topics : {type:Array},
    Followers : {type:Array},
    Following : {type:Array},
    ProfileViews : {type:Number},
    QuestionsAnswered:{type :Array,trim:true,default:""},
    Email: { type: Boolean, trim: true, default: 0 },
    Password: { type: String, trim: true, default: "" },
})

var AnswerSchema = new Schema({
    answer: { type: String, trim: true},
    owner: { type: String, trim: true },
    images: { type: Binary, trim: true },
    isAnonymous: { type: Boolean, trim: true, default: "" },
    upVotes: { type: Number, trim: true, default: "" },
    downVotes: { type: Number, trim: true, default: "" },
    comments: { type: Array, trim: true, default: "" },
    date : { type: Date, trim: true, default: "" },
    question : { type: String, trim: true, default: "" },

})

var ConverstionSchema = new Schema({
    From: { type: String, trim: true},
    To:{ type: String, trim: true },
    Subject: { type: String, trim: true },
    messages: { type: Array, trim: true, default: "" }

})


var QuestionsSchema = new Schema({
    Question: { type: String, trim: true},
    QuestionOwner:{ type: String, trim: true },
    Topics: { type: Array, trim: true, default: "" },
    Followers: { type: Array, trim: true, default: "" },
    Answers: { type: Array, trim: true, default: "" },
    PostedTime : { type: Date, trim: true, default: "" }
    
})

var TopicsSchema = new Schema({
    topicName : { type: String, trim: true}
    
})






var UserModel =  mongoose.model('User',UserSchema)
var AnswerModel =  mongoose.model('Answer',AnswerSchema)
var ConverstionModel = mongoose.model('Conversation',ConversationSchema)
var QuestionsModel = mongoose.model('Question',QuestionsSchema)
var TopicsModel = mongoose.model('TopicsSchema',TopicsSchema)

module.exports={
    UserModel,
    AnswerModel,
    ConverstionModel,
    QuestionsModel,
    TopicsModel
}
