import "./Movie.css";

const MovieTrailer = ({ videoKey }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player"
        frameorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
