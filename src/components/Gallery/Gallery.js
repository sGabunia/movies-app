import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import GalleryItem from "./GalleryItem";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Gallery.css";

SwiperCore.use([Navigation]);

const Gallery = () => {
  const movies = useSelector(({ movies }) => movies.slice(0, 15));

  return (
    <main className="gallery">
      <div className="wrapper">
        <div>
          <h2 className="gallery__title">popular movies</h2>
        </div>
        <Swiper spaceBetween={10} slidesPerView={5} navigation>
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
