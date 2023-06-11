import React from 'react';
import { useDispatch } from 'react-redux';
import { filterChange } from '../reducers/filterReducer';

const FilterAnecdotes = () => {
    const dispatch = useDispatch();

  return (
    <div>
        <p>filter</p>
        <input type='text' onChange={e => dispatch(filterChange(e.target.value))} />
    </div>
  )
}

export default FilterAnecdotes;