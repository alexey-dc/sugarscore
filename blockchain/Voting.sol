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
    uint32 origination; // Unix timestamp
    uint32 duration; // Milliseconds
    address borrower;
  }

  struct LoanTransaction {
    uint256 loanId;
    uint32 repayTimestamp; // 0 for missed loans
  }
  
  mapping (uint256 => Loan) private loans;
  mapping (address => uint256) private balanceOf;
  mapping (address => uint256[]) private currentLoans;
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

}
