import React from 'react';
import {Outlet,Link } from "react-router-dom";


function Menu() {
  return (
    <>
    <nav data-testid="menu-content" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">ABC Automobiles</a>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              
  <Link to="/" className="nac-link">Home</Link>
            </li>
            <li className="nav-item">
  <Link to="/About" className="nac-link">About Us</Link>
            </li>
            <li className="nav-item">
              
  <Link to="/Vehicles" className="nac-link">Vehicles</Link>
            </li>
            <li className="nav-item">
              
  <Link to="/Services" className="nac-link">Services</Link>
            </li>
            <li className="nav-item">
              
  <Link to="/Contact Us" className="nac-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Menu;