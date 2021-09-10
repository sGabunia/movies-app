import React from "react";
import "./Header.css";

import MainIcon from "./MainIcon";
import Mode from "./Mode";
import Navigation from "./Navigation";

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
