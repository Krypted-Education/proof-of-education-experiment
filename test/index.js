const client = require('../src/clients/contract-client');

OracleTest.methods
  .addresses(0)
  .call()
  .then((address) => {
    console.log(`There is an address: ${address}`);
  });
 
  OracleTest.methods
  .PopMessage("0x4087766079623261174ADBFe5913Ca7E031a28Fb")
  .call()
  .then(console.log);

 