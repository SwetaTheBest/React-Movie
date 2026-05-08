export default function Favorites() {
  const favoriteMovies = [
    { id: 1, title: "Inception", year: "2010" },
    { id: 2, title: "The Dark Knight", year: "2008" },
    { id: 3, title: "Interstellar", year: "2014" },
    { id: 4, title: "The Matrix", year: "1999" },
    { id: 5, title: "Fight Club", year: "1999" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            ❤️ My Favorites
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Your collection of all-time favorite movies
          </p>
        </div>

        {/* Favorites List */}
        <div className="space-y-4">
          {favoriteMovies.map((movie) => (
            <div
              key={movie.id}
              className="group bg-gradient-to-r from-gray-800/50 to-purple-900/50 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-x-2"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400">
                    📅 {movie.year}
                  </p>
                </div>
                <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-110">
                  ♡
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {favoriteMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No favorite movies yet. Start adding them! 🍿</p>
          </div>
        )}
      </div>
    </div>
  );
}
