function App({store}) {

    return (
      <div>
        <button onClick={() => store.dispatch({type: 'GOOD'})}>good</button>
        <button onClick={() => store.dispatch({type: 'OK'})}>ok</button> 
        <button onClick={() => store.dispatch({type: 'BAD'})}>bad</button>
        <button onClick={() => store.dispatch({type: 'RESET'})}>reset stats</button>

        <div>good {store.getState().good}</div>
        <div>ok {store.getState().ok}</div>
        <div>bad {store.getState().bad}</div>
      </div>
    );
  }

  export default App;