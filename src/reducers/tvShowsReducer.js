import movieService from "../services/movies";

const tvShowsReducer = (state = {tvShows: [], loading: false}, action) => {
    switch (action.type) {
      case "GET_TV_SHOWS": {
        return {...state, loading: true}
      }
      case "GET_TV_SHOWS_SUCCESS": {
        const newShows = action.data.map((show) => {
          return { ...show, isBookmarked: false, isLiked: false };
        });
        return {tvShows: newShows, loading: false};
      }
      default:
        return state;
    }
  };

  const getShows = () => {
    return {
        type: "GET_TV_SHOWS"
    }
  }

  const getShowsSuccess = (shows) => {
      return {
        type: "GET_TV_SHOWS_SUCCESS",
        data: shows,
      }
  }

  export const fetchShows = () => {
    return async (dispatch) => {
      dispatch(getShows())
      const shows = await movieService.getAllTvShows();
      dispatch(getShowsSuccess(shows));
    };
  };

  
 
  export default tvShowsReducer
  