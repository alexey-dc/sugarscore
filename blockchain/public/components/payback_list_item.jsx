import React from 'react';

const PaybackListItem = ({loan, payback}) => {
  return (
    <li className="loan-card">
      <h1>Loan #{loan.loanId}</h1>
      <h2>You owe {loan.paybackAmount} ETH</h2>
      <h2>You have {loan.daysRemaining} days remaining</h2>
      <button onClick={() => payback(loan.loanId)}>Payback</button>
    </li>
  );
};

export default PaybackListItem;