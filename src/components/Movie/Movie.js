import React from "react";
import { connect } from "react-redux";
import {
  removeMovieAction,
  addToWatchedListAction,
  changeShelfAction,
} from "../../actions/movies";

const Movie = ({ movie, onChoosingShelf, onRemovingMovie, shelf }) => {
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
          //   value={shelf || "none"}
          onMouseUp={(e) => {
            const shelf = e.target.value;
            if (shelf === "none") onRemovingMovie(movie.id);
            else onChoosingShelf(shelf, movie);
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

const mapDispatchToProps = (dispatch) => ({
  onRemovingMovie: (id) => dispatch(removeMovieAction(id)),

  onChoosingShelf: (shelf, movie) => dispatch(changeShelfAction(movie, shelf)),
});

export default connect(null, mapDispatchToProps)(Movie);
