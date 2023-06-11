import { configureStore } from '@reduxjs/toolkit';
import anecdotesReducer from './reducers/anecdotesReducer';
import filterReducer from './reducers/filterReducer';

export const store = configureStore({
    reducer: {
        anecdotes: anecdotesReducer,
        filter: filterReducer
    }
});