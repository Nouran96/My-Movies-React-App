import React, { Component } from 'react';
import {Link} from 'react-router-dom'

let movies = [];

class Search extends Component {
  state = {
    searchedMovies: [],
    query: '',
    shelf: 'none'
  }

  findMovies(e) {
    e.preventDefault();

    const searchValue = document.querySelector('#searchBar').value;
    const movieNameArray = searchValue.split(' ')
    
    this.setState({query: movieNameArray.join('+')}, function() {
      movies = []; // Empty the array of movies
      movies.push(this.fetchAsync())

      Promise.all(movies).then(res => {
          this.setState({searchedMovies: [...res[0]]})
      })
    })
  }

  addMovieToShelf(movie) {
    this.props.movies.forEach((displayedMovie, index) => {
        if(displayedMovie.id === movie.id) {
            this.props.movies.splice(index, 1)
        }
    })
    this.props.movies.push(movie)
    localStorage.setItem('allMovies', JSON.stringify(this.props.movies))
  }

  async fetchAsync() {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=129e9a0302976d408510823b15b20c45&query=${this.state.query}`).catch(err => err);
    
    if(response.ok) {
      const data = await response.json();

      return data.results;
    }
    
    return response;
  }

  render() {  
    return (
      <div className="search-page">
        <form>
          <Link to="/"><i className="fas fa-arrow-left"></i></Link>
          <input type="text" name="searchBar" placeholder="Search for a movie" id="searchBar"/>
          <button onClick={(e) => this.findMovies(e)}><i className="fas fa-search"></i></button>
        </form>

        <div className="movies-container">

          {this.state.searchedMovies.length > 0 ? this.state.searchedMovies.map(movieData => (
            <div className="movie" key={movieData.id}>
              <div className="image-container">
                {movieData.poster_path !== null ? (
                    <img src={`http://image.tmdb.org/t/p/w185/${movieData.poster_path}`} alt={movieData.title} />
                ) : (
                  <p className="image-replacement">No Image</p>
                )}
              </div>

              <div className="lists-menu">

                <select value={movieData.shelf || 'none'} onChange={(e) => {
                  this.props.onChoosingShelf(e, movieData)
                  this.addMovieToShelf(movieData)
                  if(movieData.shelf === 'none')
                    this.props.onRemovingMovie(movieData)
                }}>
                  <option disabled>Move to...</option>
                  <option value="want-to-watch">Want to Watch</option>
                  <option value="watched">Watched</option>
                  <option value="none">None</option>
                </select>

              </div>
              
              <div className="movie-info">
                <p className="movie-title">{movieData.title} {movieData.release_date ? (<span>({movieData.release_date.slice(0, 4)})</span>) : ''}</p>
              </div>
          </div>
          )) : (
            <p>No Movies available</p>
          )}

        </div>
      </div>
    );
  }
}

export default Search;