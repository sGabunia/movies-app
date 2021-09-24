import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  initializeMoviesByGenre,
  loadMoreMoviesByGenre,
} from "../../reducers/moviesByGenre";
import "./MoviesByGenderList.css";

import Spinner from "../Spinner/Spinner";

const MoviesByGenreList = () => {
  const [page, setPage] = useState(2);
  const { movies, isLoading, isLoadingMore } = useSelector(
    ({ moviesByGenre }) => ({
      movies: moviesByGenre.movies,
      isLoading: moviesByGenre.isLoading,
      isLoadingMore: moviesByGenre.isLoadingMore,
    })
  );
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(initializeMoviesByGenre(id));
  }, [id, dispatch]);

  const handleClick = (id, page) => {
    dispatch(loadMoreMoviesByGenre(id, page));
    setPage((prevState) => prevState + 1);
  };

  if (isLoading === "idle" || isLoading === "pending") {
    return <Spinner />;
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <div className="wrapper">
        <div className="responsive">
          {movies.map((movie) => (
            <img
              loading="lazy"
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w342${movie?.poster_path}`}
              alt="movie poster"
            />
          ))}
        </div>
      </div>
      <div className="center-links">
        <button
          className="push-button-3d"
          onClick={() => handleClick(id, page)}
        >
          {isLoadingMore === "idle" || isLoadingMore === "resolved" ? (
            "LOAD MORE"
          ) : (
            <>
              LOADING... <div className="lds-dual-ring"></div>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MoviesByGenreList;
