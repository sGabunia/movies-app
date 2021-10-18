import React from "react";

const Hamburger = ({ handleNavOpen, isNavOpen }) => {
  return (
    <div className="delayed-hamburger-animation">
      <input
        className="hamburger-trigger"
        type="checkbox"
        onChange={handleNavOpen}
        checked={isNavOpen}
      />{" "}
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default Hamburger;
