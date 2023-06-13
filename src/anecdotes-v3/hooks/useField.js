import React, { useState } from 'react'

const useField = (type) => {
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue('');
    }

  return { rest: { value, onChange, type}, reset }
}

export default useField;