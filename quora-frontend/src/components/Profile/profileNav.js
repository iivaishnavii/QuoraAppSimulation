import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import quora from '../../images/QuoraLogo.png';
export default class ProfileNav extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          
<nav class="nav flex-column">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Profile</a>
  <a class="nav-link" href="#">Answers</a>
  <a class="nav-link" href="#">Shares</a>
  <a class="nav-link" href="#">Spaces</a>
  <a class="nav-link" href="#">Posts</a>
  <a class="nav-link" href="#">Blogs</a>
  <a class="nav-link" href="#">Followers</a>
  <a class="nav-link" href="#">Following</a>
  <a class="nav-link" href="#">Edits</a>
  <a class="nav-link" href="#">Actovity</a>
  
</nav>



            
        );
    }
}


