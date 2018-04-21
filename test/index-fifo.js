const client = require('../src/clients/contract-client');
  fifoTest.methods.queueDepth()
  .call()
  .then(console.log)

  function intervalFunc() {
   fifoTest.methods.queueDepth()
  .call()
  .then(console.log)
  }
  setInterval(intervalFunc, 5000);