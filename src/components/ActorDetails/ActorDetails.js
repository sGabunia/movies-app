import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { initializeActorDetails } from "../../reducers/actorDetailsReducer";
import "./ActorDetails.css";

import ScrollbarPannel from "../Movie/ScrollbarPanel";
import PersonWrapper from "../Movie/PersonWrapper";
import Spinner from "../Spinner/Spinner";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text?.slice(0, 300) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const ActorDetails = () => {
  const { actor, status } = useSelector(({ actorDetails }) => actorDetails);
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(initializeActorDetails(id));
  }, [id, dispatch]);

  if (status === "idle" || status === "pending") {
    return <Spinner />;
  }

  return (
    <div className="wrapper">
      {status === "resolved" && (
        <>
          <div className="actor-details">
            <div className="actor-details__image">
              <img
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt="actor profile"
                style={{ borderRadius: "8px" }}
              />
            </div>
            <div className="actor-details__main">
              <h2>{actor.name}</h2>
              <div className="actor-details__biography">
                <h3>Biography</h3>
                {actor.biography ? (
                  <ReadMore>{actor?.biography}</ReadMore>
                ) : (
                  <p>There is no info about {actor.name}</p>
                )}
              </div>
            </div>
          </div>
          <section className="actors-panel" style={{ padding: "1.5rem 0" }}>
            <ScrollbarPannel title="Known For">
              {actor.credits?.slice(0, 10).map((movie) => {
                return (
                  <PersonWrapper
                    key={movie.id}
                    title={movie.title}
                    character={movie.character}
                    imageSrc={movie.poster_path}
                    id={movie.id}
                    category="movieDetails"
                  />
                );
              })}
            </ScrollbarPannel>
          </section>
        </>
      )}
    </div>
  );
};

export default ActorDetails;
