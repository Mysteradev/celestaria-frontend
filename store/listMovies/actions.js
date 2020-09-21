export default {
  /**
   *
   * @param commit
   * @returns {Promise<void>}
   * @constructor
   */
  GET_ALL_MOVIES: async function({commit}) {
    commit('SET_LOADING', true);
    //TODO Changer l'URL de l'API pour récuperer les différents films
    await this.$axios.$get(`https://picsum.photos/v2/list?limit=30`)
      .then(response => {
        commit('SET_MOVIES', { list: response });
        commit('SET_LOADING', false);
      }, err => {
        console.log(`An error occured ${err}`)
      })
    ;
  }
}
