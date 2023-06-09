import Anecdotes from './components/Anecdotes';
import CreateNew from './components/CreateNew';
import FilterAnecdotes from './components/FilterAnecdotes';

function App() {
    return (
        <div>
            <FilterAnecdotes />
            <Anecdotes />
            <CreateNew />
        </div>
    )
  }

  export default App;