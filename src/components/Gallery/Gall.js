import React, { useState } from "react";

const Gall = ({ src }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {" "}
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img
          src={`https://image.tmdb.org/t/p/original${src}`}
          alt="film poster"
        />
        {isShown ? (
          <div
            style={{
              position: "absolute",
              zIndex: 100,
              top: 0,
              width: "100%",
              backgroundColor: "yellow",
              opacity: 0.6,
            }}
          >
            <h2>Hello</h2>
            <h2>Hello</h2>
            <h2>Hello</h2>
            <h2>Hello</h2>
          </div>
        ) : null}
      </a>
    </div>
  );
};

export default Gall;
