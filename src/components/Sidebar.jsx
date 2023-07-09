import React from 'react';
import imgDev from '../assets/img/dev-react.png';
import { Nav } from 'react-bootstrap';
import { SidebarNav } from './SidebarNav';

import navigation from '../config/_nav'

function Sidebar() {
  // const [filmDropdownOpen, setFilmDropdownOpen] = useState(false);

  // const toggleFilmDropdown = () => {
  //   setFilmDropdownOpen(!filmDropdownOpen);
  // };

  return (
    <>
      <div className="sidebar-header">
        <img src={imgDev} alt="Dev React" />
      </div>

      <Nav className="sidebar-menu">
        <SidebarNav items={navigation} />
      </Nav>

      <div className="sidebar-footer">Footer</div>
    </>
  );
}

export default Sidebar;
