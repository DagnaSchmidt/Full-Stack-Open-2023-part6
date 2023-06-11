import axios from 'axios';
const baseUrl = 'http://localhost:3001/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

export const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  }

export const createNew = async (content) => {
    const newAnecdote = {
            content: content,
            id: getId(),
            votes: 0
    }
    const response = await axios.post(baseUrl, newAnecdote);
    return response.data;
}