import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Gallery.css";

import GalleryItem from "./GalleryItem";

SwiperCore.use([Navigation]);

const Gallery = () => {
  const movies = useSelector(({ movies }) => movies.movies.slice(0, 15));

  return (
    <main className="gallery">
      <div className="wrapper">
        <div>
          <h2 className="gallery-title">popular movies</h2>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            580: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            780: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          navigation
          className="swiper-movies"
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <GalleryItem movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Gallery;
