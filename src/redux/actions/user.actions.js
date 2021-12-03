import * as types from '../actions/user.actions'
import { USER_ADDRESS,USER_WALLET } from "../constant/actionTypes"
import { provider, walletLink, Trezor } from "../../constants/provider"
import Web3 from "web3";
import { propTypes } from 'react-bootstrap/esm/Image';


const ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/0b37140b3ce04362950a512f4f42180e'
const CHAIN_ID = 3

export const isMetaMaskInstalled = async () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum, web3 } = window;
  const result = await Boolean(ethereum && ethereum.isMetaMask);
  return result;
};

export const connectmetamask = () => {
  return (dispatch) =>
    new Promise(async (resolve, reject) => {
      const installed = await isMetaMaskInstalled();
      try {
        let address;
        if (installed) {
          const { ethereum, web3 } = window;

          ethereum.on("accountsChanged", async function (accounts) {
            address = accounts[0];
            dispatch({ type: USER_WALLET, payload: "MetaMask" });
            setTimeout(function () {
              localStorage.clear()
              window.location.reload();
            }, 5000);

            return dispatch({ type: USER_ADDRESS, payload: address });
          });
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          address = accounts[0];
          dispatch({ type: USER_WALLET, payload: "MetaMask" });
          resolve(address);
          return dispatch({ type: USER_ADDRESS, payload: address });
        } else {
          reject(false);
          return alert("Please connect metamask");
        }
      } catch (error) {
        reject(false);
        return alert(error.message);
      }
    });
};



export const connectWithTrustWallet = () => {
  return (dispatch) =>
    new Promise(async (resolve, reject) => {
      const installed = await isMetaMaskInstalled();
      try {
        let address;
        const { ethereum, web3 } = window;

        const result = Boolean((ethereum && ethereum.isMetaMask))
        if (result) throw new Error("Restricted in browser please access it from Trust wallet application")

        ethereum.on("accountsChanged", async function (accounts) {
          address = accounts[0];
          dispatch({ type: USER_WALLET, payload: "MetaMask" });
          setTimeout(function () {
            localStorage.clear()
            window.location.reload();
          }, 5000);

          return dispatch({ type: USER_ADDRESS, payload: address });
        });
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        address = accounts[0];
        dispatch({ type: USER_WALLET, payload: "MetaMask" });
        resolve(address);
        return dispatch({ type: USER_ADDRESS, payload: address });
       
      } catch (error) {
        reject(false);
        console.log(error, ':::: ERROR :::::')
        return alert(error.message);
      }
    });
};







export const connectBinanceChain = () => {
  return (dispatch) =>
    new Promise(async (resolve, reject) => {
      try {
        let address;
        const { BinanceChain, web3 } = window;
        BinanceChain.on("accountsChanged", async function (accounts) {
          address = accounts[0];
          dispatch({ type: USER_WALLET, payload: "MetaMask" });
          setTimeout(function () {
            localStorage.clear()
            window.location.reload();
          }, 5000);

          return dispatch({ type: USER_ADDRESS, payload: address });
        });
        const accounts = await BinanceChain.request({
          method: "eth_requestAccounts",
        });
        address = accounts[0];
        dispatch({ type: USER_WALLET, payload: "MetaMask" });
        resolve(address);
        return dispatch({ type: USER_ADDRESS, payload: address });

      } catch (error) {
        reject(false);
        return alert(error.message);
      }
    });
};



export const connectWithWalletConnect = () => async (dispatch, getState) => {
  try {

    await provider.enable().then((result) => {
      let _web3Instance = new Web3(provider);

      // Subscribe to accounts change
      provider.on("accountsChanged", async (accounts) => {
        dispatch({ type: USER_WALLET, payload: "WalletConnect" });
        let chainId = await _web3Instance.eth.getChainId();
        dispatch({ type: USER_WALLET, payload: chainId });
        setTimeout(function () {
          window.location.reload();
        }, 5000);
        return dispatch({ type: USER_ADDRESS, payload: accounts[0] });
      })

      setInterval(async function () {
        const chainId = await _web3Instance.eth.getChainId();
      }, 1000);
    })

  } catch (error) {
    console.log(error, '::: ERROR FROM CONNECT WALLET :::')
    // return toast.error(error.message);
  }
};



/* export const connectWithTrezorWallet = () => async (dispatch, getState) => {
  try {

    await Trezor.enable().then((result) => {
      let _web3Instance = new Web3(Trezor);

      // Subscribe to accounts change
      Trezor.on("accountsChanged", async (accounts) => {
        console.log("accountsChanged----", accounts);
      })
    })

  } catch (error) {
    console.log(error, '::: ERROR FROM TREZOR WALLET :::')
  }
};
 */






export const connectWithCoinbaseWallet = () => async (dispatch, getState) => {
  try {

    const ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID)
    console.log('ethereum - ', ethereum)
    const web3 = new Web3(ethereum)
    console.log('web3 - ', web3)
    dispatch({ type: USER_WALLET, payload: "Coinbase" });
    ethereum.send('eth_requestAccounts').then((accounts) => {

      setTimeout(function () {
        window.location.reload();
      }, 5000);

      return dispatch({ type: USER_ADDRESS, payload: accounts[0] });


    }).catch((err) => {
      alert(err.message)
    })




  } catch (error) {
    console.log(error, '::: ERROR FROM CONNECT BASE :::')
  }
};
