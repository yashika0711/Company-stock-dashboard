const BASE_URL = "http://localhost:3001";

export async function fetchCompanies() {
  const res = await fetch(`${BASE_URL}/companies`);
  return await res.json();
}

export async function fetchAccounts(companyId) {
  const res = await fetch(`${BASE_URL}/accounts?companyId=${companyId}`);
  return await res.json();
}

export async function fetchAccountData(accountId) {
  const res = await fetch(`${BASE_URL}/accountData?accountId=${accountId}`);
  const data = await res.json();
  return data[0]; 
}
