/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import { auth } from '../../Database/Firebase';
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
        window.location.reload();
        let payload = {
          "id": user.uid,
          "username": this.state.emailId,
          "password" : this.state.password
        }
        const requestOption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(payload),
        }
      fetch("http://localhost:8080/user/add", requestOption)
        .then()
          
        

    })
    .catch((err) => {
       
})
  }
  render() { 
    return ( 
      <div className="form-box">
        <div className="register-form form">
          <h3>Create account</h3>
          <input type="text" id="fname" placeholder="First name" onChange={(event)=>{this.state.name=event.currentTarget.value;}}/>
          <input type="text" id="lname" placeholder="Last name"  onChange={(event)=>{this.state.lastname=event.currentTarget.value;}}/>
          <input type="email" id="email1" placeholder ="Email"  onChange={(event)=>{this.state.emailId=event.currentTarget.value;}}/>
          <input type="password" id="pwd1" placeholder="Password" onChange={(event)=>{this.state.password=event.currentTarget.value;}}/>
    
          <button className="login__button" onClick={this.newSignUp} >Sign up</button>

        </div>
      </div>
     );
  }
}
 
export default FormRegister;

