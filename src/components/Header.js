import { useEffect, useState } from 'react';
import { fetchCompanies, fetchAccounts } from '../services/api';

function Header({ setCompanyId, setAccountId }) {
  const [companies, setCompanies] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');

  useEffect(() => {
    fetchCompanies().then(setCompanies);
  }, []);

  const handleCompanyChange = async (e) => {
    const id = e.target.value;
    setCompanyId(id);
    setSelectedCompany(companies.find(c => c.id === id)?.name || '');
    const accs = await fetchAccounts(id);
    setAccounts(accs);
    setAccountId('');
  };

  return (
    <div className="header">
      <div className="company-name">{selectedCompany}</div>
      <div className="dropdowns">
        <select onChange={handleCompanyChange}>
          <option value="">Select Company</option>
          {companies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select onChange={e => setAccountId(e.target.value)}>
          <option value="">Select Account</option>
          {accounts.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
      </div>
    </div>
  );
}

export default Header;
