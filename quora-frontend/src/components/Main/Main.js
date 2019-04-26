import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import login from '../Login/login';
//import profile from '../Header/Header';
import profile from '../Profile/profile';
import frame from '../Frame/frame';
import signUp from '../SignUp/signUp';
import profileAnswers from '../Profile/UserAnswers';
import profileQuestions from '../Profile/UserQuestions';
import profileFollowers from '../Profile/UserFollowers';
import profileFollowing from '../Profile/UsersFollowing';



//Create a Main Component
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*Render Different Component based on Route*/}
                <Route path='/' exact component={frame}/> 
                <Route path='/signUp' component={signUp}/>
                <Route path="/profile" exact component={profile}/>
                <Route path="/profileAnswers" exact component={profileAnswers}/>
                <Route path="/profileQuestions" exact component={profileQuestions}/>
                <Route path="/profileFollowers" exact component={profileFollowers}/>
                <Route path="/profileFollowing" exact component={profileFollowing}/>
               

                 
            </div>
            </BrowserRouter>
        )
    }
}
//Export The Main Component
export default Main;