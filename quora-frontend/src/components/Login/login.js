

import cookie from 'react-cookies';
import {Redirect} from 'react-router';
 import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
 import PropTypes from 'react';
import {Field,reduxForm} from 'redux-form';
import axios from 'axios';
// import {rooturl} from '../config/settings';
import React, { Component } from 'react';
import quora from '../../images/Logo.png';
import quora2 from '../../images/Logo2.png';

import { submitLogin } from '../../actions/login'



class login extends Component{
  
    constructor(props){
    
        super(props);
  
        this.state = {
          email : "",
          passwrd : "",
          formValidationFailure: false,
          isValidationFailure: true,
          errorRedirect: false

      }
    }

    static propTypes = {
        handleSubmit: PropTypes.func,
        fields: PropTypes.object
      }
 
 

    //Define component to be rendered
    renderField(field) {

      const { meta: { touched, error } } = field;
      const className = touched && error ? "form-control form-control-lg is-invalid" : "form-control form-control-lg";
      const inputType = field.type;
      const inputPlaceholder = field.placeholder;
      const errorMessageStyling =  touched && error ? "text-danger" : "";

      return (

          <div className="form-group">
              <label>{field.label}</label>
              <input className={className} type={inputType} placeholder={inputPlaceholder} {...field.input} />
              <div className={errorMessageStyling}>
                  <div>{touched ? error : ""}</div>
                 
              </div>
          </div>
      );
  }

   onSubmit(values) {
       //     axios.defaults.withCredentials = true;
             var data = {
                 email : values.email,
                 passwrd : values.passwrd
             };
    
             this.props.submitLogin(data);
         }
    


    render(){

      let redrirectVar = null;        

      if (this.props.loginStateStore.result) {
          if(this.props.loginStateStore.result.isAuthenticated === true){
              redrirectVar = <Redirect to="/home" />
          }
         
      }


      let errorPanel = null;
      if (this.props.loginStateStore.result) {
      if (this.props.loginStateStore.result.isAuthenticated === false) {
          errorPanel = <div>
              <div className="alert alert-danger" role="alert">
                  <strong>Validation Error!</strong> Username and Password doesn't match!
              </div>
          </div>
      }
  }

  let formErrorPanel = null;
  if (this.state.formValidationFailure) {
      formErrorPanel = <div>
          <div className="alert alert-danger" role="alert">
              <strong>Validation Error!</strong> Username and Password are required!
          </div>
      </div>
  }

  const { handleSubmit } = this.props;
      
        return(
          
            
            <div class="container">
            
            <form name ="loginForm" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            <h2 color='brown'> QUORA LOGIN</h2>
                            <p>Please enter your Email and password</p>
                        </div>
                       
                        <Field
                        label="email"
                        name="email"
                        type = "text"
                        component={this.renderField}
                      
                      />
 
                      <Field
                      label="passwrd"
                      name="passwrd"
                      type = "password"
                      component={this.renderField}
               
                    />
                             <div class="form-group">
                            <br></br>
                            <button type="submit" class="btn btn-primary">Login</button> 
                            <ul class="nav navbar-nav">
                            <li class="signup"><Link to="/signup">Don't have an account yet? Sign up here</Link></li>
                            </ul>
                         
                            </div>
                       
                     
                    </div>
                </div>
              </form> 
            </div>
          
        )
    }     
}

const mapStateToProps = state => ({
  loginStateStore: state.login
});

function validate(values) {
  const errors = {};
  if (!values.email) {
      errors.email = "Enter E-mail";
  }
  if (!values.password) {
      errors.password = "Enter Password";
  }
  return errors;
}
//export default Login;
export default reduxForm({
  validate,
  form: "loginForm"
})(connect(mapStateToProps, { submitLogin })(login));




// import React, {Component} from 'react';
// import {Route} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
// import loginpage from '../Login/login';





//Create a Main Component
// class login extends Component {
//     render(){
//         return(
//             <BrowserRouter>
//             <div>
//             <h3> login page </h3>
                
//             </div>
//             </BrowserRouter>
//         )
//     }
// }
// //Export The Main Component
// export default login;