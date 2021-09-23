import axios from "axios";
const apiKey = "c9ef2728095f70fe3dea055a56d5cc83";
const BASE_URL = `https://api.themoviedb.org/3/`;
const POPULAR_BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`;
const GENRE_BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=`;
const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/`;
const ACTOR_DETAILS_URL = `https://api.themoviedb.org/3/person/`;

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

const getMovieActorsAndCrew = async (id) => {
  const response = await axios.get(
    `${MOVIE_DETAILS_URL}${id}/credits?api_key=${apiKey}`
  )
  return response.data
}

const getMovieReviews = async (id) => {
  const response = await axios.get(
    `${MOVIE_DETAILS_URL}${id}/reviews?api_key=${apiKey}`
  )
  return response.data.results
}

const getMovieVideos = async (id) => {
  const response = await axios.get(
    `${MOVIE_DETAILS_URL}${id}/videos?api_key=${apiKey}`
  )
  return response.data.results[0];
}


const loadMoreMovies = async (id, page) => {
  const response = await axios.get(`${GENRE_BASE_URL}${id}&page=${page}`);
 
  return response.data.results;
};

const getActorDetails = async (id) => {
  const response = await axios.get(
    `${ACTOR_DETAILS_URL}${id}?api_key=${apiKey}&language=en-US`
  )
  return response.data;
}

const getActorCredits = async (id) => {
  const response = await axios.get(
    `${ACTOR_DETAILS_URL}${id}/movie_credits?api_key=${apiKey}&language=en-US`
  )
  return response.data;
}

const getAllTvShows = async (id) => {
  const response = await axios.get(
    `${BASE_URL}tv/top_rated?api_key=${apiKey}&language=en-US`
  )
  return response.data.results;
}

const getAllData = {
  getAll,
  getMoviesByGenre,
  getMovieDetails,
  loadMoreMovies,
  getMovieActorsAndCrew,
  getMovieReviews,
  getMovieVideos,
  getActorDetails,
  getActorCredits,
  getAllTvShows
};

export default getAllData;
