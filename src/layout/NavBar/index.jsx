import React from 'react'
import { NavLink, useLocation, Outlet } from 'react-router-dom'
import './style.css'

const LocationDisplay = () => {
  const location = useLocation()

  return <span>{location.pathname}</span>
}

const NavBar = () => {

  let activeStyle = {
    textDecoration: "underLine",
    color: "lightpink"
  }

  const navA = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <nav>
      <h1><LocationDisplay /></h1>
        <ul className="nav-links">
          <li><NavLink to="/" style={navA}>Home</NavLink></li>
          <li><NavLink to="/about" style={navA}>About</NavLink></li>
          <li><NavLink to="/colours" style={navA}>Colours</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar