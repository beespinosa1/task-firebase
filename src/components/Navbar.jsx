// Navbar.jsx
import React from 'react';
import Auth from './Auth';

const Navbar = ({ firebaseApp }) => {
  return (
    <nav>
      <div className="navbar-container">
        <h1>Task Manager</h1>
        <Auth firebaseApp={firebaseApp} />
      </div>
    </nav>
  );
};

export default Navbar;
