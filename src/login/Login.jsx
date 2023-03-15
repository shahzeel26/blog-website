import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">LOGIN</button>
      </form>
        <button className="loginRegisterButton"><Link to="/register" className='link' >REGISTER</Link></button>
    </div>
  )
}

export default Login