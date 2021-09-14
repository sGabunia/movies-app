import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Slider from "../Slider/Slider";

const Main = () => {
  return (
    <div style={{ flex: "1 1 auto" }}>
      <Slider />
      <Banner />
      <Gallery />
      <Banner />
    </div>
  );
};

export default Main;
