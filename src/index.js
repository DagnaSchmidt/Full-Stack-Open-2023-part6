import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers } from 'redux';


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
import anecdotesReducer from './anecdotes-redux/reducers/anecdotesReducer';
import filterReducer from './anecdotes-redux/reducers/filterReducer';
import { Provider } from 'react-redux';

const reducer = combineReducers({
    anecdotes: anecdotesReducer,
    filter: filterReducer
});

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store.getState());

const renderApp = () => {root.render(
    
    <Provider store={store}>
        <App />
    </Provider>
)};
renderApp();
