import React from "react";

const Hamburger = () => {
  return (
    <div className="delayed-hamburger-animation">
      <input className="hamburger-trigger" type="checkbox" />{" "}
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default Hamburger;
