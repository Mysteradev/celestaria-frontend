export default {
  SET_MOVIES: (state, { list }) => {
    state.movies = list;
  },

  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  }
}
