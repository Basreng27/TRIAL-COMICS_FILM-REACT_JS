import React from 'react';
import imgDev from '../assets/img/dev-react.png';
import { Nav } from 'react-bootstrap';
import { SidebarNav } from './SidebarNav';

import navigation from '../config/_nav'
import { FaChevronLeft } from 'react-icons/fa';

function Sidebar() {
  return (
    <>
      <div className="sidebar-header">
        <img src={imgDev} alt="Dev React" />
      </div>

      <Nav className="sidebar-menu">
        <SidebarNav items={navigation} />
      </Nav>

      <div className="sidebar-footer">
        <FaChevronLeft />
      </div>
    </>
  );
}

export default Sidebar;
