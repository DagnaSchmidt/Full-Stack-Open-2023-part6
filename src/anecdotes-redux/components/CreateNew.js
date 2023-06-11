import React from 'react';
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdotesReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';
import { createNew } from '../services/anecdotes';

const CreateNew = () => {
    const dispatch = useDispatch();

    const addAnecdote = async (e) => {
        e.preventDefault();
        const content = e.target.anecdote.value;
        e.target.anecdote.value = '';
        const newAnecdote = await createNew(content);
        dispatch(createAnecdote(newAnecdote));
        dispatch(setNotification(`${content} added!`));
        setTimeout(() => dispatch(clearNotification()), 5000);
    }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name='anecdote' /></div>
            <button>create</button>
        </form>
    </div>
  )
}

export default CreateNew;