
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import Reelz from "../Image/Reelz-62.gif";

// Import Swiper styles
import "swiper/css";
import categoryimg from "../Image/categoryimg.jpg";

// import "./styles.css";

export default function App() {
    return (
        <>
            <Swiper
                modules={[Autoplay]}

                slidesPerView={5}
                spaceBetween={10}

                breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1536: {
                      slidesPerView: 4,
                    },
                  }}

                className="mySwiper"
                loop={true}
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
