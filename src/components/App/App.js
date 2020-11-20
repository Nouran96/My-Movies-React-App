import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import Lists from "../Lists/Lists";
import Search from "../Search/Search";
import "./App.css";
import { connect } from "react-redux";
import { removeMovieAction } from "../../actions/movies";

class App extends Component {
  state = {
    value: "",
  };

  handleChange = (event, movie) => {
    movie.shelf = event.target.value;
    this.setState(
      {
        value: event.target.value,
      },
      () => {
        localStorage.setItem("allMovies", JSON.stringify(this.props.allMovies));
      }
    );
  };

  removeMovie = (removedMovie) => {
    this.props.onRemoveMovie(removedMovie.id);
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="main-page">
                <header>
                  <div className="logo">
                    <i className="fas fa-film"></i>
                    <h1>My Movies</h1>
                  </div>
                </header>

                <Lists
                  movies={this.props.allMovies}
                  onChangingShelf={this.handleChange}
                  onRemovingMovie={(removedMovie) =>
                    this.props.onRemoveMovie(removedMovie.id)
                  }
                />

                <Link to="/search">
                  <span className="add-movie" title="Add a movie">
                    <i className="fas fa-plus"></i>
                  </span>
                </Link>
              </div>
            );
          }}
        />

        <Route
          path="/search"
          render={() => {
            return (
              <Search
                movies={this.props.movies}
                onChoosingShelf={this.handleChange}
                onRemovingMovie={(removedMovie) =>
                  this.props.onRemoveMovie(removedMovie.id)
                }
              />
            );
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allMovies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveMovie: (id) => dispatch(removeMovieAction(id)),
});

// Connect prevents routing by default so should use withRouter HOC
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
