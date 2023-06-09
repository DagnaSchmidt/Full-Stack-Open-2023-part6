const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
const getId = () => (100000 * Math.random()).toFixed(0);
const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  };
export const initialState = anecdotesAtStart.map(asObject);

const anecdotesReducer = (state = initialState, action) => {
    if(action.type === 'VOTE'){
        const newState = state.map(item => {
            if(item.id === action.payload.id){
                return {
                    ...item,
                    votes: item.votes + 1
                }
            }else{
                return item;
            }
        });
        return state = newState;
    }else if(action.type === 'ADD'){
        const newAnecdote = {
            content: action.payload.newAnecdote,
            id: getId(),
            votes: 0
        }
        return state = [...state, newAnecdote];
    }
    return state
  }


export const vote = (id) => {
    return {
        type: 'VOTE',
        payload: {id}
      }
}

export const createAnecdote = (newAnecdote) => {
    return {
        type: 'ADD',
        payload: {newAnecdote}
    }
}

export default anecdotesReducer;