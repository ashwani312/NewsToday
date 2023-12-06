import React from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to={"/"} className='link'>
        <h1>NEWS  TODAY</h1>
        </Link>
      </div>
      <div className="center">
        <p>News</p>
        <p>Travel</p>
        <p>Business</p>
        <Link className='link' to={`/:entertainment`}>
        
        <p >Entertainment</p>
        </Link>
        <p>Faviourites</p>
        <p></p>
      </div>
      <div className="right">
        <Link to={`/register`} className='link'>
          <button className='signupbutton'>SignUp</button>
        </Link>

        <Link to={"/login"} className='link'>
          <button className='navbarlogin'>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar