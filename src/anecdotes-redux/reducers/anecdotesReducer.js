import { createSlice } from '@reduxjs/toolkit';
import { getAll, createNew } from '../services/anecdotes';

const anecdotesSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        vote(state, action) {
            const newAnecdotes = state.map(i => {
                if(i.id === action.payload){
                    return {
                        ...i,
                        votes: i.votes + 1
                    }
                }else {
                    return i;
                }
            });
            const sortedAnecdotes = newAnecdotes.sort((a, b) => a.votes - b.votes).reverse();
            return sortedAnecdotes;
        },
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

export const { vote, setAnecdotes, appendAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;