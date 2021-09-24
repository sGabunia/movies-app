import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PlayVideoIcon from "../Icons/PlayVideoIcon";

const Gall = ({ movie }) => {
  const bgMode = useSelector(({ isDarkMode }) => isDarkMode);
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="gallery-movie"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {" "}
      <Link to={`/details/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt="film poster"
        />
        {isShown && (
          <div className="hovered-movie__overlay">
            <div className="hovered-movie__video">
              <div className="hovered-movie__rounded">
                <PlayVideoIcon />
              </div>
            </div>
            <div className="hovered-movie__languages">
              <button>GEO</button>
              <button>ENG</button>
              <button>RUS</button>
            </div>
          </div>
        )}
        {isShown && (
          <div
            className="hovered-movie"
            style={{
              overflow: "auto",
              backgroundColor: bgMode ? "rgb(40, 44, 51)" : "#fff",
              color: bgMode ? "rgb(213, 221, 245)" : "rgb(130, 130, 130)",
            }}
          >
            <h2 className="hovered-movie__title">{movie.original_title}</h2>
            <ul className="hovered-movie__details">
              <li>
                Language:{" "}
                <span className="data-highlight">
                  {movie.original_language.toUpperCase()}
                </span>
              </li>
              <li>
                Release Date:{" "}
                <span className="data-highlight">{movie.release_date}</span>
              </li>
              <li>
                IMBD Rating:{" "}
                <span className="data-highlight">{movie.vote_average}</span>
              </li>
              <li style={{ marginTop: "1rem" }}>
                Overview:{" "}
                <p className="hovered-movie__overview">{movie.overview}</p>
              </li>
            </ul>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Gall;
