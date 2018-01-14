const express = require('express');
const contractInstance = require('./deployContract.js');
const web3 = require('./web3Client.js');
const app = express();
const bodyParser = require('body-parser');
const candidates = require('./candidates.js');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function(req, res){

  res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.post('/borrowMoney', function (req, res) {
  try {
    const ammount = req.body.ammount.trim();

  contractInstance.borrowMoney(ammount, { from: web3.eth.accounts[0] }, function(result) {


      const resultMoney = contractInstance.get_wallet_balance.call(ammount, { from: web3.eth.accounts[0] }).toString();
      console.log("borrowMoney res: "+resultMoney);
      res.send({ ammount: resultMoney});
        });
  } catch (e) {
    res.status('400').send(`Failed! ${e}`);
  }
});

app.post('/payBackMoney', function (req, res) {
  try {
    const ammount = req.body.ammount.trim();

  contractInstance.payBack(ammount, { from: web3.eth.accounts[0] }, function(result) {


      const resultMoney = contractInstance.get_wallet_balance.call(ammount, { from: web3.eth.accounts[0] }).toString();
      console.log("payBackMoney res: "+resultMoney);
      res.send({ ammount: resultMoney});
        });
  } catch (e) {
    res.status('400').send(`Failed! ${e}`);
  }
});

app.get('/candidates', function(req, res) {
  try {
    const candidateVotes = candidates.map(function(candidate) {
      const votes = contractInstance.totalVotesFor.call(candidate, { from: web3.eth.accounts[0] }).toString();
      return {
        name: candidate,
        votes: votes,
      };
    });

    res.send({ candidates: candidateVotes });
  } catch (e) {
    res.status('400').send(`Failed! ${e}`);
  }
});


app.get('/wallet_total', function(req, res) {
  try {

     const candidate = 0;
     const totalwallet = contractInstance.get_wallet_balance.call(candidate, { from: web3.eth.accounts[0] }).toString();



    //res.send({ candidates: candidateVotes });
    res.send({ total_amount_wallet: totalwallet });
  } catch (e) {
    res.status('400').send(`Failed! ${e}`);
  }
});

app.listen(3000, function () {
  console.log('App ready and listening on port 3000!')
});
