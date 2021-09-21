import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { initializeMovieByDetails, addVote, removeVote} from "../../reducers/movieDetailsReducer";
import { addMovieToBookmarked, removeMovieFromBookmarked } from "../../reducers/moviesReducer";

import MovieGenres from "./MovieGenres";

import "./Movie.css";

import MovieTrailer from "./MovieTrailer";
import MovieCast from "./MovieCast";
import LikeIcon from "../Icons/LikeIcon"
import MovieReviews from "./MovieReviews";
import BookmarkIcon from "../Icons/BookmarkIcon";

const Movie = () => {
  const dispatch = useDispatch();
  const movie = useSelector(({ movieDetails }) => movieDetails.movieInfo);
  const moviesBookmarkInfo = useSelector(({movies}) => movies)
  const status = moviesBookmarkInfo.find((bookmark) => bookmark.id === movie.id)?.isBookmarked
  console.log(status);
  const [isLiked, setisLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(status)
  const id = useParams().id;

  useEffect(() => {
    dispatch(initializeMovieByDetails(id));
  }, [dispatch, id]);

  const director = movie?.crew?.find((movie) => movie.department === "Directing")?.name || null
  const producer = movie?.crew?.find((movie) => movie.department === "Production")?.name || null
  const costumes = movie?.crew?.find((movie) => movie.department === "Costume & Make-Up")?.name || null
  
  const handleLikeClick = () => {
    if(isLiked) {
      dispatch(removeVote())
      setisLiked(false)
      return
    }
    dispatch(addVote())
    setisLiked(true)
  }

  const handleBookmarkClick = (id) => {
    if(isBookmarked) {
      dispatch(removeMovieFromBookmarked(id))
      setIsBookmarked(false)
      return
    }

    dispatch(addMovieToBookmarked(id))
    setIsBookmarked(true)
  }
 
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
              <li>
                <div>
                  {movie?.vote_count}
                  <button onClick={handleLikeClick} className="btn-like"><LikeIcon isLiked={isLiked}/></button>
                  <button onClick={() => handleBookmarkClick(movie?.id)} className="btn-like"><BookmarkIcon isBookmarked={isBookmarked}/></button> 
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
        <MovieReviews reviews={movie?.reviews}/>
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
