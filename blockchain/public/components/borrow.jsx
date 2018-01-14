import React from 'react';
import { Link } from 'react-router-dom';
const Borrow = ({ borrow_amount }) => {
  return (
    <div>
      <Link to="/payback"><button>Borrow {borrow_amount} ETH</button></Link>
    </div>
  );
};

export default Borrow;