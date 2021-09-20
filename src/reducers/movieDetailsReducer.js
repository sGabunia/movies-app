import movieService from "../services/movies";

const movieDetailsReducer = (state = {}, {type, data}) => {
  switch (type) {
    case "INIT_MOVIE_DETAILS": {
      return {
        data,   
      };
    }
    default:
      return state;
  }
};

export const initializeMovieByDetails = (id) => {
  return async (dispatch) => {
    const movieDetails = await movieService.getMovieDetails(id);
    const movieCastDetails = await movieService.getMovieActorsAndCrew(id);
    const movieReviews = await movieService.getMovieReviews(id)
    const movieVideos = await movieService.getMovieVideos(id)

   dispatch({
      type: "INIT_MOVIE_DETAILS",
      data: {...movieDetails, ...movieCastDetails, reviews: movieReviews, video_key: movieVideos.key},
    });
  };
};

export default movieDetailsReducer;
