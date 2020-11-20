import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import MoviesList from "../MoviesList/MoviesList";
import Search from "../Search/Search";
import "./App.css";
import { WATCHED, WANT_TO_WATCH } from "../../constants/moviesLists";

class App extends Component {
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

                <MoviesList listType={WANT_TO_WATCH} />
                <MoviesList listType={WATCHED} />

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
            return <Search />;
          }}
        />
      </div>
    );
  }
}

// Connect prevents routing by default so should use withRouter HOC
// export default withRouter(connect(mapStateToProps)(App));
export default App;
