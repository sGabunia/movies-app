import axios from "axios";
const apiKey = "c9ef2728095f70fe3dea055a56d5cc83";
const POPULAR_BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`;
const GENRE_BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=`;
const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/`;

const getAll = async () => {
  const response = await axios.get(POPULAR_BASE_URL);
  return response.data.results;
};

const getMoviesByGenre = async (id) => {
  const response = await axios.get(GENRE_BASE_URL + id);
  return response.data.results;
};

const getMovieDetails = async (id) => {
  const response = await axios.get(
    MOVIE_DETAILS_URL + id + `?api_key=${apiKey}`
  );

  return response.data;
};

const loadMoreMovies = async (id, page) => {
  const response = await axios.get(`${GENRE_BASE_URL}${id}&page=${page}`);

  return response.data.results;
};

const getAllData = {
  getAll,
  getMoviesByGenre,
  getMovieDetails,
  loadMoreMovies,
};

export default getAllData;
