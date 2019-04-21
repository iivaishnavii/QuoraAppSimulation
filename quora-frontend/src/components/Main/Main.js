import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import LoginPage from '../Login/login';





//Create a Main Component
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/"  exact component={LoginPage}/> 
                
            </div>
            </BrowserRouter>
        )
    }
}
//Export The Main Component
export default Main;