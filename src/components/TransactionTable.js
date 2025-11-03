import { useEffect, useState } from 'react';
import { fetchAccountData } from '../services/api';

function TransactionTable({ accountId }) {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    fetchAccountData(accountId).then(data => setLoads(data.loads));
  }, [accountId]);

  return (
    <div className="table-container">
      <h3>Latest Loads are displayed here</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Credit</th>
            <th>A/c Balance</th>
            <th>UTR/RRN</th>
            <th>A/c No./UPI</th>
          </tr>
        </thead>
        <tbody>
          {loads.map((load, i) => (
            <tr key={i}>
              <td>{load.date}</td>
              <td className="credit">₹ {load.credit}</td>
              <td>₹ {load.balance}</td>
              <td>{load.utr}</td>
              <td>{load.account}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
