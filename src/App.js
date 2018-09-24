import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Lists from './Lists'
import Search from './Search'
import './App.css';

class App extends Component {

  state= {
    allMovies: JSON.parse(localStorage.getItem('allMovies')) || [],
    value: ''
  }


  handleChange(event, movie) {
    movie.shelf = event.target.value;
    this.setState({
        value: event.target.value
    }, () => {
      localStorage.setItem('allMovies', JSON.stringify(this.state.allMovies))
    })
  }

  removeMovie = (removedMovie) => {
    this.setState((state) => ({
      allMovies: state.allMovies.filter(movie => movie !== removedMovie)
    }), () => {
      localStorage.setItem('allMovies', JSON.stringify(this.state.allMovies))
    })
  }

  render() {  
    return (
      <div className="App">

        <Route exact path="/" render={() => {
          return (
            <div class="main-page">
              <header>
                <div class="logo">
                  <i class="fas fa-film"></i>
                  <h1>My Movies</h1>
                </div>
              </header>

              <Lists movies={this.state.allMovies} onChangingShelf={this.handleChange.bind(this)} onRemovingMovie={this.removeMovie}/>

              <Link to="/search">
                <span class="add-movie" title="Add a movie"><i class="fas fa-plus"></i></span>
              </Link>
            </div>
          )
        }} />

        <Route path="/search" render={() => {
          return (
            <Search movies={this.state.allMovies} onChoosingShelf={this.handleChange.bind(this)} onRemovingMovie={this.removeMovie}/>
          )
        }}/>
        
      </div>
    );
  }
}

export default App;
