import { MOVIE_REMOVE } from "../constants/actionTypes";

const INITIAL_STATE = {
  movies: JSON.parse(localStorage.getItem("allMovies")) || [],
};

const removeMovie = (state, action) => ({
  movies: state.movies.filter((movie) => movie !== action.payload.id),
});

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_REMOVE:
      return removeMovie(state, action);
    default:
      return state;
  }
};

export default moviesReducer;
