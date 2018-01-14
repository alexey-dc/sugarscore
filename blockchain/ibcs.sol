// We have to specify what version of compiler this code will compile with
pragma solidity ^0.4.11;

contract Ibcs {
  uint256 loanIndex = 0;

  struct Loan {
    uint256 loanId;
    uint256 amount;
    uint32 rate; // decimals not supported in solidity; say 100% = 10000 rate, 0.1% = 10 rate
    uint64 origination; // Unix timestamp
    uint64 duration; // Milliseconds
    uint64 repayTimestamp; // 0 means loan has not been paid off
  }
  
  mapping (uint256 => Loan) private loans;
  mapping (address => uint256) private balance; // 
  mapping (address => uint256[]) private userLoanIds; // loans by user

  address private owner;
  string public name;
  string public symbol;
  uint8 public decimals = 18;
  uint256 public totalSupply;
  
  function Ibcs(uint256 initialSupply, string tokenName, string tokenSymbol) {
    totalSupply = initialSupply * 10 ** uint256(decimals);
    owner = msg.sender;
    balance[owner] = totalSupply;
    name = tokenName;
    symbol = tokenSymbol;
  }

  function getProfile(address user) public returns (uint256 balance, uint256 loanSum, uint256 reputation, uint256 borrowLimit) {
    balance = balanceOf[user];
    loanSum = getLoanSum(user);
    reputation = getReputation(user);
    borrowLimit = getBorrowLimit(reputation);
    return (balance, loanSum, reputation, borrowLimit);
  }
  function getReputation(address user) private returns (uint256 result) {
    return balanceOf[user];
  }
  function getBorrowLimit(uint256 reputation) private returns (uint256 limit) {
    return reputation;
  }
  function getLoanSum(address user) private returns (uint256 loanSum) {
    uint256[] storage loanIds = userLoanIds[user];
    loanSum = 0;
    for(uint256 i = 0; i < loanIds.length; i++) {
      Loan storage loan = loans[loanIds[i]];
      if(loan.repayTimestamp == 0)
        loanSum += loan.amount;
    }
    return loanSum;
  }

  function getUnpayedLoanIds(address user) public returns (uint256[] loanIds) {
    uint256[] storage storageLoanIds = userLoanIds[user];
    return storageLoanIds;
    uint256[] storage unpayedLoanIds;
    for(uint256 i = 0; i< storageLoanIds.length; i++) {
      if(loans[storageLoanIds[i]].repayTimestamp == 0) {
        unpayedLoanIds.push(storageLoanIds[i]);
      }
    }
    return unpayedLoanIds;
  }

  function getLoanDetails(uint256 loanId) public returns (uint256 amount, uint64 rate, uint64 origination, uint64 duration) {
    Loan storage loan = loans[loanId];
    return (loan.amount, loan.rate, loan.origination, loan.duration);
  }

/*
  function borrow(uint256 amount, uint32 rate, uint32 origination, uint32 duration, address borrower) {
    if (balance[borrower] >= amount) {
      uint256 id = loanIndex++;
      loans[id] = Loan(id, amount, rate, origination, duration, 0);
      userLoanIds[borrower].push(id);
      balance[borrower] = balance[borrower] - amount;
    }    
  }

  function payBack(address borrower, uint id, uint32 repayTimestamp) {
    loans[id].repayTimestamp = repayTimestamp;
    balance[borrower] = balance[borrower] + loans[id].amount;
  }
*/
}
