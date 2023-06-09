import React from 'react';
import { useSelector } from 'react-redux'
import Anecdote from './Anecdote';

const Anecdotes = () => {
    const anecdotes = useSelector(state => state);

  return (
    <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(i => <Anecdote key={i.id} {...i} />)}
    </div>
  )
}

export default Anecdotes;