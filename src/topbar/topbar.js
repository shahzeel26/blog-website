import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"
function Topbar() {
  const user = false;
  return (
    <>
      <div className='top'>
        <div className="topLeft">
          <i className="topIcons fa-brands fa-square-facebook"></i>
          <i className="topIcons fa-brands fa-square-twitter"></i>
          <i className="topIcons fa-brands fa-square-pinterest"></i>
          <i className="topIcons fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className='topList'>
            <li className='topListItem'><Link to="/" className='link'>HOME</Link></li>
            <li className='topListItem'><Link to="/" className='link'>ABOUT</Link></li>
            <li className='topListItem'><Link to="/contact" className='link'>CONTACT</Link></li>
            <li className='topListItem'><Link to="/write" className='link'>WRITE</Link></li>
            <li className='topListItem'>
              {user && "LOGOUT"}
            </li>


          </ul>
        </div>
        <div className="topRight">
          {
            user ? (<img className="topImg" src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />) :
              (
                <ul className='topList'>
                  <li className="topListItem">
                    <Link to="/login" className='link' >LOGIN</Link>
                  </li>
                  <li className="topListItem">
                    <Link to="/register" className='link' >REGISTER</Link>
                  </li>

                </ul>
              )
          }

          <i class="topSearchIcons fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

    </>
  )
}

export default Topbar

