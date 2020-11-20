import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";

let movies = [];

class Search extends Component {
  state = {
    searchedMovies: [],
    query: "",
    // shelf: "none",
  };

  findMovies(e) {
    e.preventDefault();

    const searchValue = document.querySelector("#searchBar").value;
    const movieNameArray = searchValue.split(" ");

    this.setState({ query: movieNameArray.join("+") }, function () {
      movies = []; // Empty the array of movies
      movies.push(this.fetchAsync());

      Promise.all(movies).then((res) => {
        this.setState({ searchedMovies: [...res[0]] });
      });
    });
  }

  async fetchAsync() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=129e9a0302976d408510823b15b20c45&query=${this.state.query}`
    ).catch((err) => err);

    if (response.ok) {
      const data = await response.json();

      return data.results;
    }

    return response;
  }

  render() {
    return (
      <div className="search-page">
        <form>
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <input
            type="text"
            name="searchBar"
            placeholder="Search for a movie"
            id="searchBar"
          />
          <button onClick={(e) => this.findMovies(e)}>
            <i className="fas fa-search"></i>
          </button>
        </form>

        <div className="movies-container">
          {this.state.searchedMovies.length > 0 ? (
            this.state.searchedMovies.map((movieData) => (
              <Movie key={movieData.id} movie={movieData} />
            ))
          ) : (
            <p>No Movies available</p>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
