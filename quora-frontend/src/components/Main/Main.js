import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import login from '../Login/login';
import profile from '../Header/Header';
import newsfeed from '../NewsFeed/newsfeed'
import News from '../news/News'
import answer from '../Answers/answers'
import contentHome from '../Content/contentHome'

import Model from '../Modal/Model'
//import profile from '../Header/Header';
//import profile from '../Profile/profile';
import frame from '../Frame/frame';
import signUp from '../SignUp/signUp';
import profileAnswers from '../Profile/UserAnswers';
import profileQuestions from '../Profile/UserQuestions';
//import profileFollowers from '../Profile/UserFollowers';
import profileFollowers from '../Profile/ProfileFollowers';
import profileFollowing from '../Profile/ProfileFollowing';
import profileNav from '../Profile/profileNav';
import editProfile from '../Profile/editProfile';
import editCredentials from '../Profile/editCredentials';

import searchTopic from '../Profile/UserTopicSearch';
// import SimpleDialogDemo from '../sample/sample';



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
                <Route path="/modal" exact component={Model}/>

                <Route path='/' exact component={frame}/>
                {/* <Route path='/a' exact component={SimpleDialogDemo}/> */}
                
                
                <Route path='/content'  component={contentHome}/> 
           
           
                

                
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