import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import quora from '../../images/QuoraLogo.png';
export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          
<nav class="navbar navbar-expand-lg navbar-light bg-light">

            <img className = "QuoraLogo" style = {{ width : 150 }}src = {quora}/>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
    
   
      <a class="nav-link" href="#">  <i class="fas fa-home fa-2x"></i> Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">  <i class="fas fa-edit fa-2x"></i> Answer</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">  <i class="fas fa-users fa-2x"></i> Spaces</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"> <i class="far fa-bell fa-2x"></i> Notifications</a>
    </li>
    <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2"  style = {{width : 326}}type="search" placeholder="Search Quora" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search </button>
  </form>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Profile
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
            <button type="button" class="btn btn-danger" align = "right" > Add Question or Link</button>
            
            
            </div>
        </li>  
    
  </ul>
  
</div>
</nav>



            
        );
    }
}


/*<div className = "row">
            
            
            <div className = "col-sm-1" > 
            </div>
            <div className = "col-sm-1" align ="center"> 
             
             <span>Quora </span>
            
            </div>
            <div className = "col-sm-1" align ="center"> 
            <i class="fas fa-home"></i>


             Home
            
            </div>
            <div className = "col-sm-1" align ="center"> 
           
             Answer
            
            </div>

            <div className = "col-sm-1" align ="center"> 
            <i class="fas fa-users"></i>


             Spaces
            
            </div>

            <div className = "col-sm-2" align ="center"> 
            <i class="far fa-bell"></i>


             Notifications
            
            </div>
            <div className = "col-sm-2" align ="center"> 
             
             Search
            
            </div>
            <div className = "col-sm-1" align ="center"> 
             
             Picture
            
            </div>
            <div className = "col-sm-1" align ="center"> 
            <button type="button" class="btn btn-danger" align = "right" > Add Question or Link</button>
            
            
            </div>
          

            </div> */