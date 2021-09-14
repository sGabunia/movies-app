import React from "react";

import MainIcon from "./MainIcon";
import Mode from "./Mode";
import Navigation from "./Navigation";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header-wrapper">
        <MainIcon />
        <Navigation />
        <Mode />
      </div>
    </header>
  );
};

export default Header;
