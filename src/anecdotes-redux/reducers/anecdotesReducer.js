import { createSlice } from '@reduxjs/toolkit';
import { getAll, createNew, updateVote } from '../services/anecdotes';

const anecdotesSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        setAnecdotes(state, action) {
            return action.payload;
        },
        appendAnecdote(state, action) {
            return [...state, action.payload];
        }
    }
});

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await getAll();
        dispatch(setAnecdotes(anecdotes));
    }
};

export const createAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await createNew(content);
        dispatch(appendAnecdote(newAnecdote));
    }
};

export const voteOnAnecdote = (id) => {
    return async dispatch => {
        const anecdotes = await updateVote(id);
        dispatch(setAnecdotes(anecdotes));
    }
}

export const { vote, setAnecdotes, appendAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;