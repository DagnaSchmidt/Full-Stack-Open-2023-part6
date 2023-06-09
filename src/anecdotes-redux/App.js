import { useSelector, useDispatch } from 'react-redux';
import Anecdotes from './components/Anecdotes';
import CreateNew from './components/CreateNew';

function App() {

    return (
        <div>
            <Anecdotes />
            <CreateNew />
        </div>
    )
  }

  export default App;