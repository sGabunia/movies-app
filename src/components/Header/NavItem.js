import React from "react";

const NavItem = ({ title, icon }) => {
  return (
    <li className="nav__item">
      <button>
        <img src={icon} alt="icon" style={{ width: 30, height: 24 }} /> {title}
      </button>{" "}
    </li>
  );
};

export default NavItem;
