import React from "react";
import mainIcon from "../../assets/icons/mainIcon.svg";
console.log(mainIcon);

const MainIcon = () => {
  return (
    <div>
      <button>
        <img src={mainIcon} alt="main icon" />
      </button>
    </div>
  );
};

export default MainIcon;
