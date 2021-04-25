import React from "react";
import c from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={c.header}>
      <div className={c.logo}>
        <div className={c.logo_image}>
          <NavLink to="/"> </NavLink>
        </div>
        <div className={c.logo_description}>
          <div className={c.logo_description_name}>calories</div>
          <hr />
          <div className={c.logo_description_tagline}>Ешь и худей!</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
