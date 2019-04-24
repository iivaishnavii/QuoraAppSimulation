import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import login from '../Login/login';
import profile from '../Header/Header';




//Create a Main Component
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*Render Different Component based on Route*/}
                <Route path='/' exact component={login}/> 
                <Route path="/profile" exact component={profile}/>
                 
            </div>
            </BrowserRouter>
        )
    }
}
//Export The Main Component
export default Main;