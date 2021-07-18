import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
 
  return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <div className="container-fluid">
   <NavLink
              to="/"
              exact
              className="navbar-brand"
              activeClassName="text-warning"
            >
              CSC506 Programming
            </NavLink>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavDropdown">
       <ul className="navbar-nav">
       
         <li className="nav-item">
         <NavLink
              to="/dashboard"
              className="nav-link"
              activeClassName="text-warning"
            >
              Dashboard
            </NavLink>
         </li>

         <li className="nav-item">
         <NavLink
              to="/profile"
              className="nav-link"
              activeClassName="text-warning"
            >
              Profile
            </NavLink>
         </li>
        
         
         <li className="nav-item">
         <NavLink
              to="/login"
              className="nav-link"
              activeClassName="text-warning"
            >
              Login
            </NavLink>
         </li>


         <li className="nav-item">
         <NavLink
              to="/signup"
              className="nav-link"
              activeClassName="text-warning"
            >
              Sign Up
            </NavLink>
         </li>

         
       </ul>
     </div>
   </div>
 </nav>
  );
}