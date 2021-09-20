import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movie.css"

const MovieTrailer = ({ id }) => {
  const [key, setKey] = useState("");
  const getVideo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c9ef2728095f70fe3dea055a56d5cc83`
      )
      .then((data) => setKey(data.data.results[0]?.key));
  };
  useEffect(getVideo, [id]);

  return (
    <div>
      {key ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${key}`}
          title="YouTube video player"
          frameorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
        ></iframe>
      ) : null}
    </div>
  );
};

export default MovieTrailer;
