import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import login from '../Login/login';
<<<<<<< HEAD
import profile from '../Header/Header';
import newsfeed from '../NewsFeed/newsfeed'
import News from '../news/News'
import answer from '../Answers/answers'
=======
import contentHome from '../Content/contentHome'
import questionsAsked from '../Content/QuestionsAsked'
import questionsAnswered from '../Content/QuestionsAnswered'
import questionsFollowed from '../Content/QuestionsFollowed'
import posts from '../Content/Posts'
import allContent from '../Content/allContent'

//import profile from '../Header/Header';
import profile from '../Profile/profile';
import frame from '../Frame/frame';
import signUp from '../SignUp/signUp';
import profileAnswers from '../Profile/UserAnswers';
import profileQuestions from '../Profile/UserQuestions';
import profileFollowers from '../Profile/UserFollowers';
import profileFollowing from '../Profile/UsersFollowing';
import profileNav from '../Profile/profileNav';


>>>>>>> 4e6b2e3471e5bf994757bc3f9e6c589bbe2f4b59

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*Render Different Component based on Route*/}
<<<<<<< HEAD
                <Route path='/' exact component={login}/> 
                <Route path="/profile" exact component={profile}/>
                <Route path="/newsfeed" exact component={newsfeed}/>
                <Route path="/newscards" exact component={News}/>
                <Route path="/answers" exact component={answer}/>
=======

                
                
                
                <Route path='/content'  component={contentHome}/> 
                <Route path='/content/questions'  component={questionsAsked}/> 
                <Route path='/content/answers'  component={questionsAnswered}/> 
                <Route path='/content/followedQuestions'  component={questionsFollowed}/> 
                <Route path='/content/posts'  component={posts}/> 
                <Route path= '/content/allContent'  component={allContent}/> 

                <Route path='/' exact component={frame}/>
                <Route path="/profile" exact component={profileNav}/>
                <Route path="/profileAnswers" exact component={profileAnswers}/>
                <Route path="/profileQuestions" exact component={profileQuestions}/>
                <Route path="/profileFollowers" exact component={profileFollowers}/>
                <Route path="/profileFollowing" exact component={profileFollowing}/>
               
>>>>>>> 4e6b2e3471e5bf994757bc3f9e6c589bbe2f4b59

                 
            </div>
            </BrowserRouter>
        )
    }
}
//Export The Main Component
export default Main;