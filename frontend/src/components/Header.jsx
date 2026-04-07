import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">HostingPedia</div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><a href="#">Hosting</a></li>
            <li><a href="#">Domain</a></li>
            <li><a href="#">VPS</a></li>
            <li><a href="#">Website Builder</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#" className="nav-link-sub">LiveChat</a>
          <button className="btn btn-outline-primary btn-sm">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
