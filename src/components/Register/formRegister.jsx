import React, { Component } from 'react';
import { auth } from '../Database/Firebase';
import {  createUserWithEmailAndPassword } from "firebase/auth";
class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      firstname:null,
      lastname: null,
      username: null,
      password : null
  }
  }
  
  newSignUp = () => {
    createUserWithEmailAndPassword(auth,this.state.emailId, this.state.password)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("User created successfully");

        

    })
    .catch((err) => {
       
})
  }
  render() { 
    return ( 
      <div className="form-box">
        <form action="" onSubmit={this.newSignUp} className="register-form form">
          <h3>Create account</h3>
          <input type="text" id="fname" placeholder="First name" onChange={(event)=>{this.state.name=event.currentTarget.value;}}/>
          <input type="text" id="lname" placeholder="Last name"  onChange={(event)=>{this.state.lastname=event.currentTarget.value;}}/>
          <input type="email" id="email1" placeholder ="Email"  onChange={(event)=>{this.state.emailId=event.currentTarget.value;}}/>
          <input type="password" id="pwd1" placeholder="Password" onChange={(event)=>{this.state.password=event.currentTarget.value;}}/>
    
          <input type="submit" value="Register" />

        </form>
      </div>
     );
  }
}
 
export default FormRegister;

