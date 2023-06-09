import React from 'react';
import { useDispatch } from 'react-redux';
import { filterChange } from '../reducers/filterReducer';

const FilterAnecdotes = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(filterChange(e.target.value));
    }

  return (
    <div>
        <p>filter</p>
        <input type='text' onChange={handleChange} />
    </div>
  )
}

export default FilterAnecdotes;