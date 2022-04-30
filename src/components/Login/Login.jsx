import React from 'react'
import '../../App.css'
import './Login.css'
import FormLogin from './formLogin'
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="main-login container">
      <FormLogin/>
      <div className="footer">
        <p>Don't have an account?</p>
        <Link to="/Register" className="btn">Register</Link>
      </div>
    </div>
  )
}

export default Login