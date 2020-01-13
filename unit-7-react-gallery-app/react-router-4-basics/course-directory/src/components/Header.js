import React from 'react';
// have to import it
import { NavLink } from 'react-router-dom'; 

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      {/* to="" should match the path defined for the route */}
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;