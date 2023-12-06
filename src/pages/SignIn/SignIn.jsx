import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignIn.scss'

const SignIn = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [password, setPassword] = useState("");
  return (
    <div className='login'>
    <div className="card">
      <div className="left">
        <h1>Blog World</h1>
        <p>Login and Write your Blog</p>
        <span style={{fontWeight : "bold"}}>Don't have an account?</span>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text"
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
            value={localStorage.getItem("username")}
          />
          <input type="password"
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignIn