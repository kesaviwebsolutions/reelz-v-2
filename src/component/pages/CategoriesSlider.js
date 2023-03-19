
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay   } from 'swiper';
import Reelz from "../Image/Reelz-62.gif";

// Import Swiper styles
import "swiper/css";
import categoryimg from "../Image/categoryimg.jpg";

// import "./styles.css";

export default function App() {
    return (
        <>
            <Swiper
            modules={[ Autoplay ]}
           
                slidesPerView={1}
                spaceBetween={10}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}

                className="mySwiper"
                loop= {true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
            >
                <SwiperSlide>
                    <div className="ps-r">
                        <img src={categoryimg} className="w-100 b-r-20" />
                        <div className="img-title">Sport</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ps-r">
                        <img src={categoryimg} className="w-100 b-r-20" />
                        <div className="img-title">Sport</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ps-r">
                        <img src={categoryimg} className="w-100 b-r-20" />
                        <div className="img-title">Sport</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ps-r">
                        <img src={categoryimg} className="w-100 b-r-20" />
                        <div className="img-title">Sport</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ps-r">
                        <img src={categoryimg} className="w-100 b-r-20" />
                        <div className="img-title">Sport</div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
