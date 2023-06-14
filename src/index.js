import React from 'react';
import ReactDOM from 'react-dom/client';

//UNI-CAFE REDUX
// import App from './unicafe-redux/App';
// import { initialState } from './unicafe-redux/reducer';
// import {createStore} from 'redux';
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
// import App from './anecdotes-redux/App';
// import { Provider } from 'react-redux';
// import { store } from './anecdotes-redux/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(store.getState());

// const renderApp = () => {root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// )};
// renderApp();



//ANECDOTES V2
// import App from './anecdotes-v2/App';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ContextProvider } from './anecdotes-v2/context';

// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <QueryClientProvider client={queryClient}>
//         <ContextProvider>
//             <App />
//         </ContextProvider>
//     </QueryClientProvider>
// );


//ANECDOTES V3
// import App from './anecdotes-v3/App';
// import { BrowserRouter } from 'react-router-dom';
// ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);

//COUNTRIES
// import App from './countries/App';
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//NOTES AND PERSONS
import App from './notes-and-persons/App';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
