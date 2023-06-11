import { createSlice } from '@reduxjs/toolkit';

// const anecdotesAtStart = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
//   ];
const getId = () => (100000 * Math.random()).toFixed(0);
// const asObject = (anecdote) => {
//     return {
//       content: anecdote,
//       id: getId(),
//       votes: 0
//     }
//   };
// const initialState = anecdotesAtStart.map(asObject);

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
        createAnecdote(state, action) {
            const newAnecdote = {
                content: action.payload,
                id: getId(),
                votes: 0
            }
            const newState = [...state, newAnecdote];
            return newState;
        },
        setAnecdotes(state, action) {
            return action.payload;
        }
    }
});

export const { vote, createAnecdote, setAnecdotes } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;