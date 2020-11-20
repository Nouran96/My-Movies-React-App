import React, { Component } from "react";
import Movie from "../Movie/Movie";

class Lists extends Component {
  state = {
    shelf: "none",
  };

  render() {
    let wantToWatchList = [],
      watchedList = [];

    const { movies, onChangingShelf, onRemovingMovie } = this.props;

    if (movies.length > 0) {
      movies.forEach((movieData) => {
        switch (movieData.shelf) {
          case "want-to-watch":
            wantToWatchList.push(movieData);
            break;
          case "watched":
            watchedList.push(movieData);
            break;
        }
      });
    }

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
                    onChangingShelf={onChangingShelf}
                    onRemovingMovie={onRemovingMovie}
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
                    onChangingShelf={onChangingShelf}
                    onRemovingMovie={onRemovingMovie}
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
            <a href="https://developers.themoviedb.org/3" target="_blank">
              TMDb API
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Lists;
