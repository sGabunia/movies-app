import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import moviesReducer from "./reducers/moviesReducer";
import moviesByGenreReducer from "./reducers/moviesByGenre";
import movieDetailsReducer from "./reducers/movieDetailsReducer";
import toggleBgReducer from "./reducers/toggleBgReducer";

const reducer = combineReducers({
  movies: moviesReducer,
  moviesByGenre: moviesByGenreReducer,
  movieDetails: movieDetailsReducer,
  isDarkMode: toggleBgReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
