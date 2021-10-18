import movieService from "../services/movies";

export const initialState = {
  movies: [],
  isloading: "idle",
  isLoadingMore: "idle",
};

const moviesByGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_MOVIES_BY_GENRE_SUCCESS": {
      const newMovies = action.data.map((movie) => {
        return { ...movie };
      });
      return {
        ...state,
        movies: newMovies,
        isLoading: "resolved",
      };
    }
    case "INIT_MOVIES_BY_GENRE": {
      return { ...state, isLoading: "pending" };
    }
    case "LOAD_MORE_MOVIES_SUCCESS": {
      return {
        ...state,
        movies: [...state.movies, ...action.data],
        isLoadingMore: "resolved",
      };
    }
    case "GET_MORE_MOVIES": {
      return { ...state, isLoadingMore: "pending" };
    }

    default:
      return state;
  }
};

// action creators

export const initializeMoviesByGenre = (id) => {
  return async (dispatch) => {
    dispatch({ type: "INIT_MOVIES_BY_GENRE" });
    const movies = await movieService.getMoviesByGenre(id);
    dispatch({
      type: "INIT_MOVIES_BY_GENRE_SUCCESS",
      data: movies,
    });
  };
};

export const loadMoreMoviesByGenre = (id, page) => {
  return async (dispatch) => {
    dispatch({ type: "GET_MORE_MOVIES" });
    const movies = await movieService.loadMoreMovies(id, page);
    dispatch({
      type: "LOAD_MORE_MOVIES_SUCCESS",
      data: movies,
    });
  };
};

export default moviesByGenreReducer;
