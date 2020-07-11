import React, {useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext';

const IncomeExpense = () => {
  const {transactions} = useContext(TransactionContext)
  

  const amounts = transactions.map(transaction => transaction.amount)
  
  const total = amounts.reduce((a,b) => a+b, 0)
  
  const income = amounts.filter(item => item > 0).reduce((a, item) => a+item, 0)

  const expense =  amounts.filter(item => item < 0).reduce((a, item) => (a+item), 0) *
  -1


    return (
      <div>
      <h4>Your Balance</h4>
      <h1 style = {total >= 0 ? {color : '#2ecc71'} : {color : '#c0392b'}}
      > ${Math.abs(total)}
      </h1>
        <div className= 'inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p className="money plus">
          ${income} 
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
      </div>
      </div>
    )
}

export default IncomeExpense
