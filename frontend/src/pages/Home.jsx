import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import { useState, useMemo } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 0,
      title: "Inception",
      release_date: "2010-07-16",
      url: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    },
    {
      id: 1,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      url: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      release_date: "2014-11-07",
      url: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
  ];
  
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, movies]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="mb-12">
          <Search onSearch={setSearchQuery} />
        </div>

        {/* Movie Grid - Horizontal Scroll */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {filteredMovies.length > 0 ? (
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
