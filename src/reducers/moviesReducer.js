import movieService from "../services/movies";

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_MOVIES":
      const newMovies = action.data.map((movie) => {
        return { ...movie };
      });
      return newMovies;
    default:
      return state;
  }
};

// action creators

export const initializeMovies = () => {
  return async (dispatch) => {
    const movies = await movieService.getAll();

    dispatch({
      type: "INIT_MOVIES",
      data: movies,
    });
  };
};

export default moviesReducer;
