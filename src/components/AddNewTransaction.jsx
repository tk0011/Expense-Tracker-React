import React, {useState, useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'
import { v4 as uuidv4} from 'uuid'
const AddNewTransaction = () => {
    const {dispatch} = useContext(TransactionContext)
   const [text , setText] = useState('')
   const [amount, setAmount] = useState(0)

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch({type : 'ADD_TRANS', 
       payload: {text, amount : +amount, id: uuidv4()} })
      setText('')
      setAmount(0)
   }

    return (
    <div>
         <h3>Add new transaction</h3>
      
      <form onSubmit = {handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange= {(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br/>
            negative - expense, positive - income </label>
          <input type="number" value= {amount} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        
        <button className="btn">Add transaction</button>
      
      </form>
       
     </div>
    )
}

export default AddNewTransaction
