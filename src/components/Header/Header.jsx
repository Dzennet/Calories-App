import React from "react";
import c from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={c.header}>
      <div className={c.header_logo}>
        <div className={c.header_logo_image}>
          <NavLink to="/"> </NavLink>
        </div>
        <div className={c.header_logo_description}>
          <div className={c.header_logo_description_name}>Calories</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
