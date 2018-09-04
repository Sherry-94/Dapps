import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
}
else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  
 // the above line of code will no longer be useful after 2nd november 2018, so
 // update the code to request user to accept the transaction regarding
 // deployment of web3 instance into the window
  web3 = new Web3(provider);
}

export default web3;
