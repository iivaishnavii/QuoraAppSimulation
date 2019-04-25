import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import login from '../Login/login';
import contentHome from '../Content/contentHome'
import questionsAsked from '../Content/QuestionsAsked'
import questionsAnswered from '../Content/QuestionsAnswered'
import questionsFollowed from '../Content/QuestionsFollowed'
import posts from '../Content/Posts'
import allContent from '../Content/allContent'

//import profile from '../Header/Header';
import profile from '../Profile/profile';




//Create a Main Component
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*Render Different Component based on Route*/}
                
                <Route path='/content'  component={contentHome}/> 
                <Route path='/content/questions'  component={questionsAsked}/> 
                <Route path='/content/answers'  component={questionsAnswered}/> 
                <Route path='/content/followedQuestions'  component={questionsFollowed}/> 
                <Route path='/content/posts'  component={posts}/> 
                <Route path= '/content/allContent'  component={allContent}/> 

               

                
                <Route path='/' exact component={login}/> 
                <Route path="/profile" exact component={profile}/>
                 
            </div>
            </BrowserRouter>
        )
    }
}
//Export The Main Component
export default Main;