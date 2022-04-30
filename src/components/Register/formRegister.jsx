import React, {useState} from 'react'
import './formRegister.css'

function FormRegister() {
    const [fname,setfname] = useState("")
    const [lname,setlname] = useState("")
    const [email,setemail] = useState("")
    const [pwd1,setpwd1] = useState("")
    const [pwd2,setpwd2] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className="form-box">
        <form action="" onSubmit={handleSubmit} className="register-form form">
          <h3>Create account</h3>
          <input type="text" id="fname" placeholder="First name" value={fname} onChange={(e) => {setfname(e.target.value)}}/>
          <input type="text" id="lname" placeholder="Last name" value={lname} onChange={(e) => {setlname(e.target.value)}} />
          <input type="email" id="email1" placeholder ="Email" value={email} onChange={(e) => {setemail(e.target.value)}} />
          <input type="password" id="pwd1" placeholder="Password" value={pwd1} onChange={(e)=> {setpwd1(e.target.value)}}/>
          <input type="password" id="pwd2" placeholder="Confirm password" value={pwd2} onChange={(e)=>{setpwd2(e.target.value)}} />
          <input type="submit" value="Register" />
        </form>
    </div>
  )
}

export default FormRegister