/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Database/Firebase';
import * as constantClass from "../../Constant/Constant"
import toast from 'react-hot-toast'
class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      emailId : null,
      password: null,
      username : null
   }
  }


  login = () => {
    const notification = toast.loading('Creating a new Post ....')
    signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
           
            toast.success('Login su');
            localStorage.setItem("users", JSON.stringify(user));
         
            window.location.reload();
            // ...
        })
        .catch((error) => {
          alert(error.message)
        });
}
  render() { 
    return ( 
      <div className="form-box">
        <div   className="signin-form form">
          <h3>Login</h3>
          <input type="text" placeholder="Email" id='usename1'   onChange={(event)=>{this.state.emailId=event.currentTarget.value}}/>
          <input type="password" placeholder="Password" id='pwd1'   onChange={(event)=>{this.state.password=event.currentTarget.value}}/>
        
          <button className="login__button" onClick={this.login}>Log In</button>
         
        </div>
    </div>
     );
  }
}
 
export default FormLogin;
