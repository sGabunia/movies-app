import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { initializeMovieByDetails } from "../../reducers/movieDetailsReducer";

import MovieGenres from "./MovieGenres";

import MovieTrailer from "./MovieTrailer";
import MovieCast from "./MovieCast";

import "./Movie.css";

const Movie = () => {
  const dispatch = useDispatch();
  const movie = useSelector(({ movieDetails }) => movieDetails.data);

  const id = useParams().id;

  useEffect(() => {
    dispatch(initializeMovieByDetails(id));
  }, [dispatch, id]);

  const director = movie?.crew?.find((movie) => movie.department === "Directing").name
  const producer = movie?.crew?.find((movie) => movie.department === "Production").name
  const costumes = movie?.crew?.find((movie) => movie.department === "Costume & Make-Up").name

 console.log(movie?.crew)
  return (
    <section className="movie-details">
      <div className="wrapper">
        <div className="movie-details__card">
          <div className="movie-details__card-image">
          {movie?.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w342${movie?.poster_path}`}
                alt="film poster"
              />
            ) : (
              "hello"
            )}
          </div>
          <div className="card-content">
            <div className="card-content__header">
              <h2>{movie?.original_title} ({movie?.release_date.slice(0, 4)})</h2>
              <p>
                <MovieGenres movie={movie} />
              </p>
            </div>

            <ul className="card-content__score">
              <li>
                <div className="imbd-score">
               <strong>{movie?.vote_average * 10} %</strong>
                </div>
              </li>
            </ul>
            <div className="card-content__info">
              <h3>Overview</h3>
              <p className="overview">{movie?.overview}</p>
            </div>
              <ul className="card-content__crew">
                <li className="profile">
                  <p><strong>{director}</strong></p>
                  <p className="character">Director</p>
                </li>
                <li className="profile">
                  <p><strong>{producer}</strong></p>
                  <p className="character">Producer</p>
                </li>
                <li className="profile">
                  <p><strong>{costumes}</strong></p>
                  <p className="character">Costume & Make-Up</p>
                </li>
              </ul>
          </div>
        </div>
        <MovieCast movie={movie}/>
        <MovieTrailer videoKey={movie?.video_key} />
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
