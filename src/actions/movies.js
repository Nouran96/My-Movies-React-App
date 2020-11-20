const { MOVIE_REMOVE } = require("../constants/actionTypes");
const { default: moviesReducer } = require("../reducers/moviesReducer");

export const removeMovieAction = (id) => ({
  type: MOVIE_REMOVE,
  payload: {
    id,
  },
});
