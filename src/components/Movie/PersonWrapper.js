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
      <div style={{ flexGrow: 1 }}>
        <Link to={`/actor/${id}`}>
          <img
            src={
              imageSrc
                ? `https://image.tmdb.org/t/p/w185${imageSrc}`
                : `https://via.placeholder.com/180C/O https://placeholder.com/`
            }
            alt="movies's actor"
          />
        </Link>
      </div>
      <div style={{ padding: 10, borderTop: "2px solid #ccc" }}>
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
