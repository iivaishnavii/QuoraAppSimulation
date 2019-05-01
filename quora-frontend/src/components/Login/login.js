import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {rooturl} from '../../config/settings';
import SideQuoraPic from '../../images/SideQuoraPic.png';
import RightQuoraPic from '../../images/RightQuoraPic.png';
import { Redirect } from 'react-router';

class Login extends Component{

    state={
        Email:"",
        Password:"",
        emptyValues : false,
        signup : false,
        newsfeed:false
    }
    handleEmail=(e)=>{
        this.setState({Email:e.target.value})
             console.log(this.state)
      }

      handlePassword=(e)=>{
        this.setState({Password:e.target.value})
             console.log(this.state)
      }
      signup=(e)=>{
          this.setState({signup:true})
      }
      
      login=(e)=>{
        if(this.state.Email===""||this.state.Password==="")
        {
            e.preventDefault()
            console.log("Cannot be left empty")
            this.setState({emptyValues :true})
        }
        else{
          this.setState({emptyValues :false})
          
          var url='http://'+rooturl+':4000/login'
          console.log("here");
          axios.post(url,{
            
            Email : this.state.Email,
            Password : this.state.Password
    
    
          }).then(response=>{
            console.log(response.data)
            if(response.status===200){
                this.setState({newsfeed:true})
            }
            
          })
    
        }

}
render(){
    let redirectvar = null
    if(this.state.signup === true)
        redirectvar = <Redirect to='/signUp' />
    if(this.state.newsfeed===true)
        redirectvar=<Redirect to='/newsfeed'/>
    return(
    <div>
        {redirectvar}
      <div class="row">  
       <div class="col-md-4">
        <img className = "SideQuoraPic" style={{ "width" : "413px", "height":"100%"  }} src = {SideQuoraPic}/> 
       </div>   
            
      <div className="mt-5 col-md-4">
          <form>
          <h5 style={{"margin-left":"48%"}}>Login</h5>
          <div className="form-group">
              <div class="row">
                      <div class="col-4"></div>
                      <input type="text" class="form-control col-4" id="Password" onChange={this.handlePassword}  placeholder="Enter Password" />
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
          
          
          <div class="row" >
              
                  <div class="col-4"></div>
                  <button type="submit" class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 col-4" onClick={this.register}>Login</button>
                  <div class="col-4"></div>
              
          </div>
          <div class="row" >
              
              <div class="col-4"></div>
              <button type="submit" class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 col-4" onClick={this.signup}>New User? Sign up!</button>
              <div class="col-4"></div>
          
      </div>
          

          </form>

        </div>
        <div class="col-md-4"> 
          <img className = "RightQuoraPic" style={{ "width" : "351px" ,"height":"100%"}} align="right" src = {RightQuoraPic}/> 
       </div>  
       
  </div>  
    </div>
     
  
  


  );
  }
  


}
export default Login;