import React from "react";

const Movie = ({ movie, onChangingShelf, onRemovingMovie }) => {
  return (
    <div className="movie">
      <div className="image-container">
        {movie.poster_path !== null ? (
          <img
            src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <p className="image-replacement">No Image</p>
        )}
      </div>

      <div className="lists-menu">
        <select
          value={movie.shelf || "none"}
          onChange={(e) => {
            onChangingShelf(e, movie);
            if (movie.shelf === "none") onRemovingMovie(movie);
          }}
        >
          <option disabled>Move to...</option>
          <option value="want-to-watch">Want to Watch</option>
          <option value="watched">Watched</option>
          <option value="none">None</option>
        </select>
      </div>

      <div className="movie-info">
        <p className="movie-title">
          {movie.title}{" "}
          {movie.release_date ? (
            <span>({movie.release_date.slice(0, 4)})</span>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
