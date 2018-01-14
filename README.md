# champions
API:
  - getProfile(address)
    - coinsIn (int)
    - totalBorrowed (int)
    - borrowLimit (int)
    - reputation (int)
  - getLoans(address)
    - loans (array)
      [
        - loanId (int)
        - paybackAmount (int)
        - daysRemaining (int)
      ]
  - borrow(address, amount, ratePercent, durationDays)
  - payBack(address, loanId)
