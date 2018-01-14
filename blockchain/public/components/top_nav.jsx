import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="nav-container">
      <div className="brand">
        <Link to="/">ChangeCred</Link>
      </div>
      <div className="nav-links">
        <Link to="/borrow">Borrow</Link>
        <Link to="/payback">Payback</Link>
      </div>
    </nav>
  );
};

export default TopNav;
