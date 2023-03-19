import React, { useState } from "react";
import PropTypes from "prop-types";

import { Navigation, Scrollbar, A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import icon1 from "../Svg/rain1.svg";
import icon2 from "../Svg/rain2.svg";
import { Link } from "react-router-dom";
import nftdemo from "../Image/nftdemo.jpg";
import { AiFillHeart } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";

function LiveAutions() {
  return (
    <section className="tf-section tf-live-auction visible-sw">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12 wow fadeInUp">
            <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={5}
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
              className="live-auction visible"
              loop={true}
            >
              <SwiperSlide>
                <div className="slider-item">
                  <div className="sc-product style1">
                    <div className="top m-b-1">
                      <Link to="/product-details" className="tag">
                        Archetype #588
                      </Link>
                      <div className="wish-list">
                        <Link to="#" className="heart-icon">
                          <AiFillHeart className="b-c-t" />
                        </Link>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img src={nftdemo} alt="images" />
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="product-button">
                        <Link to="/product-details" className="tf-button">
                          {" "}
                          <button className="secondary-btn">
                            <BsFillHandbagFill className="b-c-t bag-icon" />{" "}
                            &nbsp;Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item">
                  <div className="sc-product style1">
                    <div className="top m-b-1">
                      <Link to="/product-details" className="tag">
                        Archetype #588
                      </Link>
                      <div className="wish-list">
                        <Link to="#" className="heart-icon">
                          <AiFillHeart className="b-c-t" />
                        </Link>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img src={nftdemo} alt="images" />
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="product-button">
                        <Link to="/product-details" className="tf-button">
                          {" "}
                          <button className="secondary-btn">
                            <BsFillHandbagFill className="b-c-t bag-icon" />{" "}
                            &nbsp;Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item">
                  <div className="sc-product style1">
                    <div className="top m-b-1">
                      <Link to="/product-details" className="tag">
                        Archetype #588
                      </Link>
                      <div className="wish-list">
                        <Link to="#" className="heart-icon">
                          <AiFillHeart className="b-c-t" />
                        </Link>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img src={nftdemo} alt="images" />
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="product-button">
                        <Link to="/product-details" className="tf-button">
                          {" "}
                          <button className="secondary-btn">
                            <BsFillHandbagFill className="b-c-t bag-icon" />{" "}
                            &nbsp;Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item">
                  <div className="sc-product style1">
                    <div className="top m-b-1">
                      <Link to="/product-details" className="tag">
                        Archetype #588
                      </Link>
                      <div className="wish-list">
                        <Link to="#" className="heart-icon">
                          <AiFillHeart className="b-c-t" />
                        </Link>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img src={nftdemo} alt="images" />
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="product-button">
                        <Link to="/product-details" className="tf-button">
                          {" "}
                          <button className="secondary-btn">
                            <BsFillHandbagFill className="b-c-t bag-icon" />{" "}
                            &nbsp;Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item">
                  <div className="sc-product style1">
                    <div className="top m-b-1">
                      <Link to="/product-details" className="tag">
                        Archetype #588
                      </Link>
                      <div className="wish-list">
                        <Link to="#" className="heart-icon">
                          <AiFillHeart className="b-c-t" />
                        </Link>
                      </div>
                    </div>
                    <div className="features">
                      <div className="product-media">
                        <img src={nftdemo} alt="images" />
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="product-button">
                        <Link to="/product-details" className="tf-button">
                          {" "}
                          <button className="secondary-btn">
                            <BsFillHandbagFill className="b-c-t bag-icon" />{" "}
                            &nbsp;Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveAutions;
