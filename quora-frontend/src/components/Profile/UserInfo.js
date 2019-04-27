import React, {Component} from 'react';
import axios from 'axios';
import { ROOT_URL } from '../../config/URLsettings';

//Create a Main Component
export default class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            Email: 'akhil.kiran@gmail.com',
          Name : '',
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

    render(){
        return(
           <div style = {{marginTop : 50}}>
               <h2>{this.state.Name}</h2>
               <h3> {this.state.ProfileCredential} </h3>
               <h3> <i>{this.state.Description} </i> </h3>
           </div> 
        )
    }
}
