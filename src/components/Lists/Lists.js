import React, { Component } from "react";
import Movie from "../Movie/Movie";
import { connect } from "react-redux";
import { getMoviesList } from "../../selectors/movies";
import { WANT_TO_WATCH, WATCHED } from "../../constants/moviesLists";

class Lists extends Component {
  render() {
    const { wantToWatchMoviesList, watchedMoviesList } = this.props;

    return (
      <div className="movies-lists">
        <article className="want-to-watch">
          <h2>Want to Watch</h2>
          <div className="movies-container">
            {wantToWatchMoviesList.length > 0 ? (
              wantToWatchMoviesList.map((movieData) => {
                return (
                  <Movie
                    key={movieData.movie.id}
                    movie={movieData.movie}
                    shelf={WANT_TO_WATCH}
                  />
                );
              })
            ) : (
              <p>
                No Movies yet. Click <span>+</span> to add movies
              </p>
            )}
          </div>
        </article>

        <article className="watched">
          <h2>Watched</h2>
          <div className="movies-container">
            {watchedMoviesList.length > 0 ? (
              watchedMoviesList.map((movieData) => {
                return (
                  <Movie
                    key={movieData.movie.id}
                    movie={movieData.movie}
                    shelf={WATCHED}
                  />
                );
              })
            ) : (
              <p>
                No Movies yet. Click <span>+</span> to add movies
              </p>
            )}
          </div>
        </article>

        <footer>
          <p>
            Copyrights &copy; 2018 - By <span>Nouran Samy</span>
          </p>
          <p>
            Fetched data from{" "}
            <a
              href="https://developers.themoviedb.org/3"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDb API
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wantToWatchMoviesList: getMoviesList(state, WANT_TO_WATCH),
  watchedMoviesList: getMoviesList(state, WATCHED),
});

export default connect(mapStateToProps)(Lists);
