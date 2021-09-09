import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Gallery from "./components/Gallery/Gallery";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { initializeMovies } from "./reducers/moviesReducer";

function App() {
  const dispatch = useDispatch();
  const bgMode = useSelector(({ isDarkMode }) => isDarkMode);

  const bgStyle = bgMode ? "#202328" : "#d5ddf5";
  const fontColorStype = bgMode ? "#d5ddf5" : "#202328";
  const getData = () => {
    dispatch(initializeMovies());
    document.body.style.backgroundColor = bgStyle;
    document.body.style.color = fontColorStype;
  };
  useEffect(getData, [dispatch, bgMode]);

  return (
    <>
      <Header />
      <Slider />
      <Gallery />
    </>
  );
}

export default App;
