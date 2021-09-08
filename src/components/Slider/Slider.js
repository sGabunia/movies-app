import React, { useRef, useState } from "react";

import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Slider.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  const movies = useSelector(({ movies }) => movies);

  return (
    <section>
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 3500,
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        initialSlide={1}
        effect="flip"
      >
        {movies.slice(0, 8).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="poster-info">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="poster"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
