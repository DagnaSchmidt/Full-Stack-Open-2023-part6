const filterReducer = (state = '', action) => {
    if(action.type === 'FILTER'){
        return state = action.payload.filter;
    }
    return state;
}

export const filterChange = (filter) => {
    return {
        type: 'FILTER',
        payload: { filter }
    }
}

export default filterReducer;