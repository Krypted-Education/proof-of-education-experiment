var Web3 = require('web3');
var Tx = require('ethereumjs-tx');
const myAddress = '0x4087766079623261174ADBFe5913Ca7E031a28Fb';
const privKey ='054a27ecc0de40b78826f13f0c60600b2c0c7dd7d4cb6af061628b6d99bccb06';
const addressTo = '0xAda8D9Fad43C007fA8AC71F97876B68C3dC920e4';
 var web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/yRg7y1dPJVCZWA6A0fhH'
  )
);
OracleTest = new web3.eth.Contract(
  [
    {
      constant: false,
      inputs: [
        {
          name: 'code',
          type: 'string'
        }
      ],
      name: 'AddMessage',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      name: 'addresses',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'fromWho',
          type: 'address'
        }
      ],
      name: 'PopMessage',
      outputs: [
        {
          name: 'code',
          type: 'string'
        },
        {
          name: 'isRead',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }
  ],
  '0x3fcb8f8b945e5af95331964e783ac310aac69cfb'
);
fifoTest =new web3.eth.Contract(
  [{"constant":true,"inputs":[],"name":"queueDepth","outputs":[{"name":"queueDepth","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cursorPosition","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"requestData","type":"uint256"}],"name":"push","outputs":[{"name":"jobNumber","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pop","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fifoQueue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
  '0x80ed140768e1a414eff9b0a18e06cf163a5ac2dc');
  
module.exports = {
  web3,
  OracleTest,
  fifoTest,
  myAddress,
  privKey,
  addressTo,
};