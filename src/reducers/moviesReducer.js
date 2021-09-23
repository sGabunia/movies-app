import movieService from "../services/movies";

const moviesReducer = (state = {movies: [], isLoading: false}, action) => {
  switch (action.type) {
    case "INIT_MOVIES": {
      return {...state, isLoading: true}
    }
    case "INIT_MOVIES_SUCCESS":{
      const newMovies = action.data.map((movie) => {
        return { ...movie, isBookmarked: false, isLiked: false };
      });
      return {movies: newMovies, isLoading: false}
    }
    case "BOOKMARK_MOVIE": {
        const bookmarkedMovie = state.find((movie) => movie.id === action.payload.id)
        const changedIsBookmaredStatus = {...bookmarkedMovie, isBookmarked: true}
        const newMovieList = state.map((movie) => movie.id !== action.payload.id ? movie : changedIsBookmaredStatus )
        return newMovieList
    }
    case "REMOVE_MOVIE_FROM_BOOKMARKED": {
      const bookmarkedMovie = state.find((movie) => movie.id === action.payload.id)
      const changedIsBookmaredStatus = {...bookmarkedMovie, isBookmarked: false}
      const newMovieList = state.map((movie) => movie.id !== action.payload.id ? movie : changedIsBookmaredStatus )
      return newMovieList
    }
    case "ADD_VOTE": {
      const likedMovie = state.find((movie) => movie.id === action.payload.id)
      const changedIsLikedStatus = {...likedMovie, isLiked: true, vote_count: likedMovie?.vote_count + 1}
      const newMovieList = state.map((movie) => movie.id !== action.payload.id ? movie : changedIsLikedStatus )
      return newMovieList
      }
    case "REMOVE_VOTE": {
      const likedMovie = state.find((movie) => movie.id === action.payload.id)
      const changedIsLikedStatus = {...likedMovie, isLiked: false, vote_count: likedMovie?.vote_count - 1}
      const newMovieList = state.map((movie) => movie.id !== action.payload.id ? movie : changedIsLikedStatus )
      return newMovieList
    } 
    default:
      return state;
  }
};

// action creators

export const initializeMovies = () => {
  return async (dispatch) => {
    dispatch({type: "INIT_MOVIES"})
    const movies = await movieService.getAll();

    dispatch({
      type: "INIT_MOVIES_SUCCESS",
      data: movies,
    });
  };
};

export const addVote = (id) => {
  return {
    type: "ADD_VOTE",
    payload: {id}
  }
}

export const removeVote = (id) => {
  return {
    type: "REMOVE_VOTE",
    payload: {id}
  }
}


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
