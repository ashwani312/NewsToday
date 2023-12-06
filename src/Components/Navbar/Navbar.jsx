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
      <Link to={"/"} className='link'>
        <p>Home</p>
   
        </Link>
        <Link className='link' to={`/categories/sports`}>
        <p>Sports</p>
        </Link>
        <Link className='link' to={`/categories/business`}>

        <p>Business</p>
        </Link>
        <Link className='link' to={`/categories/entertainment`}>
          <p >Entertainment</p>
        </Link>
        <Link className='link' to={`/faviourites`}>
 
        <p>Faviourites</p>
        </Link>
   
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