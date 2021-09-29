import React from "react";
import data from "../../data.js";
import "./Header.css";

import NavItem from "./NavItem";

const NavAside = ({ isNavOpen, handleNavClose }) => {
  const isOpen = isNavOpen ? "open" : "";

  return (
    <nav className={`burger-nav ${isOpen}`} role="navigation">
      <ul>
        {data.map((item) => (
          <NavItem key={item.id} {...item} handleNavClose={handleNavClose} />
        ))}
      </ul>
    </nav>
  );
};

export default NavAside;
