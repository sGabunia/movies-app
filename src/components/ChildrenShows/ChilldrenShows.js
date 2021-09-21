import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";

const ChilldrenShows = () => {
  const movies = useSelector(({movies}) => movies.filter((movie) => movie.isBookmarked === true))
  console.log(movies);
  return (
    <div className="imposter">
      <h2>Shows for children</h2>
    </div>
  );
};

export default ChilldrenShows;
