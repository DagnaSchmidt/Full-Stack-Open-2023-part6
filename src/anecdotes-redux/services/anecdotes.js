import axios from 'axios';
const baseUrl = 'http://localhost:3001/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

export const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data.sort((a,b) => b.votes - a.votes);
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

export const updateVote = async (id) => {
    const anecdoteToUpdate = await axios.get(`${baseUrl}/${id}`);
    const updatedAnecdote = {
        content: anecdoteToUpdate.data.content,
        id: anecdoteToUpdate.data.id,
        votes: anecdoteToUpdate.data.votes + 1
    }
    const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote);
    const allAnecdotes = await axios.get(baseUrl);
    return allAnecdotes.data.sort((a,b) => b.votes - a.votes);
}