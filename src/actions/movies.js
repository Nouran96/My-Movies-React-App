import { MOVIE_REMOVE, MOVIE_CHANGE_SHELF } from "../constants/actionTypes";

export const removeMovieAction = (id) => ({
  type: MOVIE_REMOVE,
  payload: {
    id,
  },
});

export const changeShelfAction = (movie, shelf) => ({
  type: MOVIE_CHANGE_SHELF,
  payload: {
    movie,
    shelf,
  },
});
