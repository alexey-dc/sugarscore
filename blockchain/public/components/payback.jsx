import React from 'react';
import PaybackListItem from './payback_list_item';
const Payback = ({loans, payback}) => {
  let loanList = loans.map((loan) => {
    return <PaybackListItem loan={loan} loanId={0} payback={payback}/>;
  });
  return (
    <div>
      <ul>
        {loanList}
      </ul>
    </div>
  );
};

export default Payback;