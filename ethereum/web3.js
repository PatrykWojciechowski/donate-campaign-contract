import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/135dc7f9762147b49000cc6cb63fdd0c"
  );
  web3 = new Web3(provider);
}

export default web3;
