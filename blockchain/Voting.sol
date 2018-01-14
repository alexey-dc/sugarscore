// We have to specify what version of compiler this code will compile with
pragma solidity ^0.4.11;

contract Ibcs {

  struct Loan {
    uint amount;
    address borrower;
    uint rate; // decimals not supported in solidity; say 100% = 10000 rate, 0.1% = 10 rate
    uint year;
    uint month;
    uint day;
    uint durationDays;
  }
  
  mapping (address => uint256) private balanceOf;
  mapping (address => Loan[]) private loans;   // public_key => amount
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
    balanceOf[msg.sender] = totalSupply;
    name = tokenName;
    symbol = tokenSymbol;
  }

}
