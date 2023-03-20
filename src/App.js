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
import Profile from "./component/pages/Profile";

import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";
import MyProfile from "./component/pages/MyProfile";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form1 />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
