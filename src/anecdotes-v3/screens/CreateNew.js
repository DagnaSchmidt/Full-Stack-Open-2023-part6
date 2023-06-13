import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useField from '../hooks/useField';

const CreateNew = ({setAnecdotes, setNotification, anecdotes}) => {
    const content = useField('text');
    const author = useField('text');
    const info = useField('text');
    console.log(content);

    const navigate = useNavigate();

    const addNew = (anecdote) => {
        anecdote.id = Math.round(Math.random() * 10000);
        setAnecdotes(anecdotes.concat(anecdote));
        navigate('/anecdotes');
        setNotification(`a new anecdote ${content.value} successfully added!`);
        setTimeout(() => {
            setNotification('');
        }, 5000);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNew({
          content: content.value,
          author: author.value,
          info: info.value,
          votes: 0
        });
      };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
      </form>
      <button onClick={() => {content.reset(); author.reset(); info.reset()}}>reset</button>
    </div>
  )
}

export default CreateNew;