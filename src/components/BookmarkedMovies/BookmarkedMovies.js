import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";
import RemoveIcon from "../Icons/RemoveIcon";
import "./BookmarkedMovies.css"

const BookmarkedMovies = () => {
  const movies = useSelector(({movies}) => movies.filter((movie) => movie.isBookmarked === true))



  if(!movies || movies.length === 0) {
    return <div className="imposter">
      <h2>You have no bookmarked movie</h2>
    </div>
  }

  return (
    <div className="imposter">
      <div className="wrapper">
        <div style={{display: "flex", flexWrap: "wrap" , gap: "1rem"}}>
          {movies.map((movie) => {
            return <div className="bookmarked-image" key={movie?.id}>
               <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="bookmarged movie poster" />
               <RemoveIcon id={movie?.id}/>
            </div>
          })}
        </div>   
      </div>
    </div>
  );
};

export default BookmarkedMovies;
