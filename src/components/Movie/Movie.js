import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { genres } from "../../data";
import "./Movie.css";

const Movie = () => {
  const movies = useSelector(({ movies }) => movies);
  const id = useParams().id;

  let selectedMovie = movies.find((movie) => movie.id === id);
  console.log(selectedMovie);

  return (
    <section>
      <div className="wrapper">
        <div className="card">
          <div className="card-image">
            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`}
              alt="film poster"
            />
          </div>
          <div className="card-content">
            <div className="card-content__header">
              <h2>{selectedMovie?.original_title}</h2>
              <p>
                {selectedMovie?.genre_ids?.map((movie) => {
                  const selected = genres.find((item) => movie === item.id);
                  const { id, name } = selected;
                  return (
                    <span key={id} className="genre">
                      {name}
                    </span>
                  );
                })}
              </p>
            </div>
            <p className="overview">{selectedMovie?.overview}</p>
            <ul>
              <li>
                <strong>Release Date: {selectedMovie?.release_date}</strong>{" "}
              </li>
              <li>
                <strong>IMBD Rating: {selectedMovie?.vote_average}</strong>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
