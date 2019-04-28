import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import '../news/News.css'
class News extends Component {
    state = {  
        news : []
    }
    componentDidMount(){
        // var url = `http://localhost:4000/viewCourses/`+localStorage.getItem('userid')
        var token = localStorage.getItem("token")
        var url = `http://localhost:4000/getAllQuestions`
         console.log(url)  
         axios.get(url,{headers : {"Authorization": `Bearer ${token}`}}).
         then(response => {
                 console.log("in then")
                 console.log(response.data)
                 this.setState({news : this.state.news.concat(response.data)})
                 console.log("After setting",this.state.news)
         })
        
 }
 handleSelection= (item)=> (event) =>{
     console.log(item)
 }
    render() { 
        let displayCards = this.state.news.map((question)=>{
            if(question.Answers.length>0)
            {
                return(
                    <div class="card mt-3"  style={{"width": "50rem"}}>
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <Link  to={{pathname : "/answers",state :{'questionid':question._id}}}  > 

                       <h5 class="card-title question">{question.Question}</h5></Link>
                        <div class="feed-user-pic row">
                            <img class="pic ml-3" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/10-Pictures-Of-Katy-Perry-Without-Makeup.jpg"/>
                            <p class="ml-2">{question.Answers[0].owner}</p>
                        </div>
                        <p class="card-text answer">{question.Answers[0].answer}</p>
                        
                        <button style={{"font-size":"15px"}} class="transButton"><label class="QuoraLabels"><b>Upvote</b></label><i class="fa fa-arrow-circle-up ml-1"></i></button>
                        <label class="ml-1">10.4k</label>
                        <button class="ml-3 transButton" style={{"font-size":"15px"}}><label class="QuoraLabels"><b>Share</b></label><i class="fa fa-share-square ml-1"></i></button>
                        <label class="ml-1">6</label>
                        
                        <button class="ml-3 transButton" style={{"font-size":"15px","float":"right"}}><label class="QuoraLabels"><b>Downvote</b></label> <i class="fa fa-arrow-circle-down"></i></button>
                        <button class="transButton" style={{"float":"right"}}><i class="fas fa-ellipsis-h ml-3" onClick={this.handleSelection(question.Answers[0]._id)}></i></button>
                    </div>
                    <div class='card-header'>
                        <input type="text" style={{"width":"750px"}} placeholder="Add comment"/>

                    
                    </div>
                    </div>
                    
                )
            }
               
            
            
        })
        return ( 
            <div>
                {displayCards}
            </div>


         );
    }
}
 
export default News;