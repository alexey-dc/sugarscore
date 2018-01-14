// We have to specify what version of compiler this code will compile with
pragma solidity ^0.4.11;
  // - getProfile(address)
  //   - coinsIn (int)
  //   - totalBorrowed (int)
  //   - borrowLimit (int)
  //   - reputation (int)
  // - getLoans
  //   - loans (array)
  //     [
  //       - loanId (int)
  //       - paybackAmount (int)
  //       - daysRemaining (int)
  //     ]
  // - borrow(address, amount, ratePercent, durationDays)
  // - payBack(address, loanId)

contract Ibcs {
  uint256 loanIndex = 0;

  struct Loan {
    uint256 loanId;
    uint256 amount;
    uint32 rate; // decimals not supported in solidity; say 100% = 10000 rate, 0.1% = 10 rate
    uint64 origination; // Unix timestamp
    uint64 duration; // Milliseconds
  }

  struct LoanTransaction {
    uint256 loanId;
    uint64 repayTimestamp; // 0 for missed loans
  }

  struct Profile {
    uint256 blanace;
    Loan[] loans;
    uint256 borrowLimit;
    uint256 reputation;
  }
  
  mapping (uint256 => Loan) private loans;
  mapping (address => uint256) private balanceOf;
  mapping (address => uint256[]) private currentLoans; // loans by user
  mapping (address => uint256[]) private loanHistory;

  address private owner;
  string public name;
  string public symbol;
  uint8 public decimals = 18;
  uint256 public totalSupply;

  // This generates a public event on the blockchain that will notify clients
  event Transfer(address indexed from, address indexed to, uint256 value);
  // This notifies clients about the amount burnt
  event Burn(address indexed from, uint256 value);
  
  function Ibcs(uint256 initialSupply, string tokenName, string tokenSymbol) {
    totalSupply = initialSupply * 10 ** uint256(decimals);
    owner = msg.sender;
    balanceOf[owner] = totalSupply;
    name = tokenName;
    symbol = tokenSymbol;
  }
/*
  function profile(address user) public returns (uint256 balance, uint256 loanSum, uint256 reputation, uint256 borrowLimit) {
    balance = balanceOf[user];
    loanSum = getLoanSum(user);
    reputation = getReputation(user);
    borrowLimit = getBorrowLimit(reputation);
    return (balance, loanSum, reputation, borrowLimit);
  }
  function getReputation(address user) private returns (uint256 result) {
    LoanTransaction[] storage history = loanHistory[user];
    result = 0;
    for(uint256 i = 0; i < history.length; i++) {
      LoanTransaction storage entry = history[i];
      if(entry.repayTimestamp == 0) {
        result = 0;
        break;
      }
      Loan storage loan = loans[entry.loanId];
      result += loan.amount/2;
    }
    return result;
  }
  function getBorrowLimit(uint256 reputation) private returns (uint256 limit) {
    limit = reputation;
    return limit;
  }
  function getLoanSum(address user) private returns (uint256 loanSum) {
    uint256[] storage loanIds = currentLoans[user];
    loanSum = 0;
    for(uint256 i = 0; i < loanIds.length; i++) {
      Loan storage loan = loans[loanIds[i]];
      loanSum += loan.amount;
    }
    return loanSum;
  }
  function getUnpayedLoanIds(address user) public returns (uint256[] loanIds) {
    uint256[] storage storageLoanIds = currentLoans[user];
    loanIds = new uint256[storageLoanIds.length];
    for(uint256 i = 0; i< storageLoanIds.length; i++) {
      loanIds[i] = storageLoanIds[i];
    }
    return loanIds;
  }
  function getLoanDetails(uint256 loanId) public returns (uint256 amount, uint64 rate, uint64 origination, uint64 duration) {
    Loan storage loan = loans[loanId];
    return (loan.amount, loan.rate, loan.origination, loan.duration);
  }
*/

  function borrow(uint256 amount, uint32 rate, uint32 origination, uint32 duration, address borrower) {
    uint id = loanIndex++;
    loans[id] = Loan(id, amoun, rate, origination, duration, borrower);
    currentLoans[borrower].;
  }

  function payBack() {
    
  }

}
