import React from 'react'
import './Register.css'
import '../../App.css'
import FormRegister from './formRegister'
import {Link} from "react-router-dom"

function Register() {
  return (
    <div className="main-register container">
      <div className="footer">
        <p>Have an account?</p>
        <Link to="/" className="btn">Login</Link>
      </div>
      <FormRegister/>
    </div>
  )
}

export default Register