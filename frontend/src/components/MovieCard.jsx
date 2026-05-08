function MovieCard({ movie }) {
  return (
    <div className="group relative bg-linear-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-700 aspect-video">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
          <button 
            onClick={onFavoriteClicked}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
          >
            <span>♡</span> Add to Favorites
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-1">
        <h3 className="text-sm font-bold text-white group-hover:text-purple-100 transition-colors duration-200 line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-100">
            📅 {new Date(movie.release_date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short' 
            })}
          </p>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">
            Movie
          </span>
        </div>
      </div>
    </div>
  );

  function onFavoriteClicked() {
    alert(`❤️ You favorited ${movie.title}!`);
  }
}

export default MovieCard;
