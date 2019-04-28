import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import quora from '../../images/QuoraLogo.png';
import style from '../Profile/profile.css';
import { ROOT_URL } from '../../config/URLsettings';
import axios from 'axios';
import Header from '../Header/Header';

export default class ProfileNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            Email: 'akhil.kiran@gmail.com',
            //Email : localStorage.getItem('email');
            token : localStorage.getItem('token'),
            Name: '',
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

    componentDidMount(){

        axios.get(ROOT_URL +`/getProfile/${this.state.Email}`, {
             headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}
         }).then((response) => {
          var  data = response.data;
          console.log(response);
          console.log(response.data);
           //update the state with the response data
          
           this.setState({
             Name : data.Name,
             City: data.City,
             State: data.State,
             ZipCode: data.ZipCode,
             Profile: data.Profile,
             Education: data.Education,
             CareerInformation: data.CareerInformation,
             Description: data.Description,
             ProfileCredential: data.ProfileCredential,
             Questions: data.Questions,
             QuestionsFollowed: data.QuestionsFollowed,
             AnswersBookmarked : data.QuestionsAnswered,
             Topics : data.Topics,
             Followers : data.Followers,
             Following : data.Following,
             //ProfileViews : '',
             QuestionsAnswered: data.QuestionsAnswered,
           });
         });
            
     }

    

    render() {

        return(
            <div>
               <Header/>
                <div class ="sidebar-profile1">
            <div class = "header" style = {{marginleft : 100,
    width : 744,
    height : 164}} >
     <div style = {{width : 0}}>
                 <div class="img" style = {{width : 142, height : 142}}></div>
                 <div class="header_content" style = {{width: 572, height: 158}} > </div>
             </div>
             <div>
              
             </div>
    </div>
            
            <hr class ="hr" style = {{width : 744, marginLeft : 120}}></hr>    
         
            <div class="col-md-3 width11" >
            <p class="heading"> Feeds </p>
                        <hr class ="hr"></hr>
                        <div class="btn-group-vertical">
                        <button id='all' class="button-content " default = "active" onClick ={this.openAll} ><span class ="size-sm" >Profile </span></button>
                        <button id='questions' class="button-content" onClick ={this.openQuestions}  > <span class ="size-sm" >Answers  {this.state.QuestionsAnswered.length}</span></button>
                        <button id='followed' class="button-content" onClick ={this.openFollowed}  > <span class ="size-sm" >Questions {this.state.Questions.length} </span></button>
                        <button  id='posts' class="button-content"  onClick ={this.openPosts} > <span class ="size-sm" >Shares 0</span></button>
                        <button id='all' class="button-content "  onClick ={this.openAll} ><span class ="size-sm" >Spaces 0 </span></button>
                        <button id='all' class="button-content "  onClick ={this.openAll} ><span class ="size-sm" >Posts 0</span></button>
                        <button id='all' class="button-content "  onClick ={this.openAll} ><span class ="size-sm" >Blogs 0 </span></button>
                        <button id='all' class="button-content "  onClick ={this.openAll} ><span class ="size-sm" >Followers {this.state.Followers.length}</span></button>
                        <button id='all' class="button-content "  onClick ={this.openAll} ><span class ="size-sm" >Following {this.state.Following.length}</span></button>
                        <button id='all' class="button-content "  onClick ={this.openAll} ><span class ="size-sm" >Edits </span></button>
                        <button id='all' class="button-content "  onClick ={this.openAll} ><span class ="size-sm" >Activity </span></button>
                        </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        </div>
                        </div>  
                        <div class ="sidebar-profile11" style = {{float: "right"}}>
           
            
            <hr class ="hr" style = {{width : 744, marginLeft : 120}}></hr>    
         
            <div class="col-md-3 width12" >
            <p class="heading"> Credentials & Highlights </p>
                        <hr class ="hr" style = {{width:215}} ></hr>
                      
            <div class="btn-group-vertical">
            <p> <i class="fas fa-briefcase"></i>


      {this.state.Profile}  </p>
      <p> <i class="fas fa-graduation-cap"></i>


      {this.state.CareerInformation}  </p>
      <p> <i class="fas fa-university"></i>


      {this.state.Education}  </p>
      <p> <i class="fas fa-map-marker-alt"></i>
       Add a Location Credential  </p>
            
            </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        </div>

                        <div class="col-md-3 width12" >
            <p class="heading"> Knows About  </p>
                        <hr class ="hr" style = {{width:215}}></hr>
                      
            
                        <br>
                        </br>
                        <br>
                        </br>
                        </div>
                        </div>  
                   

                      </div>
         
                 )
       
    }


}


/*return (
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




                     <div class="col-md-3" style={{ left:"300px", top : "70px"}} >
                     <p class="heading" > Your Content </p>
                     <hr style ={{ width : "800px"}}></hr>
                     
                     </div>
                     

         
     ); */
