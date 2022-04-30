import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"
import "./formLogin.css"

function FormLogin() {
    const [usernameval, setusernameval] = useState("")
    const [passval, setpassval] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className="form-box">
        <form action="" onSubmit={handleSubmit} className="signin-form form">
          <h3>Login</h3>
          <input type="text" placeholder="Username" id='usename1' value={usernameval} onChange={(e) => {setusernameval(e.target.value)}}/>
          <input type="password" placeholder="Password" id='pwd1' value={passval} onChange={(e) => {setpassval(e.target.value)}} />
          <input type="submit" value="Login" />
          <Link to="#" className="forgot-link">Forgot password?</Link>
        </form>
    </div>
  )
}

export default FormLogin