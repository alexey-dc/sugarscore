import React from 'react';

const PaybackListItem = ({loan, loanId, payback}) => {
  return (
    <li>
      <h1>{loan}</h1>
      <button onClick={() => payback(loanId)}>Payback</button>
    </li>
  );
};

export default PaybackListItem;