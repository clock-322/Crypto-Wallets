import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    connectmetamask,
    connectBinanceChain,
    connectWithWalletConnect,
    connectWithCoinbaseWallet,
    connectWithTrezorWallet,
    connectWithTrustWallet
} from "../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import WalletConnect from "walletconnect";

const wc = new WalletConnect();

const Homepage = () => {
    const dispatch = useDispatch();
    const walletAddress = useSelector((state) => state.usersReducer.walletAddress);
    console.log(walletAddress, ';;;; WALLET ADDRESS DATA ;;;;')


    useEffect(() => {
        const wc = new WalletConnect();
    }, [])

    const connectWalletFn = async () => {
        dispatch(connectWithWalletConnect())
       
    }


    const connectCoinbaseWalletFn = async () => {
        dispatch(connectWithCoinbaseWallet())  
    }


   /*  const connectTrezorWalletFn = async () => {
        dispatch(connectWithTrezorWallet())  
    } */


    const connectTrustWalletFn = async () => {
        dispatch(connectWithTrustWallet())  
    }




    return (
        <>
        <div>
            <div class="list">
            <span className="address">{walletAddress}</span><br/>

                <ul>
                    <li onClick={() => dispatch(connectmetamask())}> <img width="50" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png'} /> Metamask</li>
                    <li onClick={() => dispatch(connectBinanceChain())}> <img width="50" src={'https://bitbill.oss-accelerate.aliyuncs.com/pics/coins/bsc.svg'} />BNB</li>
                    <li onClick={connectWalletFn}> <img width="50" src={'https://api.nuget.org/v3-flatcontainer/walletconnect.desktop/1.6.5/icon'} /> Wallet connect</li>
                   
                    <li onClick={connectCoinbaseWalletFn}> <img width="50" src={'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0=s180-rw'} /> Coinbase Wallet</li>

                    <li onClick={connectTrustWalletFn}> <img width="50" src={'https://play-lh.googleusercontent.com/-3uTwEsZDk2NEgRblDEfIIY7T-xAZfJPN5JzVKz7s94Ds8KrKCrSVHvkEuneJlUBekc'} /> Trust Wallet</li>


                   {/*  <li onClick={connectTrezorWalletFn}> <img width="50" src={'https://lh3.googleusercontent.com/_tMPjEJbO3o334VYVB9VWmWex9q_6RLWji8sg4BFtf9jnR8Wk9Jv94eKyiCqgId6frzmRx_PgFI_uYzkqNifIWd_QcE=w128-h128-e365-rj-sc0x00ffffff'} /> Trezor Wallet</li> */}

                </ul>
            </div>
            </div>

        </>
    );
};

export default Homepage;