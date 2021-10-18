import React from "react";

import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";

import "./Slider.css";
import Spinner from "../Spinner/Spinner";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  const { movies, isLoading } = useSelector(({ movies }) => movies);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="slider" style={{ position: "relative" }}>
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 3500,
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        initialSlide={1}
        slidesPerView={1}
        effect="cube"
        className="mainSwiper"
      >
        {movies.slice(0, 8).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="poster-info">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="poster"
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
