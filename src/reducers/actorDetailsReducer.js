import movieService from "../services/movies";

const actorDetailsReducer = (
  state = { actor: null, status: "idle" },
  { type, data }
) => {
  switch (type) {
    case "INIT_ACTOR_DETAILS": {
      return {
        ...state,
        status: "pending",
      };
    }
    case "INIT_ACTOR_DETAILS_SUCCESS": {
      return {
        actor: data,
        status: "resolved",
      };
    }
    default:
      return state;
  }
};

export const initializeActorDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: "INIT_ACTOR_DETAILS" });
    const actorDetails = await movieService.getActorDetails(id);
    const actorCredits = await movieService.getActorCredits(id);

    dispatch({
      type: "INIT_ACTOR_DETAILS_SUCCESS",
      data: { ...actorDetails, credits: actorCredits.cast },
    });
  };
};

export default actorDetailsReducer;
