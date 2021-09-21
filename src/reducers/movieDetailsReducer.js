import movieService from "../services/movies";

const movieDetailsReducer = (state = {}, {type, data}) => {
  switch (type) {
    case "INIT_MOVIE_DETAILS": {
      return {
        movieInfo: data   
      };
    }
    case "ADD_VOTE": {
      return {
        movieInfo: {
          ...state.movieInfo, 
        vote_count: state.movieInfo.vote_count + 1
        }
      }
    }
    case "REMOVE_VOTE": {
      return {
        movieInfo: {
          ...state.movieInfo, 
        vote_count: state.movieInfo.vote_count - 1
        }
      }
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

export const addVote = () => {
  return {
    type: "ADD_VOTE",
  }
}

export const removeVote = () => {
  return {
    type: "REMOVE_VOTE",
  }
}

export default movieDetailsReducer;
