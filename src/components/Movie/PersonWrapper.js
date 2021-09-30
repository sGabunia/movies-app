import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const PersonWrapper = ({
  title,
  imageSrc,
  id,
  character = "",
  category = "actor",
}) => {
  return (
    <li className="actor">
      <div style={{ height: "300px" }}>
        <Link to={`/actor/${id}`} style={{ display: "inline" }}>
          <img
            src={
              imageSrc
                ? `https://image.tmdb.org/t/p/w185${imageSrc}`
                : `https://via.placeholder.com/150C/O https://placeholder.com/`
            }
            alt="movies's actor"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Link>
      </div>
      <div
        style={{
          padding: "8px",
          marginTop: "auto",
        }}
      >
        <p className="title-p">
          <strong>
            <Link to={`/${category}/${id}`}>{title}</Link>
          </strong>
        </p>
        <p className="character">{character}</p>
      </div>
    </li>
  );
};

export default PersonWrapper;
