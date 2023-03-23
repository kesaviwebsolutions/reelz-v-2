import React, { useEffect, useLayoutEffect, useState } from "react";

import { ImCross } from "react-icons/im";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

import Modal from "react-bootstrap/Modal";
import meta from "../Image/meta.png";
import walletconnect from "../Svg/walletconnect.svg";
import "animate.css";

import logo from "../Image/logo1.jpg";
import { Link, NavLink } from "react-router-dom";
import { useStoreState } from "easy-peasy";

function Navbar({ Metamask, Dissconnect, WalletC }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // ---------dark---------mode----------------

  useLayoutEffect(() => {
    const data = window.localStorage.getItem("theme");
    if (data === "light-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }, []);

  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const wallets = useStoreState((state) => state.wallet_address);
  
  const manageAddress = (address)=>{
    const first = address.slice(0,4);
    const seconds = address.slice(38)
    return first + "..." + seconds
  }

  return (
    <>
      <div className="container-kws t-t-u">
        <div className="  navbar12  d-f a-i-c j-c-s-b p-y-1">
          <div className="">
            <ul className="l-s-t-n d-f a-i-c ">
              <li className="m-r-4">
                <img
                  src={logo}
                  alt=""
                  className="logo animate__animated animate__rubberBand w-5"
                />
              </li>

              <NavLink className="nav" to="/">
                {" "}
                <li className="m-r-2 c-p f-w-600   m-q-b-d-n">Home</li>
              </NavLink>

              <NavLink className="nav" to="/product">
                {" "}
                <li className="m-r-2 c-p f-w-600   m-q-b-d-n">Products</li>
              </NavLink>

              <NavLink className="nav" to="/faq">
                {" "}
                <li className="m-r-2 c-p f-w-600   m-q-b-d-n">FAQ</li>
              </NavLink>

              <NavLink className="nav" to="/contact">
                {" "}
                <li className="m-r-2 c-p f-w-600   m-q-b-d-n">Contact</li>
              </NavLink>

              <NavLink className="nav" to="/nft">
                {" "}
                <li className="m-r-2 c-p f-w-600   m-q-b-d-n">NFT's</li>
              </NavLink>
              <NavLink className="nav" to="/login">
                <li className="m-r-2 c-p f-w-600   m-q-b-d-n">Login</li>
              </NavLink>
            </ul>
          </div>
          <div className=" c-p ">
            <ul className="l-s-t-n d-f a-i-c ">
              {/*   <li className="m-l-2 c-pq ">
            <span className="" onClick={() => toggleTheme()}>{theme === "dark-theme" ? "Light mode" : "Dark mode"}</span>
            </li> */}
              <li className="m-l-2 c-pq ">
                {" "}
                <Button
                  variant="primary"
                  onClick={() => {
                    if (wallets) {
                      Dissconnect();
                      return;
                    }
                    handleShow2();
                  }}
                  className=" pa-0_5 c-i b-c-i b-c-p-c-11 b-n f-w-600"
                >
                  {wallets ? manageAddress(wallets) : "Connect Wallet"}
                </Button>
              </li>
              <NavLink to="/profile">
                <li className="m-l-2 c-p   m-q-b-d-n ">
                  <CgProfile className="f-s-1_5" />
                </li>
              </NavLink>
              <NavLink to="/cart">
                <li className="m-l-2 c-p   m-q-b-d-n ">
                  <AiOutlineShoppingCart className="f-s-1_5" />
                </li>
              </NavLink>
              <li className="m-l-2 c-p   m-q-b-d-n ">95R</li>
              <li className="m-l-2 c-p   m-q-a-d-n ">
                {" "}
                <Button onClick={handleShow} className=" b-c-t c-i b-n pa-0">
                  <AiOutlineMenu />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------mobile-navbar---------------------------------- */}

      <Offcanvas show={show} onHide={handleClose} className="pa-1">
        <Offcanvas.Header>
          <Offcanvas.Title>
            {" "}
            <div className="image-dog1">
              <a href="/" target="_blank">
                <img src={logo} alt="" className="w-5" />
              </a>
            </div>
          </Offcanvas.Title>
          <ImCross onClick={handleClose} color="black" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="l-s-t-n">
            <NavLink className="nav" to="/">
              {" "}
              <li className="m-r-1 m-t-1 c-p" onClick={handleClose}>HOME</li>
            </NavLink>
            <NavLink className="nav" to="/product">
              {" "}
              <li className="m-r-1 m-t-1 c-p" onClick={handleClose}>PRODUCTS</li>
            </NavLink>
            <NavLink className="nav" to="/faq">
              {" "}
              <li className="m-r-1 m-t-1 c-p" onClick={handleClose}>FAQ</li>
            </NavLink>
            <NavLink className="nav" to="/contact">
              {" "}
              <li className="m-r-1 m-t-1 c-p" onClick={handleClose}>CONTACT</li>
            </NavLink>
            <NavLink className="nav" to="/nft">
              {" "}
              <li className="m-r-1 m-t-1 c-p" onClick={handleClose}>NFT'S</li>
            </NavLink>
            <NavLink className="nav" to="/login">
              {" "}
              <li className="m-r-1 m-t-1 c-p" onClick={handleClose}>LOGIN</li>
            </NavLink>
            <NavLink className="nav" to="/profile">
              {" "}
              <li className="m-r-1 m-t-1 c-p" onClick={handleClose}>PROFILE</li>
            </NavLink>
            <NavLink className="nav" to="/cart">
              {" "}
              <li className="m-r-1 m-t-1 c-p" onClick={handleClose}>CART</li>
            </NavLink>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={show2} onHide={handleClose2} className="">
        <div className="">
          <Modal.Header>
            <Modal.Title className="t-a-c m-a c-i">
              Please Connect Your Wallet
            </Modal.Title>
            <RxCross2 className="c-p" onClick={handleClose2} />
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="walletconnect d-f a-i-c j-c-s-e m-y-2">
              <img
                src={meta}
                alt=""
                className="w-7"
                onClick={() => {
                  Metamask();
                  handleClose2();
                }}
              />
              <img
                src={walletconnect}
                alt=""
                className="w-5"
                onClick={() => {
                  WalletC();
                  handleClose2();
                }}
              />
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
