const API_Key = "c10563125ba5a369ee9461a09950d3e5";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async() => {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_Key}`);
    const data = await response.json();
    return data.results;
}

export const fetchMovieDetails = async(movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_Key}`);
    const data = await response.json();
    return data;
}

export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_Key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}