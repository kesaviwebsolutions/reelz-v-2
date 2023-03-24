import Navbar from "./component/pages/Navbar";
import "./component/scss/Main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import "./App.scss";
import Form1 from "./component/pages/Form1";
import Page404 from "./component/pages/Page404";
import Footer from "./component/pages/Footer";
import Product from "./component/pages/Product";
import FAQ from "./component/pages/FAQ";
import NFT from "./component/pages/NFT";
import Cart from "./component/pages/Cart";

import Profile from "./component/pages/Profile";
import {_Wallet_connect_, _Metamask_, _Dissconnect_Wallet_, _Web3_provider_,GetChainId, getUserAddress} from "./Contracts/Web3";
import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";
import MyProfile from "./component/pages/MyProfile";
import Purchasehistory from './component/pages/Purchasehistory';
import Favourites from "./component/pages/Favourites";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import ItemDetail from "./component/pages/ItemDetail";

function App() {

  const setwallets = useStoreActions((actions) => actions.setWallet_address);
  const wallets = useStoreState((state) => state.wallet_address);


  const { web3instance, provider } = _Web3_provider_()
  useEffect(()=>{


    const init = async()=>{
      const wallet = window.localStorage.getItem("wallet");
      console.log("LocalStorage wallet", wallet)
      if (wallet === 'MM') {
        await Metamask();
      }
      else if(wallet === 'WC'){
        WalletC();
      }
      const { web3instance, provider } = _Web3_provider_()
      const id = await GetChainId();
      if (Number(id) != 97) {
        web3instance.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x61" }], // chainId must be in hexadecimal numbers 38
        });
      }
    }

    init();
  },[wallets])

  try {
    web3instance.currentProvider.on("accountsChanged", function (accounts) {
      setwallets(accounts[0]);
    });
  } catch (error) {

  }
  try {
    web3instance.currentProvider.on("chainChanged", function (accounts) {
      window.location.reload()
    });
  } catch (error) {

  }


  const WalletC = async () => {
    await _Wallet_connect_();
    const add = await getUserAddress();
    setwallets(add);
    window.localStorage.setItem("wallet", "WC");
  };

  const Metamask = async () => {
    await _Metamask_();
    const add = await getUserAddress();
    window.localStorage.setItem("wallet", "MM");
    setwallets(add);
  };

  const Dissconnect = async () => {
    await _Dissconnect_Wallet_();
    setwallets(undefined);
    window.localStorage.removeItem("wallet");
  };

  return (
    <div className="">
      <Router>
        <Navbar  Metamask={Metamask} Dissconnect={Dissconnect} WalletC={WalletC}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form1 />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchasehistory" element={<Purchasehistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item-detail" element={<ItemDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
