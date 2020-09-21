export default {
  /**
   * Récupère les vidéos du chapitre correspondant
   * @param state
   * @param commit
   * @constructor
   */
  GET_CHAPTER_VIDEOS_LIST: async function({ state, commit }) {
    commit('SET_LOADING', true);
    //TODO Changer l'URL de l'API pour y inclure le chapitre actuel en le récupérant depuis le state
    await this.$axios.$get(`https://picsum.photos/v2/list?limit=10`)
      .then(response => {
        commit('SET_CHAPTER_VIDEOS_LIST', { list: response });
        commit('SET_LOADING', false);
      }, err => {
        console.log(`An error occured ${err}`)
      })
    ;
  },
  /**
   * Envoie une nouvelle vidéo vers l'API
   * @param commit
   * @param payload
   * @constructor
   */
  SEND_NEW_MOVIE: async function({commit}, payload) {
    //TODO SEND NEW FILM DATA TO API

    // this.$axios.$post('')
    //   .then(r => {
    //
    //   }).catch(r => {
    //
    // });
  }
}
