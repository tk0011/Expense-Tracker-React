import React, {createContext, useReducer} from 'react'
import transactionReducer from '../reducer/transactionReducer'

const intialState = {
    transactions : [
    { id: 1, text: 'Salary', amount: 10000 } ,
    { id: 2, text: 'Food', amount: -200 } 
  ]} 

const TransactionContext = createContext(intialState)

const TransactionContextProvider = ({children}) => {

const [state, dispatch] = useReducer(transactionReducer, intialState)
  
    return (
        <TransactionContext.Provider value = {{ transactions : state.transactions , dispatch}}>
                {children}
        </TransactionContext.Provider>
    )
}

export {TransactionContextProvider, TransactionContext}
