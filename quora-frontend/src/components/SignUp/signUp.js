import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {rooturl} from '../../config/settings';

class SignUp extends Component{
  state={
    Name:"",
    Email:"",
   // Password:"",
    emptyValues : false,
    Password:""
  }
  handleFirstName=(e)=>{
    this.setState({Name:e.target.value})
         console.log(this.state)
  }
  handleEmail=(e)=>{
    this.setState({Email:e.target.value})
         console.log(this.state)
  }
  handleLastName=(e)=>{
    this.setState({Password:e.target.value})
         console.log(this.state)
  }
  
  register=(e)=>{
    if(this.state.Name===""||this.state.Email===""||this.state.Password==="")
    {
        e.preventDefault()
        console.log("Cannot be left empty")
        this.setState({emptyValues :true})
    }
    else{
      this.setState({emptyValues :false})
      var url='http://'+rooturl+':4000/signup'
      console.log("here");
      axios.post(url,{
        
        Email : this.state.Email,
        Name : this.state.Name,
        Password : this.state.Password


      }).then(response=>{
        console.log(response.data)
      })

    }
  }
  render(){
    return(
      <div>       
            
      <div className="mt-5">
          <form>

          <div className="form-group">
              <div class="row">
                      <div class="col-4"></div>
                      <input type="text" class="form-control col-4" id="Name" onChange={this.handleFirstName}  placeholder="Enter FirstName" />
                      <div class="col-4"></div>
              </div>
          </div>
          
          <div className="form-group">
              <div class="row">
                  <div class="col-4"></div>
                  <input type="text" className="form-control col-4" id="Email" onChange={this.handleEmail} placeholder="Enter your email"/>
                  <div class="col-4"></div>
              </div>
              
          </div>
          <div class="form-group">
              <div class="row">
                  <div class="col-4"></div>
                  <input type="password" className="form-control col-4" id="Password" onChange={this.handleLastName} placeholder="Enter your password"/>
                  <div class="col-4"></div>
              </div>
          </div>
          
          <div class="row" >
              
                  <div class="col-4"></div>
                  <button type="submit" class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 col-4" onClick={this.register}>Register</button>
                  <div class="col-4"></div>
              
          </div>
          

          </form>

  </div>
  </div>  
  
  


  );
  }
  


}
export default SignUp;