import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";

export const Headers = () => {

  const getNavLinkStyle = ({isActive}) =>{

    return{
      color: isActive ? "#FF7518": "#FFFFFF",
    }

  };


  return (

    <>
      <header className='nav-container'>
        <div className='logo'>
          <FaBookOpen className='icon' />
          <h1>BookVerse</h1>
        </div>


        <div className='nav-box'>
          <ul className='items'>
            <li>
              <NavLink to="/" style={getNavLinkStyle}>
                Home
              </NavLink>
            </li>
            <li> <NavLink to="/books" style={getNavLinkStyle}>
              Books
            </NavLink></li>
            <li>
              <NavLink to="/about"style={getNavLinkStyle}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" style={getNavLinkStyle}>
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </header>
    </>
  )
}
