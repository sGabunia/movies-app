import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import moviesReducer from "./reducers/moviesReducer";
import moviesByGenreReducer from "./reducers/moviesByGenre";
import movieDetailsReducer from "./reducers/movieDetailsReducer";
import toggleBgReducer from "./reducers/toggleBgReducer";
import actorDetailsReducer from "./reducers/actorDetailsReducer";


const reducer = combineReducers({
  movies: moviesReducer,
  moviesByGenre: moviesByGenreReducer,
  movieDetails: movieDetailsReducer,
  actorDetails: actorDetailsReducer,
  isDarkMode: toggleBgReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
