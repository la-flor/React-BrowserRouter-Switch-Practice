import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/colors">Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink exact to="/colors/new">New Color</NavLink>
    </nav>
  );
}

export default NavBar;