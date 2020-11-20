import React, { Component } from "react";
import Movie from "../Movie/Movie";
import { connect } from "react-redux";
import { getMoviesList } from "../../selectors/movies";

class MoviesList extends Component {
  render() {
    const { listType, moviesList } = this.props;

    return (
      <div className="movies-lists">
        <article className={listType.value}>
          <h2>{listType.label}</h2>
          <div className="movies-container">
            {moviesList.length > 0 ? (
              moviesList.map((movieData) => {
                return (
                  <Movie
                    key={movieData.movie.id}
                    movie={movieData.movie}
                    shelf={listType.value}
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
      </div>
    );
  }
}

// Second parameter is optional props
const mapStateToProps = (state, { listType }) => ({
  moviesList: getMoviesList(state, listType.value),
});

export default connect(mapStateToProps)(MoviesList);
