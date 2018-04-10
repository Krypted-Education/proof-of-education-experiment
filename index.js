var web3 = require("web3");
web3 = new web3(new web3.providers.HttpProvider("http://localhost:8545"));
var OracleTest= new web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "code",
				"type": "string"
			}
		],
		"name": "AddMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "addresses",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "fromWho",
				"type": "address"
			}
		],
		"name": "PopMessage",
		"outputs": [
			{
				"name": "code",
				"type": "string"
			},
			{
				"name": "isRead",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
], 0xa11f649c055e813117a92010a4d4037a23a34640 );
OracleTest.methods.PopMessage.call()
.then(console.log);


