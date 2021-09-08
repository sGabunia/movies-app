import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import { useDispatch } from "react-redux";
import { initializeMovies } from "./reducers/moviesReducer";

function App() {
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(initializeMovies());
  };
  useEffect(getData, [dispatch]);
  return (
    <>
      <Header />
      <Slider />
    </>
  );
}

export default App;
