const express = require('express');
const contractInstance = require('./deployContract.js');
const web3 = require('./web3Client.js');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + 'public/index.html'));
});


app.get('/getProfile', function(req, res) {
  try {
    var address = req.query.address;
    var bProfile = contractInstance.getProfile.call(address, web3.eth.accounts[0]);
    var profile = {
      currentBalance: bProfile[0].toString(),
      loanSum: bProfile[1].toString(),
      reputation: bProfile[2].toString(),
      borrowLimit: bProfile[3].toString()
    }
    res.send(profile)
  } catch (e) {
    res.status('400').send(`Failed! ${e}`)
  }
});

app.get('/getLoans', function(req,res) {
  var address = req.query.address;
  var unpayedLoanIds = contractInstance.unpayedLoanIds.call(address, web3.eth.accounts[0]);

});

app.post('/borrow', function(req, res) {
  var address = req.query.address;
  var amount = req.query.amount;
  var ratePercent = req.query.ratePercent;
  var durationDays = req.query.durationDays;
  // contractInstance.getProfile(address, { from: web3.eth.accounts[0] }, function(result) {
  //   res.send({ votes: totalVotes, name: candidateName });
  // });
});

app.post('/payBack', function(req, res) {
  var address = req.query.address;
  var loanId = req.query.loanId;

});


app.listen(3000, function () {
  console.log('App ready and listening on port 3000!')
});
