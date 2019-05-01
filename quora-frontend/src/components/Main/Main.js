import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import login from '../Login/login';
import profile from '../Header/Header';
import newsfeed from '../NewsFeed/newsfeed'
import News from '../news/News'
import answer from '../Answers/answers'
import contentHome from '../Content/contentHome'
import questionsAsked from '../Content/QuestionsAsked'
import questionsAnswered from '../Content/QuestionsAnswered'
import questionsFollowed from '../Content/QuestionsFollowed'
import posts from '../Content/Posts'
import allContent from '../Content/allContent'

//import profile from '../Header/Header';
//import profile from '../Profile/profile';
import frame from '../Frame/frame';
import signUp from '../SignUp/signUp';
import profileAnswers from '../Profile/UserAnswers';
import profileQuestions from '../Profile/UserQuestions';
import profileFollowers from '../Profile/UserFollowers';
import profileFollowing from '../Profile/UsersFollowing';
import profileNav from '../Profile/profileNav';
import editProfile from '../Profile/editProfile';
import editCredentials from '../Profile/editCredentials';
import searchTopic from '../Profile/UserTopicSearch';



//Create a Main Component
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*Render Different Component based on Route*/}
                
                <Route path='/signUp' exact component={signUp}/> 
                <Route path="/profile" exact component={profile}/>
                <Route path="/newsfeed" exact component={newsfeed}/>
                <Route path="/newscards" exact component={News}/>
                <Route path="/answers" exact component={answer}/>

                
                
                
                <Route path='/content'  component={contentHome}/> 
                <Route path='/content/questions'  component={questionsAsked}/> 
                <Route path='/content/answers'  component={questionsAnswered}/> 
                <Route path='/content/followedQuestions'  component={questionsFollowed}/> 
                <Route path='/content/posts'  component={posts}/> 
                <Route path= '/content/allContent'  component={allContent}/> 

                <Route path='/' exact component={frame}/>
               {/* <Route path="/profile"  component={profileNav}/> */}
                <Route path="/profile/answers" exact component={profileNav}/>
                <Route path="/profile/questions" exact component={profileNav}/>
                <Route path="/profile/Followers" exact component={profileFollowers}/>
                <Route path="/profile/Following" exact component={profileFollowing}/>
                <Route path="/editCredentials" exact component={editCredentials}/>
                <Route path="/editProfile" exact component={editProfile}/>
                <Route path="/searchTopicByUser" exact component={searchTopic}/>
               
                 
            </div>
            </BrowserRouter>
        )
    }
}
//Export The Main Component
export default Main;