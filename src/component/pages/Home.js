import { Grid } from "@mui/material";
import React, { useState } from "react";
import Sliderhome from "./Sliderhome"

import ProductSlider from "./ProductSlider";
import CategoriesSlider from "./CategoriesSlider";

function Home() {
  return (
    <>
      <div className="container-kws">
        <div className="section">
          <Sliderhome />
        </div>
        <div className="section">
          <div className="f-s-2 f-w-600 m-b-2">All Categories</div>
          <div className=""><CategoriesSlider /></div>
        </div>
        <div className="section">
          <div className="f-s-2 f-w-600 m-b-2">Products</div>
          <div className=""><ProductSlider /></div>
        </div>
      </div>
    </>
  );
}

export default Home;
