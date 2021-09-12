import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gall = ({ src, id }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {" "}
      <Link to={`/details/${id}`}>
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
      </Link>
    </div>
  );
};

export default Gall;
