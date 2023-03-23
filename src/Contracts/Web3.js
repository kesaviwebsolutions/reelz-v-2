import Web3 from "web3/dist/web3.min.js";
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";
import {market_Place_Abi,  market_Place_Address, nft_Minting_ABI_1155, nft_Minting_ABI_721 } from './Address_&_ABI'

let web3 = undefined;
let providers = undefined;

var wallet_connect_provider = new WalletConnectProvider({
  rpc: {
    56: "https://bsc-dataseed1.ninicoin.io",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    5: "https://goerli.infura.io/v3/59934272acd8455fb1023de857939bb5",
    1: "https://mainnet.infura.io/v3/59934272acd8455fb1023de857939bb5",
    // ...
  },
  bridge: "https://bridge.walletconnect.org",
});

export const _Metamask_ = async () => {
  try {
    if (window.ethereum) {
      window.ethereum.enable();
      web3 = new Web3(window.ethereum);
      providers = window.ethereum;
    }
  } catch (error) {
    console.log(error);
  }
};

export const _Wallet_connect_ = async () => {
  try {
    const data = await wallet_connect_provider.enable();
    web3 = new Web3(wallet_connect_provider);
    providers = wallet_connect_provider;
  } catch (error) {
    console.log(error);
  }
};

export const _Dissconnect_Wallet_ = async () => {
  await wallet_connect_provider.disconnect();
  providers = undefined;
  web3 = null;
};


export const _Web3_provider_ = () => {
  return { web3instance: web3, provider: providers };
};


export const getUserAddress = async () => {
  try {
    const address = await web3.eth.getAccounts();
    return address[0];
  } catch (error) {
    console.log(error);
  }
};

export const getContract = async (abi, sAddress) => {
  try {
    const Contract = new web3.eth.Contract(abi, sAddress);
    return Contract;
  } catch (error) {
    console.log(error);
  }
};

export const towie = async (amount) => {
  try {
    const number = await web3.utils.toWei(amount.toString(), "ether");
    return number;
  } catch (error) {
    console.log(error);
  }
};

export const GetChainId = async () => {
  try {
    const id = await web3.eth.getChainId();
    return id;
  } catch (error) {}
};

export const getProvider =async()=>{
    return new Web3(window.ethereum)
  }


export const utils_towei = async(value)=>{
  const pro = await getProvider();
  const num = await pro.utils.toWei(Number(value).toString(),"ether")
  return num
}

export const utils_fromowei = async(value)=>{
  const pro = await getProvider();
  const num = await pro.utils.fromWei(value,"ether")
  return num

}

export const get_Marketplace_contract = async () => {
    try {
      return new Promise((resolve, reject)=>{
        const contract = new web3.eth.Contract(market_Place_Abi, market_Place_Address);
        if(contract){
            resolve(contract)
        }
        else{
            reject("Error")
        }
      })
    } catch (error) {
      console.log(error)
    }
  }


export const get_NFT_contract_1155 = async (nft_address) => {
   try {
    return new Promise((resolve, reject)=>{
        const contract = new web3.eth.Contract(nft_Minting_ABI_1155, nft_address);
        if(contract){
            resolve(contract)
        }
        else{
            reject("Error")
        }
      })
   } catch (error) {
    
   }
  }

  export const get_NFT_contract_721 = async (nft_address) => {
    try {
     return new Promise((resolve, reject)=>{
         const contract = new web3.eth.Contract(nft_Minting_ABI_721, nft_address);
         if(contract){
             resolve(contract)
         }
         else{
             reject("Error")
         }
       })
    } catch (error) {
     
    }
   }

