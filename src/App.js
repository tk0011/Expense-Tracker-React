import React from 'react';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddNewTransaction from './components/AddNewTransaction';
import {TransactionContextProvider} from './context/TransactionContext'
import './App.css';

function App() {
  return (
    <TransactionContextProvider>
      <Header />
      <div className="container">
          <IncomeExpense />
          <TransactionList/>
          <AddNewTransaction />
      </div>
    </TransactionContextProvider>
  );
}

export default App;
