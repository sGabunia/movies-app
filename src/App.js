import React, { useEffect } from "react";

import useLocalStorage from "./hooks/useLocalStorage";
import { useDispatch } from "react-redux";
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
import MoviesByGenreList from "./components/MovieByGenreList/MoviesByGenreList";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [savedBgValue, setSavedBgValue] = useLocalStorage("memory", false);

  const getData = () => {
    dispatch(initializeMovies());
  };

  useEffect(getData, [dispatch]);

  return (
    <div
      className="container"
      style={{
        backgroundColor: savedBgValue ? "#202328" : "#d5ddf5",
        color: savedBgValue ? "#d5ddf5" : "#202328",
      }}
    >
      <Router>
        <Header setMode={setSavedBgValue} mode={savedBgValue} />

        <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>
          <Route path="/details/:id">
            <Movie />
          </Route>
          <Route exact path="/genre/:id">
            <MoviesByGenreList />
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
