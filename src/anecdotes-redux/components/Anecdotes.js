import React from 'react';
import { useSelector } from 'react-redux'
import Anecdote from './Anecdote';

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdotes);
    console.log(anecdotes);
    const filter = useSelector(state => state.filter);

  return (
    <div>
        <h2>Anecdotes</h2>
        {filter.length === 0 ?
            anecdotes.map(i => <Anecdote key={i.id} {...i} />)
        :
            anecdotes.map(i => i.content.toLowerCase().includes(filter.toLowerCase()) && <Anecdote key={i.id} {...i} />)
        }
    </div>
  )
}

export default Anecdotes;