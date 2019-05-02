

import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {rooturl} from '../../config/settings';
import axios from 'axios';

//create the Navbar Component
class allContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            questions : [],
            answers : [],
            posts :[],
            followed : []
            } 
    }


    componentDidMount () {
        const data2 = {
            email : "jessicasi@gmail.com"
           }
  
          axios.post('http://'+rooturl+':4000/content',data2)
           .then(response => {
            console.log(" inside content req");
            const data = response.data.content;
                    this.setState({
                        questions : this.state.questions.concat(data)
                    
                       });

                       console.log(data);

                       this.setState({
                        answers : this.state.answers.concat(data.QuestionsAnswered)
                    
                       });
                       this.setState({
                        followed : this.state.followed.concat(data.QuestionsFollowed)
                    
                       });
                       this.setState({
                        posts : this.state.posts.concat(data.posts)
                    
                       });

             });
             
             
    }
  
    renderQuestions () {
        if(this.state.questions.length > 0) {
        
        let questions = this.state.questions.map(content => {
        
        return(
        <div >
        <Link class ="questionLink" to ='/content'> {content.Question}</Link>
       
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

renderPosts() {
    if(this.state.posts.length > 0) {
    
    let posts = this.state.posts.map(content => {
    
    return(
    <div >
  
    </div>
     )
  
})
    return (

     <div  style={{ left:"200px", top : "50px", width : "800px"}} >
        {posts}
        </div>
       
     
  );
}
}

renderAnswers() {
    if(this.state.answers.length > 0) {
    
    let answers = this.state.answers.map(content => {
    
    return(
    <div >
    <Link class ="questionLink" to ='/content'> Your Answer to {content.Question}</Link>
   
    <p class ="size-sm">Added {content.PostedTime }</p>
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
    if(this.state.followed.length > 0) {
    
    let followed = this.state.followed.map(content => {
    
    return(
    <div >
    <Link class ="questionLink" to ='/content'> {content.Question}</Link>
   
    <p class ="size-sm" >Followed {content.PostedTime }</p>
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

renderAll () {
    return (
        <div>
        {this.renderQuestions()}
      
        </div>
    );
}

    render(){
    
        return(
            
           <div class="col-md-3" style={{ left:"300px", top : "70px"}} >
            {this.renderAll()}
            </div>


        )
    }
}

export default allContent;

