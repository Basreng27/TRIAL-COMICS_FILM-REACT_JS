import React from 'react';
import { Badge, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SidebarNav = ({ items }) => {
  const location = useLocation();

  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <Badge bg={badge.color} className="badge-right">
            {badge.text}
          </Badge>
        )}
      </>
    );
  };

  const navItem = (item, index) => {
    const { badge, icon, name, to, ...rest } = item;

    return (
      <Nav.Link
        as={NavLink}
        key={index}
        to={to}
        {...rest}
        active={location.pathname === to}
      >
        {navLink(name, icon, badge)}
      </Nav.Link>
    );
  };

  const navGroup = (item, index) => {
    const { badge, icon, items, name, to, ...rest } = item;

    return (
      <NavDropdown
        key={index}
        title={navLink(name, icon, badge)}
        id={`nav-dropdown-${index}`}
        {...rest}
      >
        {items.map((subItem, subIndex) =>
          subItem.items ? (
            navGroup(subItem, subIndex)
          ) : (
            <NavDropdown.Item
              as={NavLink}
              key={subIndex}
              to={subItem.to}
              {...subItem}
              active={location.pathname === subItem.to}
            >
              {navLink(subItem.name, subItem.icon, subItem.badge)}
            </NavDropdown.Item>
          )
        )}
      </NavDropdown>
    );
  };

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items ? (
            navGroup(item, index)
          ) : (
            navItem(item, index)
          )
        )}
    </React.Fragment>
  );
};

SidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
