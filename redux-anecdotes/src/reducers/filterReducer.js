const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.query;
    default:
      return state;
  }
};

export const setFilterAction = (query) => {
  return {
    type: "SET_FILTER",
    query,
  };
};

export default filterReducer;
