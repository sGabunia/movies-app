import movieService from "../services/movies";

export const initialState = {
  movies: [],
  loading: false,
  hasErrors: false,
};

const moviesByGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_MOVIES_BY_GENRE": {
      const newMovies = action.data.map((movie) => {
        return { ...movie };
      });
      return { movies: newMovies, loading: false, hasErrors: false };
    }
    case "LOAD_MORE_MOVIES": {
      return {
        movies: [...state.movies, ...action.data],
        loading: false,
        hasErrors: false,
      };
    }
    case "GET_POSTS": {
      return { ...state, loading: true, hasErrors: false };
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
    dispatch({ type: "GET_POSTS" });
    const movies = await movieService.loadMoreMovies(id, page);
    dispatch({
      type: "LOAD_MORE_MOVIES",
      data: movies,
    });
  };
};

export default moviesByGenreReducer;
