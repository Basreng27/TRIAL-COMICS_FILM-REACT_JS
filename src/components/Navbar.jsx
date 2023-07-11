import React from 'react'
import { FaBars, FaBell, FaIcons, FaMailBulk } from 'react-icons/fa'

const Navbar=()=> {
  return (
    <div className="custom-navbar">
      <div className="navbar-left">
        <div className="navbar-item">
          <FaBars />
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-item">
          <FaMailBulk />
        </div>
        <div className="navbar-item">
          <FaBell />
        </div>
        <div className="navbar-item">
          <FaIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
