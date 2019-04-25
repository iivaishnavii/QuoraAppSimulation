import React, { Component } from "react";
import quora from '../../images/Logo.png';
import quora2 from '../../images/Logo2.png';
import loginForm from '../Login/login';


 export default class Frame extends Component {
  constructor(props) {
    super(props);
   
  }

  render(){
    return (
        <div className='rowC'>
       <img className = "QuoraLogo" style = {{ width : 1500 }}src = {quora}/>
    <loginForm />


     <img className = "QuoraLogo2" style = {{ width : 1500 }}src = {quora2}/>
            
        </div>
    );
    }

 }

