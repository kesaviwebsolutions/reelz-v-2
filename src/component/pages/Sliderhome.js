import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Reelz from "../Image/Reelz-62.gif";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

export default function App() {
    return (
        <>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="">
                                <div className="f-s-3 f-w-600">
                                    Nulla quis lorem ut libero malesuada feugiat.
                                </div>

                                <div className="m-t-2"> Nulla quis lorem ut libero malesuada feugiat.</div>
                                <div className=""><button className="primary-btn m-t-3">Explore Now</button></div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                        <div className="   m-a t-a-c">
                        <span className=" b-r-15 b-1 d-i-b pa-1">
                            <img src={Reelz} alt="" width="400px" className="reelz-gif m-a" />
                            </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="">
                                <div className="f-s-3 f-w-600">
                                    Nulla quis lorem ut libero malesuada feugiat.
                                </div>

                                <div className="m-t-2"> Nulla quis lorem ut libero malesuada feugiat.</div>
                                <div className=""><button className="primary-btn m-t-3">Explore Now</button></div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src={Reelz} alt="" width="400px" className="reelz-gif m-a" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="">
                                <div className="f-s-3 f-w-600">
                                    Nulla quis lorem ut libero malesuada feugiat.
                                </div>

                                <div className="m-t-2"> Nulla quis lorem ut libero malesuada feugiat.</div>
                                <div className=""><button className="primary-btn m-t-3">Explore Now</button></div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src={Reelz} alt="" width="400px" className="reelz-gif m-a" />
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
