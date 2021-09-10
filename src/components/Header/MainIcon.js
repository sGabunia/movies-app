import React from "react";
import { Link } from "react-router-dom";
import mainIcon from "../../assets/icons/mainIcon.svg";

const MainIcon = () => {
  return (
    <div>
      <Link to="/">
        <img src={mainIcon} alt="main icon" />
      </Link>
    </div>
  );
};

export default MainIcon;
