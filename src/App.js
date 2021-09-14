import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { initializeMovies } from "./reducers/moviesReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import TvShows from "./components/TvShows/TvShows";
import Films from "./components/Films/Films";
import Series from "./components/Series/Series";
import Cinemania from "./components/Cinemania/Cinemania";
import ChilldrenShows from "./components/ChildrenShows/ChilldrenShows";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Movie/Movie";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const bgMode = useSelector(({ isDarkMode }) => isDarkMode);

  const getData = () => {
    dispatch(initializeMovies());
  };

  const toggleBg = () => {
    document.body.style.backgroundColor = bgMode ? "#202328" : "#d5ddf5";
    document.body.style.color = bgMode ? "#d5ddf5" : "#202328";
  };
  useEffect(getData, [dispatch]);
  useEffect(toggleBg, [bgMode]);

  return (
    <div className="container">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>
          <Route path="/details/:id">
            <Movie />
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
    </div>
  );
}

export default App;
