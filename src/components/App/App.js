import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import Lists from "../Lists/Lists";
import Search from "../Search/Search";
import "./App.css";
import { connect } from "react-redux";

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

                <Lists onChangingShelf={this.handleChange} />

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

const mapStateToProps = (state) => ({
  allMovies: state.movies,
});

// Connect prevents routing by default so should use withRouter HOC
export default withRouter(connect(mapStateToProps)(App));
