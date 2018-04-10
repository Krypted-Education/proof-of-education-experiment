var Web3 = require('web3');
web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/yRg7y1dPJVCZWA6A0fhH'
  )
);
var OracleTest = new web3.eth.Contract(
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
  '0x27526290ab272fb2130a61e399bd9dd6515ac75a'
);
OracleTest.methods
  .addresses(0)
  .call()
  .then((address) => {
    console.log(`There is an address: ${address}`);
  });
