export default {
  getMovies: state => state.movies,
  getTitle: state => state.title,
  getIsLoading: state => state.isLoading,
  getCurrentPage: state => Number(state.currentPage),
  getMaxPage: state => Number(state.maxPage)
}
