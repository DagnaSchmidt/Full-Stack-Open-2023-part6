import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';


//UNI-CAFE REDUX
// import App from './unicafe-redux/App';
// import { initialState } from './unicafe-redux/reducer';
// import reducer from './unicafe-redux/reducer';

// const store = createStore(
//     reducer,
//     initialState
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const renderApp = () => {root.render(<App store={store} />)};
// renderApp();
// store.subscribe(renderApp);



//ANECDOTES
import App from './anecdotes-redux/App';
import reducer from './anecdotes-redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {root.render(
    <Provider store={store}>
        <App />
    </Provider>
)};
renderApp();
