# Sugar Score Credit rating and Reputation system

- stack: Node.js, react, solidity, web3

# Directories

- blockchain
  - node_modules
  - public
   - assets
   - components
   - bundle.js
   - index.html
   - index.js
   - package.json
   - style.css
   - webpack.config.js
  - .gitignore
  -deployContract.js
  -ibcs.solidity
  -package.json
  -server.js
  web3Client.js


#API:
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
