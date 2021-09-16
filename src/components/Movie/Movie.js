import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import MovieGenres from "./MovieGenres";
import "./Movie.css";
import { initializeMovieByDetails } from "../../reducers/movieDetailsReducer";
import MovieTrailer from "./MovieTrailer";

const Movie = () => {
  const dispatch = useDispatch();
  const movie = useSelector(({ movieDetails }) => movieDetails);

  const id = useParams().id;

  useEffect(() => {
    dispatch(initializeMovieByDetails(id));
  }, [dispatch, id]);

  return (
    <section className="movie-details">
      <div className="wrapper">
        <div className="movie-details__card">
          <div className="movie-details__card-image">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt="film poster"
              />
            ) : (
              "hello"
            )}
          </div>
          <div className="card-content">
            <div className="card-content__header">
              <h2>{movie?.original_title}</h2>
              <p>
                <MovieGenres movie={movie} />
              </p>
            </div>
            <p className="overview">{movie?.overview}</p>
            <ul>
              <li>
                <strong>Release Date: {movie?.release_date}</strong>{" "}
              </li>
              <li>
                <strong>IMBD Rating: {movie?.vote_average}</strong>{" "}
              </li>
            </ul>
          </div>
        </div>
        <MovieTrailer id={id} />
        <div className="center-links">
          <Link to="/" className="btn-back">
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Movie;
