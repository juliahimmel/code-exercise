import Web3 from 'web3'

let web3 = null
if (typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
    console.log("Initialized Web3 Provider", web3)
}
export default {
  isConnected: () => web3 !== undefined && web3 !== null  && web3.currentProvider !== null && typeof web3.currentProvider !== 'undefined',
  getEth: () => web3.eth
}
