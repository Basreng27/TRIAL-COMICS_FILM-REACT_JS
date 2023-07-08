import React from 'react';
import {Content, Footer, Navbar, Sidebar} from '../../components';

const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <div className="header">
          <Navbar />
        </div>

        <div className="content">
          <Content />
        </div>
        
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
