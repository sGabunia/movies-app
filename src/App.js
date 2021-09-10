import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Gallery from "./components/Gallery/Gallery";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { initializeMovies } from "./reducers/moviesReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TvShows from "./components/TvShows/TvShows";
import Films from "./components/Films/Films";
import Series from "./components/Series/Series";
import Cinemania from "./components/Cinemania/Cinemania";
import ChilldrenShows from "./components/ChildrenShows/ChilldrenShows";
import Footer from "./components/Footer/Footer";

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
  useEffect(getData, [dispatch, bgMode, bgStyle, fontColorStype]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Slider />
            <Gallery />
          </Route>
          <Route path="/tv">
            <TvShows />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/cinemania">
            <Cinemania />
          </Route>
          <Route path="/children">
            <ChilldrenShows />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
