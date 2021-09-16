import React from "react";

import MainIcon from "./MainIcon";
import Mode from "./Mode";
import Navigation from "./Navigation";

import "./Header.css";

const Header = ({ setMode, mode }) => {
  return (
    <header className="header">
      <div className="wrapper header-wrapper">
        <MainIcon />
        <Navigation />
        <Mode setMode={setMode} mode={mode} />
      </div>
    </header>
  );
};

export default Header;
