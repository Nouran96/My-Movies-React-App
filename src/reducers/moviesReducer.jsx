import {
  MOVIE_REMOVE,
  MOVIE_CHANGE_SHELF,
  ADD_TO_WANT_TO_WATCH_LIST,
  ADD_TO_WATCHED_LIST,
} from "../constants/actionTypes";

import produce from "immer";

/*
    {
        "id": {
            "movie": {},
            "shelf": ""
        }
    }
*/
const INITIAL_STATE = JSON.parse(localStorage.getItem("movies")) || {};

const removeMovie = (state, action) => {
  const newState = produce(state, (draftState) => {
    const movieID = action.payload.id.toString();

    if (Object.keys(state).includes(movieID)) {
      delete draftState[movieID];
    }
  });

  localStorage.setItem("movies", JSON.stringify(newState));

  return newState;
};

const changeShelf = (state, action) => {
  const newState = produce(state, (draftState) => {
    const movie = action.payload.movie;
    if (Object.keys(state).includes(movie.id)) {
      draftState[movie.id].shelf = action.payload.shelf;
    } else {
      draftState[movie.id] = {
        movie,
        shelf: action.payload.shelf,
      };
    }
  });

  localStorage.setItem("movies", JSON.stringify(newState));

  return newState;
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_REMOVE:
      return removeMovie(state, action);
    case MOVIE_CHANGE_SHELF:
      return changeShelf(state, action);
    default:
      return state;
  }
};

export default moviesReducer;
