const toggleBgReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BG":
      const newState = !state;
      return newState;
    default:
      return state;
  }
};

// action creators
export const toggleBg = () => {
  return {
    type: "TOGGLE_BG",
  };
};

export default toggleBgReducer;
