import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAnecdotes, updateVotes } from './requests';

const App = () => {
    const queryClient = useQueryClient();
    const updateAnecdotesMutation = useMutation(updateVotes, {
        onSuccess: () => {
          queryClient.invalidateQueries('anecdotes')
        },
      });
    const handleVote = (anecdote) => {
        updateAnecdotesMutation.mutate({...anecdote, votes: anecdote.votes + 1});
      }

    const result = useQuery('anecdotes', getAnecdotes, {
        fetchOnWindowsFocus: false
    });
    if(result.isLoading) {
        return <div>loading data...</div>  
    }
    if(result.isError) {
        return <span>Error message</span>
    }

    const anecdotes = result.data;

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;