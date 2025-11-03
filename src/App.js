import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import TransactionTable from './components/TransactionTable';
import './styles/main.css'

function App() {
  const [companyId, setCompanyId] = useState('');
  const [accountId, setAccountId] = useState('');

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header setCompanyId={setCompanyId} setAccountId={setAccountId} />
        {accountId && (
          <>
            <BalanceCard accountId={accountId} />
            <TransactionTable accountId={accountId} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
