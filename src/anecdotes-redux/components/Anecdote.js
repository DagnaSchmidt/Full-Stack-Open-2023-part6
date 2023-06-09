import React from 'react';
import { useDispatch } from 'react-redux';
import { vote } from '../reducer';

const Anecdote = ({content, votes, id}) => {
    const dispatch = useDispatch();
  return (
    <div style={{padding: '12px', border: '1px solid black', marginBottom: '12px'}}>
        <p>{content}</p>
        <div>
            <p> has {votes} votes</p>
            <button onClick={() => dispatch(vote(id))}>vote</button>
        </div>
    </div>
  )
}

export default Anecdote;