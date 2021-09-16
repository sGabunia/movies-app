import React from "react";

import { Link } from "react-router-dom";

const MovieGenres = ({ movie }) => {
  return (
    <>
      {movie?.genres?.map((movie) => {
        return (
          <Link to={`/genre/${movie.id}`} key={movie.id} className="genre">
            {movie.name}
          </Link>
        );
      })}
    </>
  );
};

export default MovieGenres;
