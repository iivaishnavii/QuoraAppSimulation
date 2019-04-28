var express = require('express')
var app = express()

var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
//Passport Authentication
var passport = require('passport');

app.use(session({
    secret: 'cmpe-273-quora-app',
    resave: false,
    saveUninitialized: false,
    duration: 60 * 60 * 100,
    activeDuration: 5 * 60 * 100
  }));
app.use(cors({origin:'http://localhost:3000',credentials:true}))

require('./config/passport')(passport);

  
app.use(bodyParser.json())


var login = require('./routes/login.js')
var signUp = require('./routes/signUp.js')
var profile = require('./routes/updateProfile.js')


var following = require('./routes/following.js')
var userAnswers = require('./routes/userAnswers.js')
var userQuestions = require('./routes/userQuestions.js')
var getBookmarks = require('./routes/getBookmarks.js')
var updateAnswer = require('./routes/updateAnswer.js')

const createConversation = require('./routes/createConversation');
const getConversation = require('./routes/getConversation');
const getMessage = require('./routes/getMessage');
const createMessage = require('./routes/sendMessage');
const followTopic = require('./routes/followTopic');
const followUser = require('./routes/followUser');
const getFollowers = require('./routes/getFollowers');
const deleteUser = require('./routes/deleteUser')
const getProfile = require('./routes/getProfile')
const getAllQuestions = require('./routes/getAllQuestions')
const createQuestion = require('./routes/createQuestion')
const getAnswers = require('./routes/getAnswers')
var writeAnswer = require('./routes/writeAnswer')
var followQuestion = require('./routes/followQuestion')
var searchQuestion = require('./routes/searchQuestion')


app.use('/login',login)
app.use('/signUp',signUp)
app.use('/updateProfile',profile)
app.use(createConversation);
app.use(getConversation);
app.use(getMessage);
app.use(createMessage);
app.use(followTopic);
app.use(followUser);
app.use(getFollowers);

app.use('/getFollowing',following)
app.use('/userAnswers',userAnswers)
app.use('/userQuestions',userQuestions)
app.use('/getBookmarks',getBookmarks)
app.use('/updateAnswer',updateAnswer)
app.use('/delete',deleteUser)
app.use('/getProfile',getProfile)
app.use('/getAllQuestions',getAllQuestions)
app.use('/createQuestion',createQuestion)
app.use('/getAnswers',getAnswers)
app.use('/getAllAnswers',getAnswers)
app.use('/writeAnswer',writeAnswer)
app.use('/followQuestion',followQuestion)
app.use('/searchQuestion',searchQuestion)
app.use('/searchTopic',searchQuestion)





app.listen(4000,function(){console.log("Server listening on port 4000")})