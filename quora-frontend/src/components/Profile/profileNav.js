import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import quora from '../../images/QuoraLogo.png';
import style from '../Profile/profile.css';
import { ROOT_URL } from '../../config/URLsettings';
import axios from 'axios';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';


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
            profilepic: ''
        };
        this.addpicture = this.addpicture.bind(this);
    this.savepicture = this.savepicture.bind(this);
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

     addpicture = (e) => {
      if (e.target.name === 'selectedFile') {
          this.setState({
              selectedFile: e.target.files[0]
          })
      }
  }

  componentWillMount()
    {
    
        axios.post(`${ROOT_URL}/getprofilepic/profile_${this.state.Email}.jpg`)
                .then(response => {
                    console.log("Imgae Res : ",response);
                    let imagePreview = 'data:image/jpg;base64, ' + response.data;
                    this.setState({
                        profilepic: imagePreview
                    })
                }); 

                console.log(this.state.profilepic);

    }

  savepicture = (e) =>
{
  
    const desc = this.state.Email;

    const  data  = Object.assign({},this.state);

    //const { files } = this.state;
    let formData = new FormData();
    console.log(desc);
    console.log(data.selectedFile);

    formData.append('description', desc);
    formData.append('selectedFile', data.selectedFile);
 

    axios.post(`${ROOT_URL}/addpic`, formData)
    .then((result) => {
      this.setState({selectedFile : ''});
      this.componentDidMount();
  });
   

}

     openQuestions =(e) => {
        this.props.history.push('/profile/questions')
      }

      openAnswers =(e) => {
        this.props.history.push('/profile/answers')
      }
      openEmpty =(e) => {
        this.props.history.push('/profile')
      }
      openFollowers =(e) => {
        this.props.history.push('/profile/Followers')
      }
      openFollowing =(e) => {
        this.props.history.push('/profile/Following')
      }
      editCrentials =(e) => {
        console.log("editing");
        this.props.history.push('/editCredentials')
      }


    

    render() {

       {/* let topics = this.state.Topic.map(topic => {
            return(      
          <div>
          {topic.topicName}
          </div>      
        )
        }) */}

        return(
            <div>
               <Header/>
                <div class ="sidebar-profile1">
                <div className = 'row'>
           <div className = 'col-sm-8' >
            <div class = "header" style = {{marginleft : 100,
    width : 744,
    height : 164}} >
            <div className = 'row' style = {{height : 180}}>
            <div className = 'col-sm-4' style = {{height : 180}} >
            <div style = {{ width : 200, marginleft : 50}}>
       <img  style = {{ width : 142, height : 142, marginleft : 100}}src={this.state.profilepic}
                     className="image--cover" />
                <form >
                    <div className="form-group" style = {{width : 300}}>
                        <input type="file" className="profile" name="selectedFile" onChange={this.addpicture} style = {{width : 100}}/> &nbsp;
                        <button style = {{width : 50}}
           
            onClick = {this.savepicture} >
            <div class = "edit_icon"></div>
          save
          </button>     
                        
                       
            
            
          
                    </div>
                </form>
                </div>
                
                 </div> 
                 <div className = 'col-sm-8' >
                  <h3 style = {{marginTop : 30}}> <b>{this.state.Name}  </b>  <button onClick = {this.editCrentials}> <i class="fas fa-pen"></i>  </button> </h3> 
                  
                   <h4 > {this.state.ProfileCredential}   </h4> 
                   <h5 > <b> <i> {this.state.Description} </i> </b>  </h5> 
                   <button id='all' class="button-content " ><span class ="size-sm" > {this.state.Followers.length} Followers </span></button>
                 </div> 
                 </div>
             <div>
              
             </div>
    </div>
            
            <hr class ="hr" style = {{width : 744, marginLeft : 120}}></hr>    
         
            <div class="col-md-3 width11" >
            <p class="heading"> Feeds </p>
                        <hr class ="hr"></hr>
                        <div class="btn-group-vertical">
                        <button id='all' class="button-content " default = "active" onClick ={this.openEmpty}><span class ="size-sm" >Profile </span></button>
                        <button id='questions' class="button-content" onClick ={this.openAnswers}  > <span class ="size-sm" >Answers  {this.state.QuestionsAnswered.length}</span></button>
                        <button id='followed' class="button-content" onClick ={this.openQuestions}  > <span class ="size-sm" >Questions {this.state.Questions.length} </span></button>
                        <button  id='posts' class="button-content"  onClick ={this.openPosts} > <span class ="size-sm" >Shares 0</span></button>
                        <button id='all' class="button-content "  onClick ={this.openEmpty} ><span class ="size-sm" >Spaces 0 </span></button>
                        <button id='all' class="button-content "  onClick ={this.openEmpty} ><span class ="size-sm" >Posts 0</span></button>
                        <button id='all' class="button-content "  onClick ={this.openEmpty} ><span class ="size-sm" >Blogs 0 </span></button>
                        <button id='all' class="button-content "  onClick ={this.openFollowers} ><span class ="size-sm" >Followers {this.state.Followers.length}</span></button>
                        <button id='all' class="button-content "  onClick ={this.openFollowing} ><span class ="size-sm" >Following {this.state.Following.length}</span></button>
                        <button id='all' class="button-content "  onClick ={this.openEmpty} ><span class ="size-sm" >Edits </span></button>
                        <button id='all' class="button-content "  onClick ={this.openEmpty} ><span class ="size-sm" >Activity </span></button>
                        </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        </div>
                        </div>  
                    { /*  <div class ="sidebar-profile11" style = {{float: "right"}}>  */}
           
            
                   
         <div className = 'col-sm-4' style = {{left : 450}}>
            <div class="col-md-3 width12" >
            <p class="heading" style = {{width : 250}}> Credentials & Highlights  &nbsp; <button onClick = {this.editCrentials}> <i class="fas fa-pen"></i>  </button> </p>
                        <hr class ="hr" style = {{width:215}} ></hr>
                      
            <div class="btn-group-vertical1" style = {{height : 200, width : 200}}>
            <p> <i class="fas fa-briefcase"></i> &nbsp;


            <span> {this.state.Profile} </span>  </p>
      <p> <i class="fas fa-graduation-cap"></i> &nbsp;


      <span>{this.state.CareerInformation} </span> </p>
      <p> <i class="fas fa-university"></i> &nbsp;


      <span>{this.state.Education} </span> </p>
      <p style = {{width : 210}}> <i class="fas fa-map-marker-alt"></i> &nbsp;
      <span> Add a Location Credential </span>  </p>
      <p> <i class="fas fa-eye"></i>


      <span>{this.state.ProfileViews} Profile views </span> </p>
            
            </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        </div>

                        <div class="col-md-3 width12" >
            <p class="heading" style = {{width : 250}} > Knows About &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<button onClick = {this.editCrentials}> <i class="fas fa-pen"></i>  </button>  </p>
                        <hr class ="hr" style = {{width:215}}></hr>
                      
                       {/*{topics} */}
                     
                        </div>
                      { /* </div> */ }
                      </div>
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
                     

                      <Button style = {{width : 200}}
            block
            type="button"  onClick = {this.savepicture} >
          Save Profile Picture
          </Button>     
                        
         
     ); */
