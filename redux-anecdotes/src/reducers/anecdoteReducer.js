import anecdotesService from "../services/anecdotes";

export const addAction = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    });
  };
};

export const voteAction = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdotesService.vote(anecdote);
    dispatch({
      type: "VOTE",
      data: updatedAnecdote,
    });
  };
};

export const initializeAction = (anecdotes) => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_ANECDOTE":
      return [...state, action.data];
    case "VOTE":
      const { id } = action.data;
      const votedAnecdote = state.find((a) => a.id === id);
      const updatedAnecdote = {
        ...votedAnecdote,
        votes: votedAnecdote.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      );
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

export default anecdoteReducer;
