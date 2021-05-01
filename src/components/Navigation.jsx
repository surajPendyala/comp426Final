import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Navigation () {
  return (
    <div className="navigation">
      <NavLink class="nav-link" to="/"> Recipe </NavLink>
      <NavLink class="nav-link" to="/proverb">Proverb </NavLink>
      <NavLink class="nav-link" to="/bored">Bored </NavLink>
      <NavLink class="nav-link" to="/music">Music </NavLink>
      <NavLink class="nav-link" to="/about">About </NavLink>
    </div>        
  );
}

export default withRouter(Navigation);