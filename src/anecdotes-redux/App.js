import { useEffect } from 'react';
import Anecdotes from './components/Anecdotes';
import CreateNew from './components/CreateNew';
import FilterAnecdotes from './components/FilterAnecdotes';
import Notification from './components/Notification';
import { initializeAnecdotes } from './reducers/anecdotesReducer';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAnecdotes());
    }, [dispatch]);

    return (
        <div>
            <Notification />
            <FilterAnecdotes />
            <Anecdotes />
            <CreateNew />
        </div>
    )
  }

  export default App;