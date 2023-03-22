import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bgvideo from "../Video/bg.mp4";
import Reelz from "../Image/Reelz-62.gif";
import bgmobile from "../Video/bg-mobile.mp4";

// Import Swiper styles
import "swiper/css";
import sparrow from "../Image/sparrow.png";
import { Grid } from "@mui/material";

// import "./styles.css";

export default function App() {
  return (
    <div>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="bgvideo ps-r m-q-b-d-n">
                <video autoPlay muted loop className="bg-vid w-100" >
                  <source src={bgvideo} type="video/mp4" />
                </video>
              </div>
              <div className="bgvideo ps-r m-q-a-d-n">
              <video autoPlay muted loop className="bg-vid w-100" >
                <source src={bgmobile} type="video/mp4" />
              </video>
            </div>
              <div className="bg-image m-t-5 ">
                <div className="f-s-2 f-w-600">
                  Welcome to <br />{" "}
                  <span className="f-s-4">R33LZ R33WARDZ Marketplace </span>
                </div>

                <div className="m-t-2">
                  {" "}
                  Here you can find a wide range of physical products, gift
                  cards and nfts that can be redeemed through R33LZ points from
                  your engagement on the R33LZ app and also make purchases
                  through PayPal.
                </div>
                <div className="">
                  <button className="primary-btn m-t-3">Explore Now</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} className="m-q-b-d-n ps-r">
              <div className="m-a t-a-c">
                <span className=" b-r-15 b-1 d-i-b pa-1">
                  <img
                    src={Reelz}
                    alt=""
                    width="400px"
                    className="reelz-gif m-a ps-r"
                  />
                  <div className="current-bid b-c-s-c pa-1 t-a-c d-i-b b-r-20 z-i-2">
                    <div className="c-b m-b-1 f-w-600">Current Bid</div>
                    <div className="b-c-y-clr c-b p-x-2 p-y-0_5 b-r-10 f-w-600">
                      1.56M R33LZ
                    </div>
                  </div>
                </span>
              </div>
              <div className="">
                <img src={sparrow} className="sparrow-1 w-3 h-3" />
              </div>
              <div className="">
                <img src={sparrow} className="sparrow-2 w-3 h-3" />
              </div>
            </Grid>
          </Grid>
        </SwiperSlide>

        <SwiperSlide>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="bg-image m-t-5">
                <div className="f-s-3 f-w-600">
                  Nulla quis <span className="red-clr">lorem</span> ut libero{" "}
                  <span className="red-clr">malesuada</span> feugiat.
                </div>

                <div className="m-t-2">
                  {" "}
                  Nulla quis lorem ut libero malesuada feugiat.
                </div>
                <div className="">
                  <button className="primary-btn m-t-3">Explore Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 m-q-b-d-n ps-r">
              <div className="m-a t-a-c">
                <span className=" b-r-15 b-1 d-i-b pa-1">
                  <img
                    src={Reelz}
                    alt=""
                    width="400px"
                    className="reelz-gif m-a ps-r"
                  />
                  <div className="current-bid b-c-s-c pa-1 t-a-c d-i-b b-r-20 z-i-2">
                    <div className="c-b m-b-1 f-w-600">Current Bid</div>
                    <div className="b-c-y-clr c-b p-x-2 p-y-0_5 b-r-10 f-w-600">
                      1.56M R33LZ
                    </div>
                  </div>
                </span>
              </div>
              <div className="">
                <img src={sparrow} className="sparrow-1 w-3 h-3" />
              </div>
              <div className="">
                <img src={sparrow} className="sparrow-2 w-3 h-3" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="bg-image m-t-5">
                <div className="f-s-3 f-w-600">
                  Nulla quis <span className="red-clr">lorem</span> ut libero{" "}
                  <span className="red-clr">malesuada</span> feugiat.
                </div>

                <div className="m-t-2">
                  {" "}
                  Nulla quis lorem ut libero malesuada feugiat.
                </div>
                <div className="">
                  <button className="primary-btn m-t-3">Explore Now</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 m-q-b-d-n ps-r">
              <div className="m-a t-a-c">
                <span className=" b-r-15 b-1 d-i-b pa-1">
                  <img
                    src={Reelz}
                    alt=""
                    width="400px"
                    className="reelz-gif m-a ps-r"
                  />
                  <div className="current-bid b-c-s-c pa-1 t-a-c d-i-b b-r-20 z-i-2">
                    <div className="c-b m-b-1 f-w-600">Current Bid</div>
                    <div className="b-c-y-clr c-b p-x-2 p-y-0_5 b-r-10 f-w-600">
                      1.56M R33LZ
                    </div>
                  </div>
                </span>
              </div>
              <div className="">
                <img src={sparrow} className="sparrow-1 w-3 h-3" />
              </div>
              <div className="">
                <img src={sparrow} className="sparrow-2 w-3 h-3" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
