import {
    USER_ADDRESS,
    USER_WALLET
  } from "../constant/actionTypes";
  
  const initialState = {
    walletAddress: "",
    wallet: "",
  };
  
  export default function user(state = initialState, { type, payload }) {
    switch (type) {
      case USER_ADDRESS:
        console.log(payload,'::::: USER ADDRESS DATA ::::::')
        return { ...state, walletAddress: payload };
      case USER_WALLET:
          console.log(payload,'::::: USER WALLET DATA ::::::')
        return { ...state, wallet: payload };
      default:
        return state;
    }
  }
  