import { configureStore } from '@reduxjs/toolkit';
import anecdotesReducer, {setAnecdotes} from './reducers/anecdotesReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';
import { getAll } from './services/anecdotes';

export const store = configureStore({
    reducer: {
        anecdotes: anecdotesReducer,
        filter: filterReducer,
        notification: notificationReducer
    }
});

getAll().then(a => {
    store.dispatch(setAnecdotes(a));
});