import React from "react";
import "./Movie.css";

const ScrollbarPanel = ({ children, title }) => {
  return (
    <>
      <h3 className="actors-panel-title">{title}</h3>
      <ul className="actors-panel-list">{children}</ul>
    </>
  );
};

export default ScrollbarPanel;
