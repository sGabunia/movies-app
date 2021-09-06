import React from "react";
import data from "../../data.js";
import NavItem from "./NavItem.js";

const Navigation = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__wrapper" role="list">
          {data.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
