import React from 'react';
import { useParams } from 'react-router-dom';

const Anecdote = ({anecdote}) => {
  return (
    <div>
        <h4>{anecdote.content}</h4>
        <p>by {anecdote.author}</p>
        <p>has {anecdote.votes} votes</p>
        <p>for more info see {anecdote.info}</p>
    </div>
  )
}

export default Anecdote;