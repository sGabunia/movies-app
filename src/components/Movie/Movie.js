import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { initializeMovieByDetails } from "../../reducers/movieDetailsReducer";
import {
  addVote,
  removeVote,
  addMovieToBookmarked,
  removeMovieFromBookmarked,
} from "../../reducers/moviesReducer";

import "./Movie.css";

import MovieTrailer from "./MovieTrailer";
import MovieCast from "./MovieCast";
import LikeIcon from "../Icons/LikeIcon";
import MovieReviews from "./MovieReviews";
import BookmarkIcon from "../Icons/BookmarkIcon";
import Spinner from "../Spinner/Spinner";
import MovieGenres from "./MovieGenres";

const Movie = () => {
  const id = Number(useParams().id);
  const dispatch = useDispatch();

  const { movieInfo: movie, status } = useSelector(({ movieDetails }) => {
    return movieDetails;
  });
  const selectedMovie = useSelector(({ movies }) =>
    movies.movies.find((movie) => movie.id === id)
  );

  const [isLiked, setisLiked] = useState(selectedMovie?.isLiked);
  const [isBookmarked, setIsBookmarked] = useState(selectedMovie?.isBookmarked);

  useEffect(() => {
    dispatch(initializeMovieByDetails(id));
  }, [dispatch, id]);

  const director = movie?.crew?.find(
    (movie) => movie.department === "Directing"
  )?.name;
  const producer = movie?.crew?.find(
    (movie) => movie.department === "Production"
  )?.name;
  const costumes = movie?.crew?.find(
    (movie) => movie.department === "Costume & Make-Up"
  )?.name;

  const handleLikeClick = (id) => {
    if (isLiked) {
      dispatch(removeVote(id));
      setisLiked(false);
      return;
    }
    dispatch(addVote(id));
    setisLiked(true);
  };

  const handleBookmarkClick = (id) => {
    if (isBookmarked) {
      dispatch(removeMovieFromBookmarked(id));
      setIsBookmarked(false);
      return;
    }

    dispatch(addMovieToBookmarked(id));
    setIsBookmarked(true);
  };

  if (status === "idle" || status === "pending") {
    return (
      <div className="imposter">
        <Spinner />
      </div>
    );
  }
  if (status === "resolved") {
    return (
      <section className="movie-details">
        <div className="wrapper">
          <div className="movie-details__card">
            <div className="movie-details__card-image">
              {movie.poster_path ? (
                <picture>
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    media="(min-width: 780px)"
                  />
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    media="(min-width: 480px)"
                  />
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                    media="(min-width: 320px)"
                  />
                  <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt="film poster"
                    style={{
                      borderRadius: "8px",
                    }}
                  />
                </picture>
              ) : (
                "hello"
              )}
            </div>
            <div className="movie-details__card-content">
              <div className="movie-details__card-content-header">
                <h2>
                  {movie.original_title} ({movie.release_date?.slice(0, 4)})
                </h2>
                <p>
                  <MovieGenres movie={movie} />
                </p>
              </div>

              <ul className="movie-details__card-content-score">
                <li>
                  <div className="ratings">
                    {selectedMovie?.vote_count}
                    <button
                      onClick={() => handleLikeClick(movie.id)}
                      className="btn-like"
                    >
                      <LikeIcon isLiked={isLiked} />
                    </button>
                    <button
                      onClick={() => handleBookmarkClick(movie.id)}
                      className="btn-like"
                    >
                      <BookmarkIcon isBookmarked={isBookmarked} />
                    </button>
                  </div>
                </li>
                <li>
                  <div className="imbd-score">
                    <strong>{movie.vote_average * 10} %</strong>
                  </div>
                </li>
              </ul>
              <div className="card-content__info">
                <h3>Overview</h3>
                <p className="overview">{movie?.overview}</p>
              </div>
              <ul className="card-content__crew">
                <li className="profile">
                  <p>
                    <strong>{director || "no info"}</strong>
                  </p>
                  <p className="character">Director</p>
                </li>
                <li className="profile">
                  <p>
                    <strong>{producer || "no info"}</strong>
                  </p>
                  <p className="character">Producer</p>
                </li>
                <li className="profile">
                  <p>
                    <strong>{costumes || "no info"}</strong>
                  </p>
                  <p className="character">Costume & Make-Up</p>
                </li>
              </ul>
            </div>
          </div>
          <MovieCast movie={movie} />
          <MovieReviews reviews={movie.reviews} />
          <MovieTrailer videoKey={movie.video_key} />

          <div className="center-links">
            <Link to="/" className="btn-back">
              Go Back
            </Link>
          </div>
        </div>
      </section>
    );
  }
};

export default Movie;
