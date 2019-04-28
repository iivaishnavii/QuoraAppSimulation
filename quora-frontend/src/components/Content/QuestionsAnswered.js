

import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {rooturl} from '../../config/settings';
import axios from 'axios';

//create the Navbar Component
class QuestionsAnswered extends Component {
    constructor(props){
        super(props);

        this.state = {
            questions : []
            } 
    }


    componentDidMount () {
        const data = {
            email : "user10@gmail.com"
           }
  
          axios.post('http://'+rooturl+':4000/content',data)
           .then(response => {
            const data = response.data.content;
                    this.setState({
                        questions : this.state.questions.concat(data.QuestionsAnswered)
                    
                       });
             });
             
             
    }
  
    renderQuestions () {
        if(this.state.questions.length > 0) {
        
        let questions = this.state.questions.map(content => {
        
        return(
            <div >
            <Link class ="questionLink" to ='/content'> <span class = 'size-sm'>Your Answer to</span> {content.Question}</Link>
           
            <p class ="size-sm">Added {content.PostedTime }</p>
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


    render(){
    
        return(
            <div class="col-md-3" style={{ left:"300px", top : "70px"}} >
            {this.renderQuestions()}
           </div>

        )
    }
}

export default QuestionsAnswered;
