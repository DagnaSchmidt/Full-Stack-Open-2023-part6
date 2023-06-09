import React from 'react';
import { connect } from 'react-redux';

const Main = ({good, ok, bad, voteGood, voteBad, voteOk, reset}) => {
  return (
    <div>
        <button onClick={voteGood}>good</button>
        <button onClick={voteOk}>ok</button> 
        <button onClick={voteBad}>bad</button>
        <button onClick={reset}>reset stats</button>

        <div>good {good}</div>
        <div>ok {ok}</div>
        <div>bad {bad}</div>
    </div>
  )
}

const mapStateToProps = store => {
    return { 
      good: store.good,
      bad: store.bad,
      ok: store.ok
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
      voteGood: () => dispatch({type: 'GOOD'}),
      voteBad: () => dispatch({type: 'BAD'}),
      voteOk: () => dispatch({type: 'OK'}),
      reset: () => dispatch({type: 'RESET'})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Main);