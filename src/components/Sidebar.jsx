import React from 'react'
import imgDev from '../assets/img/dev-react.png';

function Sidebar() {
  return (
    <>
      <div className="sidebar-header">
        <img src={imgDev} alt="Dev React" />
      </div>

      <div className="sidebar-menu">Menu</div>
      <div className="sidebar-footer">Footer</div>
    </>
  )
}

export default Sidebar
