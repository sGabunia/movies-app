import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleBg } from "../../reducers/toggleBgReducer";

import "./Header.css";
import Hamburger from "./Hamburger";
import NavAside from "./NavAside";

const Mode = ({ setMode, mode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const color = !mode ? "#fff" : "#0083ca";
  const dispatch = useDispatch();

  const handleClick = () => {
    setMode(!mode);
    dispatch(toggleBg());
  };

  const handleNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <Hamburger handleNavOpen={handleNavOpen} isNavOpen={isNavOpen} />
      <NavAside isNavOpen={isNavOpen} handleNavClose={handleNavClose} />
      <span className="mode" onClick={handleClick}>
        <svg fill="none" viewBox="0 0 14 20" width="14">
          <path
            fill={color}
            d="M3.00006 16v-2.085a1.38086 1.38086 0 00-.232-.689 6.77807 6.77807 0 00-.449-.653c0-.006-.476-.619-.622-.815A7.43492 7.43492 0 01.00006 7c0-1.85652.7375-3.63699 2.05025-4.94975C3.36307.7375 5.14354 0 7.00006 0c1.85652 0 3.63704.7375 4.94974 2.05025C13.2626 3.36301 14.0001 5.14348 14.0001 7a7.5877 7.5877 0 01-1.695 4.847c-.121.164-.423.556-.6.791v.006l-.122.159c-.1736.219-.3269.4533-.458.7a.94967.94967 0 00-.118.411V16c0 1.0609-.4215 2.0783-1.17161 2.8284A3.9998 3.9998 0 017.00706 20a3.9998 3.9998 0 01-2.82843-1.1716A3.99982 3.99982 0 013.00706 16h-.007zm2 0a2.00005 2.00005 0 002 2 2.00005 2.00005 0 002-2v-.338a6.0934 6.0934 0 01-4 0V16zm2-2a3.86943 3.86943 0 002.044-.561 3.1439 3.1439 0 01.28-.82 6.30419 6.30419 0 01.653-1.019c.02304-.031.10004-.132.20004-.261.177-.231.421-.548.517-.678A5.69112 5.69112 0 0012.0001 7a4.99995 4.99995 0 00-1.4645-3.53553A5 5 0 002.00006 7a5.471 5.471 0 001.3 3.568c.086.117.315.415.466.612l.006.009.137.179c.2115.2713.40588.5555.582.851.22952.3754.38751.7901.466 1.223a3.86825 3.86825 0 002.043.558z"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default Mode;
