import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import quora from '../../images/QuoraLogo.png';
import style from '../Profile/profile.css';
import { ROOT_URL } from '../../config/URLsettings';
import axios from 'axios';
export default class ProfileNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            Email: 'akhil.ramesh@gmail.com',
            Name : localStorage.getItem('name'),
            token : localStorage.getItem('token'),
           // Name: '',
            City: '',
            State: '',
            ZipCode: '',
            Profile: '',
            Education: '',
            CareerInformation: '',
            Description: '',
            ProfileCredential: '',
            Questions: [],
            QuestionsFollowed: [],
            AnswersBookmarked : [],
            Topics : [],
            Followers : [],
            Following : [],
            ProfileViews : '',
            QuestionsAnswered: [],
        };
    }

    

    render() {
        return (
       <div className = "pageContent" style = {{width : 200}}>
       
<nav class="nav flex-column" style = {{marginLeft : 100, width : 82}} >
  <a class="nav-link" id = 'item' href="#">Profile</a>
  <a class="nav-link" id = 'item' href="/profileAnswers">Answers</a>
  <a class="nav-link" id = 'item' href="/profileQuestions">Questions</a>
  <a class="nav-link" id = 'item' href="#">Shares</a>
  <a class="nav-link" id = 'item' href="#">Spaces</a>
  <a class="nav-link" id = 'item'href="#">Posts</a>
  <a class="nav-link" id = 'item' href="#">Blogs</a>
  <a class="nav-link"  id = 'item'href="/profileFollowers">Followers</a>
  <a class="nav-link" id = 'item' href="/profileFollowing">Following</a>
  <a class="nav-link"  id = 'item' href="#">Edits</a>
  <a class="nav-link"  id = 'item' href="#">Activity</a>
  
</nav>
</div>   



            
        );
    }
}


