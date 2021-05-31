import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <h1 className="navbar-brand">
          WikiCountries?
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
