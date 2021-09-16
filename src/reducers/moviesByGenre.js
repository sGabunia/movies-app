import movieService from "../services/movies";

const moviesByGenreReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_MOVIES_BY_GENRE": {
      const newMovies = action.data.map((movie) => {
        return { ...movie };
      });
      return newMovies;
    }
    case "LOAD_MORE_MOVIES": {
      return [...state, ...action.data];
    }
    default:
      return state;
  }
};

// action creators

export const initializeMoviesByGenre = (id) => {
  return async (dispatch) => {
    const movies = await movieService.getMoviesByGenre(id);
    dispatch({
      type: "INIT_MOVIES_BY_GENRE",
      data: movies,
    });
  };
};

export const loadMoreMoviesByGenre = (id, page) => {
  return async (dispatch) => {
    const movies = await movieService.loadMoreMovies(id, page);
    dispatch({
      type: "LOAD_MORE_MOVIES",
      data: movies,
    });
  };
};

export default moviesByGenreReducer;
