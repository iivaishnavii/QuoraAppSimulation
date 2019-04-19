import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import './Login.css';
import quora from '../../images/Logo.png';
import quora2 from '../../images/Logo2.png';

import {Redirect} from 'react-router-dom';

 export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage : ""
    };
  }

  
  

  render(){
   
    return (
        <div>
            <img className = "QuoraLogo" style = {{ width : 1500 }}src = {quora}/>
            <img className = "QuoraLogo2" style = {{ width : 1500 }}src = {quora2}/>
        </div>
    )
  }
}

