import React from "react";
import "./Header.css";

import MainIcon from "./MainIcon";
import Mode from "./Mode";
import Navigation from "./Navigation";

const Header = ({ setMode, mode }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper">
          <MainIcon />
          <Navigation />
          <Mode setMode={setMode} mode={mode} />
        </div>
      </div>
    </header>
  );
};

export default Header;
