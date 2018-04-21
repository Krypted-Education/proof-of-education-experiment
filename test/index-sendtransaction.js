const client = require('../src/clients/contract-client');
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
