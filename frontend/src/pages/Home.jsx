import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import { useState, useMemo, useEffect } from "react";
import { searchMovies, fetchTrendingMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const LoadTrendingMovies = async () => {
      setLoading(true);
      setError(null);
      try{

        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      }catch(error){
        console.log("Error fetching trending movies: ");
        setError(error);
      }finally{
        setLoading(false);
      }
    };
    LoadTrendingMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, movies]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-slate-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="mb-12">
          <Search onSearch={setSearchQuery} />
        </div>

        {/* Movie Grid */}
        <div className="overflow-x-auto pb-4">
          <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {loading ? (
              <p className="col-span-4 text-center text-gray-600 text-xl">Loading movies...</p>
            ) : error ? (
              <p className="col-span-4 text-center text-red-500 text-xl">Failed to load movies.</p>
            ) : filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))
            ) : (
              <div className="col-span-4 text-center py-12">
                <p className="text-gray-600 text-xl">No movies found matching your search</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
