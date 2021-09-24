import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows } from "../../reducers/tvShowsReducer";
import "../../App.css";
import "./TvShows.css";
import Spinner from "../Spinner/Spinner";
import PersonWrapper from "../Movie/PersonWrapper";

const TvShows = () => {
  const { tvShows, isLoading } = useSelector((state) => state.tvShows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows());
  }, [dispatch]);

  if (isLoading === "idle" || isLoading === "pending") {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <ul className="tv-shows">
        {tvShows.map((show) => {
          return (
            <PersonWrapper
              key={show.id}
              title={show.name}
              imageSrc={show.poster_path}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TvShows;
