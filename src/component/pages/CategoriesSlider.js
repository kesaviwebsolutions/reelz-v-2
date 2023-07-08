
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import Reelz from "../Image/Reelz-62.gif";

// Import Swiper styles
import "swiper/css";
import categoryimg from "../Image/categoryimg.jpg";
import axios from "axios";

// import "./styles.css";

export default function App() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
    
    const fetchData = () => {
      axios
        .get('https://back-sg.r33lz.com/api/categories?page=1&itemsPerPage=30&homepage=true')
        .then(function (response) {
          const fetchedCategories = response.data['hydra:member'];
          const categoryTitles = fetchedCategories.map(category => category.title);
          setCategories(categoryTitles);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    
    console.log("categories", categories);


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
              
            {categories.map(category => (
                <SwiperSlide key={category}>
                  <div className="ps-r">
                    <img src={categoryimg} className="w-100 b-r-20" />
                    <div className="img-title">{category}</div>
                  </div>
                </SwiperSlide>
              ))}
              
            </Swiper>
        </>
    );
}
