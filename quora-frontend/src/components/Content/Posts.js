

import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {rooturl} from '../../config/settings';
import axios from 'axios';

//create the Navbar Component
class Posts extends Component {
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
                        questions : this.state.questions.concat(data.posts)
                    
                       });
             });
             
             
    }
  
    renderQuestions () {
      
        return (
    
           
            <div  style={{ left:"200px", top : "50px", width : "800px"}} >
            
            </div>
           
         
      );
    }



    render(){
    
        return(
            <div>
            


{this.renderQuestions()}
</div>


        )
    }
}

export default Posts;

