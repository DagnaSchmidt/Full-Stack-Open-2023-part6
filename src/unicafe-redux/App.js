import { createStore } from 'redux';
import { Provider } from "react-redux";

import { initialState } from './reducer';
import counterReducer from './reducer';
import Main from './Main';

const store = createStore(
    counterReducer,
    initialState
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

console.log(store.getState());

function App() {

    return (
        <Provider store={store}>
            <Main />
      </Provider>
    );
  }

  export default App;