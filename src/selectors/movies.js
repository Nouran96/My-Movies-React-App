export const getMoviesList = (state, shelf) => {
  return Object.values(state).filter((movieData) => movieData.shelf === shelf);
};
