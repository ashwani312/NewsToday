import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.scss'
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='register'>
    <div className="card">
      <div className="left">
        <h1>Blog World</h1>
        <p> Blog World is a blogging website that help peoples to write there interest, journey and real life Experiences so that anyone can read there stories.</p>
        <span style={{fontWeight : "bold"}}>Already have an account?</span>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)}/>
          <input type="email" placeholder='Email' onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
          <button>Register</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp