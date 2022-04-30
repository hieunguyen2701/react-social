import React, { Component } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Database/Firebase';
class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      emailId : null,
      password: null
   }
  }


  login = () => {
    signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            var id = user.uid;
            console.log(id)
            console.log("login succses")
            

            // ...
        })
        .catch((error) => {
         
        });
}
  render() { 
    return ( 
      <div className="form-box">
        <form action="" onSubmit={this.login} className="signin-form form">
          <h3>Login</h3>
          <input type="text" placeholder="Username" id='usename1'   onChange={(event)=>{this.state.emailId=event.currentTarget.value}}/>
          <input type="password" placeholder="Password" id='pwd1'   onChange={(event)=>{this.state.password=event.currentTarget.value}}/>
          <input type="submit" value="Login" />
          <a to="#" className="forgot-link">Forgot password?</a>
        </form>
    </div>
     );
  }
}
 
export default FormLogin;
