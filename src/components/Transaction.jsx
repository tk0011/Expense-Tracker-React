import React, {useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext';

const Transaction = ({transaction}) => {
    const {dispatch} = useContext(TransactionContext)

    const handleDelete = () => {
      dispatch({
        type: 'REMOVE_TRANS' ,
        payload: transaction.id
      })
    }

    return (
      <li className= {transaction.amount > 0 ? 'plus' : 'minus'} > {transaction.text} 
        <span>{transaction.amount > 0 ? `$${transaction.amount}` : `-$${Math.abs(transaction.amount)}` }</span>
        <button onClick = {handleDelete}
        className="delete-btn">X</button>
      </li> 
    )
}

export default Transaction
