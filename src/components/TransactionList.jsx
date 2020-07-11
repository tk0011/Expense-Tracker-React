import React, {useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'
import Transaction from './Transaction'


const TransactionList = () => {
  const {transactions} = useContext(TransactionContext)

    return (
        
     <div>
          <h3>History</h3>
      <ul className="list">
       {transactions.map(transaction => {
         return (
          <Transaction key = {transaction.id} transaction = {transaction} />
         )
       }) }
      </ul>
     </div>
    )
}

export default TransactionList
