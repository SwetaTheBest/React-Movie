function MovieCard({ movie }) {
  return (
    <div className="movie-card" id= "docs">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />{" "}
        <div>
          <h3>{movie.title}</h3>
        </div>
        <p>{movie.release_date}</p>
        <div className="movie-overlay">
          <button className="favorite-button" onClick={onFavoriteClicked}>
            ♡
          </button>
        </div>
      </div>
    </div>
  );

  function onFavoriteClicked() {
    alert(`You favorited ${movie.title}!`);
  }
}

export default MovieCard;
