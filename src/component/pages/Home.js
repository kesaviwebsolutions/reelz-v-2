import { Grid } from "@mui/material";
import React, { useState } from "react";
import Sliderhome from "./Sliderhome";
import Collector from "./Collector";
import ProductSlider from "./ProductSlider";
import CategoriesSlider from "./CategoriesSlider";
import { Link } from "react-router-dom";

function Home() {
  const usersignupupdateData = JSON.parse(
    localStorage.getItem("gettinguserdetailsViaPhone")
  );
  return (
    <>
      <div className="container-kws">
        <div className="section">
          <Sliderhome />
        </div>
        <div className="section">
          <div className="f-s-2 f-w-600 m-b-2">All Categories</div>
          <div className="">
            <CategoriesSlider />
          </div>
        </div>
        <div className="section">
          <div className=" m-b-2 d-f j-c-s-b a-i-c">
            <div className="f-s-2 f-w-600">Top Products</div>
            <Link to="/product">
              <div className="">
                <button className="primary-btn">View More</button>
              </div>
            </Link>
          </div>
          <div className="m-b-2">
            <ProductSlider />
          </div>
          <div className="">
            <ProductSlider />
          </div>
        </div>
        <div className="section">
          <div className=" m-b-2 d-f j-c-s-b a-i-c">
            <div className="f-s-2 f-w-600">Top NFT's</div>
            <Link to="/nft">
              <div className="">
                <button className="primary-btn">View More</button>
              </div>
            </Link>
          </div>
          <div className="">
            <Collector />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
