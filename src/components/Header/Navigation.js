import React from "react";
import data from "../../data.js";
import NavItem from "./NavItem.js";

const Navigation = () => {
  return (
    <div>
      <nav className="nav" aria-label="Main Navigation">
        <ul className="nav__wrapper">
          {data.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
