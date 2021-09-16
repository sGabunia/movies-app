import movieService from "../services/movies";

const movieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "INIT_MOVIE_DETAILS": {
      return action.data;
    }
    default:
      return state;
  }
};

export const initializeMovieByDetails = (id) => {
  return async (dispatch) => {
    const movieDetails = await movieService.getMovieDetails(id);

    dispatch({
      type: "INIT_MOVIE_DETAILS",
      data: movieDetails,
    });
  };
};

export default movieDetailsReducer;
