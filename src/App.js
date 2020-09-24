import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState'

// import Header Component
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TranscationHistory } from './components/TranscationHistory'
import { AddTranscation } from './components/AddTranscation'

function App() {
  return (
      <GlobalProvider>
      <Header />
      <div className="container"> 
        <Balance />
        <AccountSummary />
        <TranscationHistory/>
        <AddTranscation />
      </div>
      </GlobalProvider>
  );
}

export default App;
