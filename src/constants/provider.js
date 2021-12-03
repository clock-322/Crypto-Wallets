import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from 'walletlink'
import TrezorApi from "trezor-connect";
import { Connectors } from "web3-react";

const {
    // InjectedConnector,
    // NetworkOnlyConnector,
    TrezorConnector,
    // LedgerConnector,
    // FortmaticConnector,
    // PortisConnector
  } = Connectors;
const defaultNetwork = 1;
const supportedNetworkURLs = {
    1: "https://rinkeby.infura.io/v3/0b37140b3ce04362950a512f4f42180e"
  };

const APP_NAME = 'Coinbase App'
const APP_LOGO_URL = 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0=s180-rw'
//import { CHAIN_ID } from "../../constant";
export const provider = new WalletConnectProvider({
    infuraId: "0b37140b3ce04362950a512f4f42180e",
    rpc: {
        1: 'https://rinkeby.infura.io/v3/0b37140b3ce04362950a512f4f42180e',
        3: "https://mainnet.infura.io/v3/0b37140b3ce04362950a512f4f42180e",
    },
    chainId: 1,
    network: "rinkeby",
    qrcode: true,
    qrcodeModalOptions: {
        mobileLinks: [
            "metamask",
            "trust",
        ]
    }
});



export const walletLink = new WalletLink({
    appName: APP_NAME,
    appLogoUrl: APP_LOGO_URL,
    darkMode: true
  })



 export const Trezor = new TrezorConnector({
    api: TrezorApi,
    supportedNetworkURLs,
    defaultNetwork, //defaultNetwork
    manifestEmail: "shabhi2022@gmail.com",
    manifestAppUrl: "https://codesandbox.io/s/6v5nrq2nqw"
  });
