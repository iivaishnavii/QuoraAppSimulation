

import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {rooturl} from '../../config/settings';
import axios from 'axios';

//create the Navbar Component
class Topic extends Component {
    constructor(props){
        super(props);

        this.state = {
            topicRelatedQuestions : [],
            topicRelatedAnswers : [],
            topicsFollowed : []

            } 
    }


    componentDidMount () {
        const data = {
            email : "jessicasi@gmail.com",
            topic : "Chief Mnister"
           }
  
          axios.post('http://'+rooturl+':4000/userQuestions',data)
           .then(response => {
           
            const result = response.data.result;
            console.log(response);
                    this.setState({
                        topicRelatedQuestions : this.state.topicRelatedQuestions.concat(result.Questions)
                    
                       });
             });

             axios.post('http://'+rooturl+':4000/userAnswers',data)
             .then(response => {
             
              const result = response.data.result;
              console.log(response);
                      this.setState({
                        topicRelatedAnswers : this.state.topicRelatedAnswers.concat(result.Questions)
                      
                         });
               });

               axios.post('http://'+rooturl+':4000/getUserFollowingData',data)
               .then(response => {
               
                const result = response.data.result;
                console.log(response);
                        this.setState({
                            topicsFollowed : this.state.topicsFollowed.concat(result.Questions)
                        
                           });
                 });

       
             
    }
  
    renderQuestions () {

       console.log(this.state.topicRelatedQuestions) ;
        if(this.state.topicRelatedQuestions.length > 0) {
        
        let questions = this.state.topicRelatedQuestions.map(content => {
        
        return(
            <div >
            <Link class ="questionLink" to ='/content'>  {content.Question}</Link>
           
            <p class ="size-sm">Asked {content.PostedTime }</p>
           <hr /> 
            </div>
        
        
        )
      
    })
        return (
    
           
            <div  style={{ left:"200px", top : "50px", width : "800px"}} >
            {questions}
            </div>
           
         
      );
    }
}

renderAnswers () {

    console.log(this.state.topicRelatedAnswers) ;
     if(this.state.topicRelatedAnswers.length > 0) {
     
     let answers = this.state.topicRelatedAnswers.map(content => {
     
     return(
         <div >
         <Link class ="questionLink" to ='/content'>  {content.Question}</Link>
        
         <p class ="size-sm">Asked {content.PostedTime }</p>
        <hr /> 
         </div>
     
     
     )
   
 })
     return (
 
        
         <div  style={{ left:"200px", top : "50px", width : "800px"}} >
         {answers}
         </div>
        
      
   );
 }
}



renderFollowed () {

    console.log(this.state.topicRelatedAnswers) ;
     if(this.state.topicRelatedAnswers.length > 0) {
     
     let followed = this.state.topicRelatedAnswers.map(content => {
     
     return(
         <div >
         <Link class ="questionLink" to ='/content'>  {content.Question}</Link>
        
         <p class ="size-sm">Asked {content.PostedTime }</p>
        <hr /> 
         </div>
     
     
     )
   
 })
     return (

          <div  style={{ left:"200px", top : "50px", width : "800px"}} >
         {followed}
         </div>
        
      
   );
 }
}



    render(){
    
       
        return(
            <div>
         
       
          {this.renderFollowed()}
           </div>

        );
    }
}

export default Topic;

