import movieService from "../services/movies";

const movieDetailsReducer = (
  state = { movieInfo: null, status: "idle" },
  { type, data }
) => {
  switch (type) {
    case "GET_MOVIE_DETAILS": {
      return {
        ...state,
        status: "pending",
      };
    }
    case "GET_MOVIE_DETAILS_SUCCESS": {
      return {
        movieInfo: data,
        status: "resolved",
      };
    }

    default:
      return state;
  }
};

const getMovieDetails = () => {
  return {
    type: "GET_MOVIE_DETAILS",
  };
};

const getMovieDetailsSuccess = (
  movieDetails,
  movieCastDetails,
  movieReviews,
  movieVideos
) => {
  return {
    type: "GET_MOVIE_DETAILS_SUCCESS",
    data: {
      ...movieDetails,
      ...movieCastDetails,
      reviews: movieReviews,
      video_key: movieVideos?.key,
    },
  };
};

export const initializeMovieByDetails = (id) => {
  return async (dispatch) => {
    dispatch(getMovieDetails());

    const movieDetails = await movieService.getMovieDetails(id);
    const movieCastDetails = await movieService.getMovieActorsAndCrew(id);
    const movieReviews = await movieService.getMovieReviews(id);
    const movieVideos = await movieService.getMovieVideos(id);

    dispatch(
      getMovieDetailsSuccess(
        movieDetails,
        movieCastDetails,
        movieReviews,
        movieVideos
      )
    );
  };
};

export default movieDetailsReducer;
