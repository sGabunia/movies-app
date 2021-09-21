import movieService from "../services/movies";

const actorDetailsReducer = (state = {}, {type, data}) => {
    switch (type) {
      case "INIT_ACTOR_DETAILS": {
        return {
          data,   
        };
      }
      default:
        return state;
    }
  };

  export const initializeActorDetails = (id) => {
    return async (dispatch) => {
        const actorDetails = await movieService.getActorDetails(id);
        const actorCredits = await movieService.getActorCredits(id);
        // console.log(actorDetails);
        // console.log(actorCredits);
        dispatch({
          type: "INIT_ACTOR_DETAILS",
          data: {...actorDetails, credits: actorCredits.cast },
        });
      };
  } 

  export default actorDetailsReducer