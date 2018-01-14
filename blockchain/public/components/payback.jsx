import React from 'react';
import PaybackListItem from './payback_list_item';
const Payback = ({loans}) => {
  let loanList = loans.map((loan) => {
    return <li><PaybackListItem loan={loan}/></li>;
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