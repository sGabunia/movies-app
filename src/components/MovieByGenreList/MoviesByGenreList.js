import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  initializeMoviesByGenre,
  loadMoreMoviesByGenre,
} from "../../reducers/moviesByGenre";
import "./MoviesByGenderList.css";

const MoviesByGenreList = () => {
  const [page, setPage] = useState(2);
  const movies = useSelector(({ moviesByGenre }) => moviesByGenre);
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(initializeMoviesByGenre(id));
  }, [id, dispatch]);

  const handleClick = (id, page) => {
    dispatch(loadMoreMoviesByGenre(id, page));
    setPage((prevState) => prevState + 1);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <div className="wrapper">
        <div className="responsive">
          {movies.map((movie) => (
            <img
              loading="lazy"
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt="movie poster"
            />
          ))}
        </div>
      </div>
      <div className="center-links">
        {movies ? (
          <button
            className="btn btn-load"
            onClick={() => handleClick(id, page)}
          >
            load more
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MoviesByGenreList;
