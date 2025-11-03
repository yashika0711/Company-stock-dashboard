import { useEffect, useState } from 'react';
import { fetchAccountData } from '../services/api';

function BalanceCard({ accountId }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchAccountData(accountId).then(data => setBalance(data.balance));
  }, [accountId]);

  return (
    <div className="balance-card">
      <div className="icon">💼</div>
      <div>
        <div className="label">Available Balance</div>
        <div className="amount">₹ {balance.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default BalanceCard;
