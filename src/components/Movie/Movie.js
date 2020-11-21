import React from "react";
import { connect } from "react-redux";
import { removeMovieAction, changeShelfAction } from "../../actions/movies";
import { WANT_TO_WATCH, WATCHED } from "../../constants/moviesLists";

const Movie = ({ movie, onChoosingShelf, onRemovingMovie, shelf }) => {
  const updateShelf = (e) => {
    const newShelf = e.target.value;

    // If shelf is not true, Search page and default value is none
    // If shelf is true, MoviesList page and default value is shelf
    if ((!shelf && newShelf !== "none") || (shelf && newShelf !== shelf)) {
      switch (newShelf) {
        case "none":
          onRemovingMovie(movie.id);
          break;
        default:
          onChoosingShelf(newShelf, movie);
      }
    }
  };

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
        <select defaultValue={shelf || "none"} onMouseUp={updateShelf}>
          <option disabled>Move to...</option>
          <option value={WANT_TO_WATCH.value}>{WANT_TO_WATCH.label}</option>
          <option value={WATCHED.value}>{WATCHED.label}</option>
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
