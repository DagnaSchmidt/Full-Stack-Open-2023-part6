import { createStore } from 'redux';
import { Provider } from "react-redux";

import { initialState } from './reducer';
import counterReducer from './reducer';

const store = createStore(
    counterReducer,
    initialState
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


function App() {

    const good = () => {
        store.dispatch({
          type: 'GOOD'
        })
      };

    return (
        <Provider store={store}>
            <div>
                <button onClick={good}>good</button> 
                <button>ok</button> 
                <button>bad</button>
                <button>reset stats</button>
                <div>good {store.getState().good}</div>
                <div>ok</div>
                <div>bad</div>
            </div>
      </Provider>
    );
  }
  
  export default App;