

import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {rooturl} from '../../config/settings';
import axios from 'axios';
import {questions} from '../Content/QuestionsAsked'
import './content.css';



//create the Navbar Component
class ContentHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            contents : [],
          //  Questions : [],
            Answers :[],
            Followed : [],
            type : ""
            } 
    }

    componentDidMount () {
        const data = {
            email : "user10@gmail.com"
           }
  
          axios.post('http://'+rooturl+':4000/content',data)
           .then(response => {

                    this.setState({
                        contents : this.state.contents.concat(response.data.content)
                    
                       });
             });
             
             
    }

  

content() {
//     console.log('in content');
//     console.log(this.state.type);
//     console.log( this.state.contents);
   
//       if(this.state.contents.length > 0) {
//         console.log('inside cintnetns'); 
//           if(this.state.type === 'questions') {
//             console.log('inside questions'); 
//            return ( 
//                this.renderAll()
//                 );
        
     
//     }
// }
this.props.history.push('/content/allContent');
  }

  open = (e) => {

      this.setState ({
          type : e.target.id
      })
      console.log(e.target.id);
  }
  
  
  renderAll () {

    console.log('in render all');
    console.log(this.state.contents);
    console.log(this.state.contents[0].Questions);
 
    let questions = this.state.contents[0].Questions.map(content => {
    
    return(
    <div >
    <Link to ='/content'>{content.Question}</Link>
   
    <p>Added {content.PostedTime }</p>
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

  openQuestions =(e) => {
    this.props.history.push('/content/questions')
  }

  openAnswers =(e) => {
    this.props.history.push('/content/answers')
}

openFollowed =(e) => {
    this.props.history.push('/content/followedQuestions')
}

openPosts =(e) => {
    this.props.history.push('/content/posts')
}

openAll =(e) => {
    // this.props.history.push('/content')
    this.props.history.push('/content/allContent');
}



    render(){
    
        return(
            <div>
            <div class ="sidebar">
            <div class="col-md-3 width1" >
            <p class="heading"> By Content Type </p>
                        <hr class ="hr"></hr>
                        <div class="btn-group-vertical">
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
            
            
            <p class="heading"> By Topic </p>
            <hr class ="hr"></hr>
            
            <div class ="spacing">
            <p class="pStyle">All Topics</p>
            <input type ='text' class = 'size-sm inputBox' placeholder=  'Search for a topic'></input>
            
            </div>
            
            
            <br></br>
            <br></br> 
            <p class="heading"> By Year </p>
            <hr class ="hr"></hr>
            <div class="btn-group-vertical">
            <button class="button-content"><span class ="size-sm" >All Time </span></button>
            <button class="button-content"  > <span class ="size-sm" >2019</span></button>
            <button class="button-content"  > <span class ="size-sm" >2018</span></button>
            <button class="button-content" > <span class ="size-sm" >2017</span></button>
            <button class="button-content"  > <span class ="size-sm" >2016</span></button>
            </div>
            
            
            <br></br>
            <br></br>  
            
            <p class="heading"> Sort Order </p>
            <hr class ="hr"></hr>
            <div class="btn-group-vertical">
            <button class="button-content"><span class ="size-sm" >Newest First</span></button>
            <button class="button-content"  > <span class ="size-sm" >Oldest First</span></button>
            
            </div>
         
            </div>
         
</div>
            

            <div class="col-md-3" style={{ left:"300px", top : "70px"}} >
            <p class="heading" > Your Content </p>
            <hr style ={{ width : "800px"}}></hr>
            
            </div>
            

                  
            
             </div>


        )
    }
}

export default ContentHome;


