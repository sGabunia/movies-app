import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ title, icon, handleNavClose = null }) => {
  return (
    <li className="nav__item">
      <Link
        to={`/${title.toLowerCase()}`}
        className="nav__link"
        onClick={handleNavClose}
      >
        {icon} {title}
      </Link>{" "}
    </li>
  );
};

export default NavItem;
