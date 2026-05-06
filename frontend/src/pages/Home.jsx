import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import { useState } from "react";
import { useMemo } from "react";

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
  return (
    <div className="home">
      <h2>Welcome to Movie App</h2>
      <p>Discover and explore your favorite movies!</p>
      <div id="spacer"></div>
      <div>
        <Search onSearch={setSearchQuery} />
      </div>
      <div id="spacer"></div>
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
