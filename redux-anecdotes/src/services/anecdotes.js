import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const vote = async (anecdote) => {
  const { id, votes } = anecdote;
  const newAnecdote = { ...anecdote, votes: votes + 1 };
  const url = `${baseUrl}/${id}`;
  const response = await axios.put(url, newAnecdote);
  return response.data;
};

export default { getAll, createNew, vote };
