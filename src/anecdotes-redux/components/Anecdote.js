import React from 'react';
import { useDispatch } from 'react-redux';
import { voteOnAnecdote } from '../reducers/anecdotesReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';

const Anecdote = ({content, votes, id}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(voteOnAnecdote(id));
      dispatch(setNotification(`you voted ${content}`));
      setTimeout(() => dispatch(clearNotification()), 5000);
    }
  return (
    <div style={{padding: '12px', border: '1px solid black', marginBottom: '12px'}}>
        <p>{content}</p>
        <div>
            <p> has {votes} votes</p>
            <button onClick={handleClick}>vote</button>
        </div>
    </div>
  )
}

export default Anecdote;