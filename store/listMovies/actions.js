export default {
  /**
   * Fetch the movies from database
   * @param commit
   * @param state
   * @param trigger
   * @param page
   * @returns {Promise<void>}
   * @constructor
   */
  FETCH_MOVIES: async function({commit, state}, trigger) {
    commit('SET_LOADING', true);
    let limit = trigger === "movies" ? 12 : 4;
    //TODO Changer l'URL de l'API pour récuperer les différents films
    await this.$axios.$get(`https://picsum.photos/v2/list?limit=${limit}&page=${state.currentPage}`)
      .then(response => {
        commit('SET_MOVIES', { list: response });
        commit('SET_LOADING', false);
      })
      .catch(err => {
        console.log(`An error occured ${err}`)
      })
    ;
  },

  FETCH_MOVIES_BY_CRITERIA: async function({commit}, criteria) {
    commit('SET_LOADING', true);
    await this.$axios.$get(`http://localhost:8000/api/movies?title=${criteria}`)
      .then(response => {
        commit('SET_MOVIES', { list: response['hydra:member'] });
        commit('SET_LOADING', false);
      })
      .catch(err => {
        console.log(`An error occured during the research ${err}`);
      })
    ;
  }
}
