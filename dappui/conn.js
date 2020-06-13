//import Web3 from 'web3';
// const Web3 = require('web3');
//const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:9545");
//import Web3 from 'web3';


//export default web3;
//import {Web3} from 'web3';
//const web3 = new Web3(window.Web3.givenProvider);
const Web3 = require('web3');

const web3 = new Web3(Web3.currentProvider || "http://127.0.0.1:9545");
web3.eth.getAccounts().then(console.log);
