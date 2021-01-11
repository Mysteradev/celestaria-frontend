export default {
  SET_MOVIES: (state, { list }) => {
    state.movies = list;
  },

  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  },

  SET_CURRENT_PAGE: (state, newCurrentPage) => {
    state.currentPage = newCurrentPage
  },

  SET_MAX_PAGE: (state, maxPage) => {
    state.maxPage = maxPage
  }
}
