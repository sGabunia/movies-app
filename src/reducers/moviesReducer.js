import movieService from "../services/movies";

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_MOVIES":{
      const newMovies = action.data.map((movie) => {
        return { ...movie, isBookmarked: false };
      });
      return newMovies;
    }
    case "BOOKMARK_MOVIE": {
        const bookmarkedMovie = state.find((movie) => movie.id === action.payload.id)
        const changedIsBookmaredStatus = {...bookmarkedMovie, isBookmarked: true}
        const newMovieList = state.map((movie) => movie.id !== action.payload.id ? movie : changedIsBookmaredStatus )
        return newMovieList
    }
    case "REMOVE_MOVIE_FROM_BOOKMARKED": {
        return state.filter((movie) => movie.id !== action.payload.id)
    }
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

export const addMovieToBookmarked = (id) => {
  return {
    type: "BOOKMARK_MOVIE",
    payload: {id}
  }
}

export const removeMovieFromBookmarked = (id) => {
  return {
    type: "REMOVE_MOVIE_FROM_BOOKMARKED",
    payload: {id}
  }
}


export default moviesReducer;
