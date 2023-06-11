import { createContext, useReducer } from 'react';

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return action.payload;
        case "CLEAR":
            return null;
        default:
            return state;
    }
}

const Context = createContext();

export const ContextProvider = (props) => {
    const [alert, alertDispatch] = useReducer(notificationReducer, null);

    return (
        <Context.Provider value={[alert, alertDispatch] }>
          {props.children}
        </Context.Provider>
      )
    }

export default Context;