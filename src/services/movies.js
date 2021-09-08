import axios from "axios";
const apiKey = "c9ef2728095f70fe3dea055a56d5cc83";
const base_url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

const getAll = async () => {
  const response = await axios.get(base_url);
  return response.data.results;
};

export default { getAll };
