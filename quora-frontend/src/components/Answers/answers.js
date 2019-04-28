import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import '../Answers/answers.css'

class answer extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            questionId : props.location.state.questionid,
            results : [],
            question : "",
            author :""
        }
        console.log("Props"+JSON.stringify(props.location.state.questionid))
    }
    componentDidMount()
    {
        console.log("Question ID"+this.state.questionId)
        var url = `http://localhost:4000/getAnswers/`+this.state.questionId
        console.log(url)  
        axios.get(url).
        then(response => {
                console.log("in then")
                console.log(response.data)
                this.setState({results : this.state.results.concat(response.data)})
                console.log("After setting",this.state.results)
                this.setState({question:this.state.results[0].question})
                
                
        })
    }
    
    render() { 
        let displayQuestion = <div className="mt-3 questioncss"><b>{this.state.question}</b></div>
        let displayAnswers = this.state.results.map((answer)=>{
            return(
                <div>
                    <div class="feed-user-pic row">
                        <img class="pic ml-3" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/10-Pictures-Of-Katy-Perry-Without-Makeup.jpg"/>
                        <p class="ml-2">{answer.owner}</p>
                    </div>
                    <p>{answer.answer}</p>
                    <button style={{"font-size":"15px"}} class="transButton"><label class="QuoraLabels"><b>Upvote</b></label><i class="fa fa-arrow-circle-up ml-1"></i></button>
                    <label class="ml-1">10.4k</label>
                    <button class="ml-3 transButton" style={{"font-size":"15px"}}><label class="QuoraLabels"><b>Share</b></label><i class="fa fa-share-square ml-1"></i></button>
                    <label class="ml-1">6</label>
                    
                    <button class="ml-3 transButton" style={{"font-size":"15px","float":"right"}}><label class="QuoraLabels"><b>Downvote</b></label> <i class="fa fa-arrow-circle-down"></i></button>
                    <button class="transButton" style={{"float":"right"}}><i class="fas fa-ellipsis-h ml-3" ></i></button>
                    <div class='card-header'>
                        <input type="text" style={{"width":"800px"}} placeholder="Add comment"/>

                    
                    </div>
                    
                    <hr></hr>
                </div>
                
            )
        })
        return ( 
            <div>
                <Header/>
                
                <div class="row">
                    <div class="col-md-2 ">
                    1 of 3
                    </div>
                    <div class="col-md-7">
                        {displayQuestion}
                        <hr></hr>
                        {displayAnswers}
                    </div>
                    <div class="col-md-3 ">
                    3 of 3
                </div>
            </div>

            </div>
         );
    }
}
 
export default answer;