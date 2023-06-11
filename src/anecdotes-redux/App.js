import Anecdotes from './components/Anecdotes';
import CreateNew from './components/CreateNew';
import FilterAnecdotes from './components/FilterAnecdotes';
import Notification from './components/Notification';

function App() {
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