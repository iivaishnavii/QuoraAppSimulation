import React, {Component} from 'react';
import { ROOT_URL } from '../../config/URLsettings';
import axios from 'axios';



//Create a Main Component
class Credentials extends Component {
    constructor(props){
        super(props);
        this.state = {
            Email: 'akhil.kiran@gmail.com',
          
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
          console.log(response.data);
           //update the state with the response data
          
           this.setState({
        
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

    render(){
return (
      <div>
      <div class ="sidebar">
      <div class="col-md-3 width1" >
      <p class="heading"> Credentials & Highlights </p>
                  <hr class ="hr"></hr>
                  <div class="btn-group-vertical">
                  <h5> <i class="fas fa-briefcase"></i>


      {this.state.Profile}  </h5>
      <h5> <i class="fas fa-graduation-cap"></i>


      {this.state.CareerInformation}  </h5>
      <h5> <i class="fas fa-university"></i>


      {this.state.Education}  </h5>
      <h5> <i class="fas fa-map-marker-alt"></i>
       Add a Location Credential  </h5>
      

                  <button id='all' class="button-content " default = "active" onClick ={this.openAll} ><span class ="size-sm" >All Types </span></button>
                  <button id='questions' class="button-content" onClick ={this.openQuestions}  > <span class ="size-sm" >Questions Asked </span></button>
                  <button id='followed' class="button-content" onClick ={this.openFollowed}  > <span class ="size-sm" >Questions Followed </span></button>
                  <button  id='answers' class="button-content" onClick ={this.openAnswers} > <span class ="size-sm" >Answers </span></button>
                  <button  id='posts' class="button-content"  onClick ={this.openPosts} > <span class ="size-sm" >Posts </span></button>
                  </div>

                  <br>
                  </br>
                  <br>
                  </br>
                  </div>
   
   </div>
          )     
   
   
                     
               
                </div>

)
       
    }
}
//Export The Main Component
export default Credentials;

/*return(
  <div className="pageContent" >
  <h4> <i>Credentials & Highlights</i> <i class="far fa-edit"></i>

</h4>
    <h5> <i class="fas fa-briefcase"></i>


      {this.state.Profile}  </h5>
      <h5> <i class="fas fa-graduation-cap"></i>


      {this.state.CareerInformation}  </h5>
      <h5> <i class="fas fa-university"></i>


      {this.state.Education}  </h5>
      <h5> <i class="fas fa-map-marker-alt"></i>
       Add a Location Credential  </h5>
      


      
    
 </div>
) */