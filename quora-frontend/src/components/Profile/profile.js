import React, {Component} from 'react';

import Header from '../Header/Header';
import ProfileNav from '../Profile/profileNav';
import Credentials from '../Profile/Credentials';
import {rooturl} from '../../config/settings';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


//Create a Main Component
class Main extends Component {

    constructor(props) {
        super(props);
        let _isMounted = false;
        this.state = {
          email: "",
          name : localStorage.getItem('name'),
          token : localStorage.getItem('token'),
         about : "",
          city : "",
          country : "",
         company : "", 
         school : "",
          hometown : "",
           languages : "",
            gender : "",
            profilepic : ""
        };
    
        this.addpicture = this.addpicture.bind(this);
        this.savepicture = this.savepicture.bind(this);
    }

    addpicture = (e) => {
        if (e.target.name === 'selectedFile') {
            this.setState({
                selectedFile: e.target.files[0]
            })
        }
    }

    savepicture = (e) =>
{
  
    const desc = this.props.profile.name;

    const  data  = Object.assign({},this.state);

    //const { files } = this.state;
    let formData = new FormData();
    console.log(desc);
    console.log(data.selectedFile);

    formData.append('description', desc);
    formData.append('selectedFile', data.selectedFile);
 

    axios.post(`http://'+rooturl+':4000/addpic`, formData)
    .then((result) => {
      this.setState({selectedFile : ''});
      this.componentDidMount();
  });
   

}

    render(){
        return(
            <div>
           <Header/>
           <div>
           <img src={this.state.profilepic}
                     className="image--cover" /> 
                      <form>
                    <div className="form-group" style = {{width : 300}}>
                        <input type="file" className="form-control-file" name="selectedFile" onChange={this.addpicture} /> 

                        <Button
            block
            type="button"  onClick = {this.savepicture} >
          Save Profile Picture
          </Button>   </div>  </form>
           </div>
           <ProfileNav/>
           <Credentials/>
           </div>
        )
    }
}
//Export The Main Component
export default Main;