import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import quora from '../../images/QuoraLogo.png';
import {Modal,Button} from 'react-bootstrap'
import Model from '../Modal/Model'
import axios from 'axios'
import Search from './Search.js'

//import console = require('console');
export default class Header extends Component {
    constructor(props){
        super(props);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        question : ""
      };
    }

    handleQuestion=(e)=>{
      this.setState({question : e.target.value})
      console.log(this.state.question)
    }

    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      console.log("AAAA")
      this.setState({ show: true });
    }
    
    addQuestion=()=>
    {
      //console.log("Question"+this.state.question)

      var data=
        {
          "Question" : this.state.question,
          "QuestionOwner" : "asimq@gmail.com",
          "Topics" : "Random",
          "PostedTime" : "23rdApril, 10:30pm"
        }
        console.log(data)
      
      axios.post('http://localhost:4000/createQuestion/',data)
      .then(response=>{
      this.setState({ show: false });
      window.location.reload();
      console.log("Added")
      })
      .catch(err=>{
         console.log("Failed to add question"+err)
      })
    

    }
  
    render() {
        return (
<div>
          
<nav class="navbar navbar-expand-lg navbar-light bg-light">

            <img className = "QuoraLogo" style = {{ width : 120, height: 50, marginLeft: 100 }}src = {quora}/>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" style={{"fontSize":"small"}} href="#">  <i class="fas fa-home fa-2x"></i> Home <span class="sr-only">(current)</span></a>
               </li>
                <li class="nav-item">
                 <a class="nav-link" style={{"fontSize":"small"}} href="#">  <i class="fas fa-edit fa-2x"></i> Answer</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{"fontSize":"small"}} href="#">  <i class="fas fa-users fa-2x"></i> Spaces</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{"fontSize":"small"}} href="#"> <i class="far fa-bell fa-2x"></i> Notifications</a>
                </li>    
                
                <li style={{height:"3%"}}></li>
                <form class="form-inline my-2 my-lg-0">
                 <Search></Search>
                </form>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{"fontSize":"small", "height":"2%", marginTop: "1%"}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-x"></i> Profile
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Profile</a>
                    <a class="dropdown-item" href="#">Blogs</a>
                    <a class="dropdown-item" href="#">Messages</a>
                    <a class="dropdown-item" href="#">Your Content</a>
                    <a class="dropdown-item" href="#">Stats</a>
                    <a class="dropdown-item" href="#">Create Ad</a>
                    <a class="dropdown-item" href="#">Settings</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <div className = "col-sm-1" align ="center">   
                    <button type="button" class="btn btn-danger" align = "right" style={{"fontSize":"small", marginTop: 5.5}} onClick={this.handleShow}> Add Question or Link</button>            
                  </div> 
                </li>  
    
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{"color":"#b92b27","font-weight":500,"font-family":"Helvetica Neue,Helvetica,Arial,sans-serif","font-size": "15px"}}>Add Question</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input type="text" placeholder="Start your question with What , How , Why" onChange={this.handleQuestion}></input>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={this.addQuestion}>
                        Add Question
                    </Button>
                  </Modal.Footer>
                </Modal>

              </ul>
              </div>
              </nav>
              </div>
 
  
          


            
        );
    }
}



