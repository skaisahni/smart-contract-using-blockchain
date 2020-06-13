import web3 from './conn.js';
const address = '0x323edd3fb6d39e24ae28fa91d5c0b9547f21c8b1';
const abi = [
{
"constant": true,
"inputs": [],
"name": "seller",
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
"inputs": [],
"name": "manager",
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
"inputs": [],
"name": "latestBid",
"outputs": [
{
"name": "",
"type": "uint256"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "latestBidder",
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
"inputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"constant": false,
"inputs": [
{
"name": "bid",
"type": "uint256"
}
],
"name": "auction",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [],
"name": "bid",
"outputs": [],
"payable": true,
"stateMutability": "payable",
"type": "function"
},
{
"constant": false,
"inputs": [],
"name": "finishAuction",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
}
];
export default new web3.eth.Contract(abi, address);