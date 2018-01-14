import React from 'react';
import PaybackListItem from './payback_list_item';
const Payback = ({loans, payback}) => {
  // debugger
  let loanList = loans.map((loan) => {
    return <PaybackListItem loan={loan} payback={payback}/>;
  });
  let bankRoll = 1.45;
  return (
    <div>
      <h1>You have {bankRoll} ETH</h1>
      <ul>
        {loanList}
      </ul>
    </div>
  );
};

export default Payback;