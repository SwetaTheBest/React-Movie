const key = import.meta.env.VITE_TMDB_API_KEY;
const base = import.meta.env.VITE_TMDB_BASE_URL;

export const fetchTrendingMovies = async() => {
    const response = await fetch(`${base}/trending/movie/day?api_key=${key}`);
    const data = await response.json();
    return data.results;
}

export const fetchMovieDetails = async(movieId) => {
    const response = await fetch(`${base}/movie/${movieId}?api_key=${key}`);
    const data = await response.json();
    return data;
}

export const searchMovies = async(query) => {
    const response = await fetch(`${base}/search/movie?api_key=${key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}