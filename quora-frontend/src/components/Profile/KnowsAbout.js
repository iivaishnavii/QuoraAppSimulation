import React, {Component} from 'react';

import { ROOT_URL } from '../../config/URLsettings';
import axios from 'axios';


//Create a Main Component
export default class KnowsAbout extends Component {
    constructor(props){
        super(props);
        this.state = {
            Email: 'akhil.kiran@gmail.com',
          //Name : localStorage.getItem('name'),
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
             /*Email: 'akhil.ramesh@gmail.com',
             Name : localStorage.getItem('name'),
             token : localStorage.getItem('token'), */
            // Name: '',
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

        let people = this.state.Topics.map(topic => {
            return(
        <p> {topic.topicName}</p>
        
              
        
            )
        })
        return(
            <div className="KnowsAbout" >
               <div>Knows About </div>
               <hr class ="hr"></hr>
               {people}
           </div>
        )
    }
}
