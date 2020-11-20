import React, { Component } from "react";
import Movie from "../Movie/Movie";
import { connect } from "react-redux";

class Lists extends Component {
  render() {
    let wantToWatchList = [],
      watchedList = [];

    const { movies } = this.props;

    Object.values(movies).forEach((movieData) => {
      switch (movieData.shelf) {
        case "want-to-watch":
          wantToWatchList.push(movieData.movie);
          break;
        case "watched":
          watchedList.push(movieData.movie);
          break;
        default:
          break;
      }
    });

    return (
      <div className="movies-lists">
        <article className="want-to-watch">
          <h2>Want to Watch</h2>
          <div className="movies-container">
            {wantToWatchList.length > 0 ? (
              wantToWatchList.map((movieData) => {
                return (
                  <Movie
                    key={movieData.id}
                    movie={movieData}
                    shelf={"want-to-watch"}
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
            {watchedList.length > 0 ? (
              watchedList.map((movieData) => {
                return (
                  <Movie
                    key={movieData.id}
                    movie={movieData}
                    shelf={"watched"}
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
  movies: state,
});

export default connect(mapStateToProps)(Lists);
