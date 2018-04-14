var Web3 = require('web3');
web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/yRg7y1dPJVCZWA6A0fhH'
  )
);

var fifoTest=new web3.eth.Contract(
[{"constant":true,"inputs":[],"name":"queueDepth","outputs":[{"name":"queueDepth","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cursorPosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"requestData","type":"uint256"}],"name":"push","outputs":[{"name":"jobNumber","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pop","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fifoQueue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
'0x80ed140768e1a414eff9b0a18e06cf163a5ac2dc');

  fifoTest.methods.queueDepth()
  .call()
  .then(console.log)

  function intervalFunc() {
   fifoTest.methods.queueDepth()
  .call()
  .then(console.log)
  }
  setInterval(intervalFunc, 5000);