import React, { createContext, useReducer } from 'react';

//import Reducer
import AppReducer from './AppReducer'
// create Initial State
const initialState = {
    transcations :[
        {id:1, description:" Income One", transactionAmount:1000},
        {id:2, description:" Income TWO", transactionAmount:-100},
        {id:3, description:" Income THREE", transactionAmount:3000},
        {id:4, description:" Income FOUR", transactionAmount:-200}

    ]
}

//create the Global Context
 export const GlobalContext = createContext(initialState);

 // Create a Provider for the Global Context
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer,initialState);

    return(
        <GlobalContext.Provider value={
            {
                transcations: state.transcations
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}