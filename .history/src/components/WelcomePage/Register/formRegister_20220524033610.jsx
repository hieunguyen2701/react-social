/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import { auth } from '../../Database/Firebase';
import { Redirect } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as constantClass from "../../Constant/Constant"
import toast from 'react-hot-toast'
class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      username: null,
      password: null,
      redirect: false,
  }
  }
  
  newSignUp = () => {
    const notification = toast.loading('Current Register ....')
    createUserWithEmailAndPassword(auth,this.state.emailId, this.state.password)
    .then((userCredential) => {
      var user = userCredential.user;
      
        console.log("User created successfully");
        toast.success('Register success', {
          id : notification
      });
        let payload = {
          "id": user.uid,
          "username": this.state.username,
          "email": this.state.emailId,
          "password" : this.state.password
        }
        const requestOption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(payload),
        }
        fetch(constantClass.urlLink+"/user/add", requestOption)
        .then()  
        this.setState({
          redirect : true
        })
      
    })
    .catch((err) => {
      toast.error('Whoops something went wrong !', {
        id : notification
      })
    })
    
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() { 
    
    return (   
      <div className="form-box">
        {this.renderRedirect()}
        <div className="register-form form">
          <h3>Create account</h3>
          <input type="text" id="lname" placeholder="Username"  onChange={(event)=>{this.state.username=event.currentTarget.value;}} required/>
          <input type="email" id="email1" placeholder ="Email"  onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} required/>
          <input type="password" id="pwd1" placeholder="Password" onChange={(event)=>{this.state.password=event.currentTarget.value;}} required/>
    
          <button className="login__button" onClick={this.newSignUp} >Sign up</button>

        </div>
      </div>
     );
  }
}
 
export default FormRegister;

