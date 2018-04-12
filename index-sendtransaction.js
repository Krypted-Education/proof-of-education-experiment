const Web3 = require('web3');
var Tx = require('ethereumjs-tx');

web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/yRg7y1dPJVCZWA6A0fhH'
  )
);

const myAddress = '0x4087766079623261174ADBFe5913Ca7E031a28Fb';
const privKey =
  '054a27ecc0de40b78826f13f0c60600b2c0c7dd7d4cb6af061628b6d99bccb06';

const addressTo = '0xAda8D9Fad43C007fA8AC71F97876B68C3dC920e4';

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

function sendSigned(txData, cb) {
  const privateKey = new Buffer(privKey, 'hex');

  const transaction = new Tx(txData);

  transaction.sign(privateKey);

  const serializedTx = transaction.serialize().toString('hex');

  web3.eth.sendSignedTransaction('0x' + serializedTx, cb);
}

web3.eth.getTransactionCount(myAddress).then(txCount => {
  const nonce = web3.utils.toHex(txCount);
  const gasLimit = web3.utils.toHex(0);
  const gasPrice = web3.utils.toHex(10);
  const to = addressTo;
  const from = myAddress;
  // const value = web3.utils.toWei('123', 'wei');
  const txData = {
    nonce,
    gasLimit,
    gasPrice,
    to,
    from
    // value
  };

  sendSigned(txData, function(err, result) {
    if (err) return console.log('error', err);

    console.log('sent', result);
  });
});
