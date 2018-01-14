import React from 'react';

const Borrow = ({ borrow_amount }) => {
  return (
    <div>
      <button>Borrow {borrow_amount} ETH</button>
    </div>
  );
};

export default Borrow;