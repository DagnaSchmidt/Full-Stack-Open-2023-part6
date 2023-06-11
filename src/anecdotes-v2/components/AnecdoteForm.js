import { useMutation, useQueryClient } from 'react-query'
import { createNewAnecdote } from '../requests';
import { useContext } from 'react';
import Context from '../context';

const AnecdoteForm = () => {
  const [alert, alertDispatch] = useContext(Context);

    const queryClient = useQueryClient();
    const newNoteMutation = useMutation(createNewAnecdote, {
        onSuccess: (newAnecdote) => {
          const anecdotes = queryClient.getQueryData('anecdotes');
          queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote));
          alertDispatch({type: 'ADD', payload: `${newAnecdote.content} added!`});
          setTimeout(() => {
            alertDispatch({type: 'CLEAR'})
          }, 5000);
        }
    });
    const getId = () => (100000 * Math.random()).toFixed(0);

    const onCreate = (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      console.log('new anecdote');
      newNoteMutation.mutate({ content: content, id: getId(), votes: 0 });
  }
  
    return (
      <div>
        <h3>create new</h3>
        <form onSubmit={onCreate}>
          <input name='anecdote' />
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
  
  export default AnecdoteForm;