export const state = () => ({
  videos: {},
  isLoading: false,
  activeVideo: null,
  selectedVideos: [],
  chapter: 1
})

export const getters = {
  getChapter: state => state.chapter
}

export const mutations = {
  /**
   * Prend une liste de vidéo en paramètre et l'attribue au state
   * @param state
   * @param list
   * @constructor
   */
  SET_CHAPTER_VIDEOS_LIST: (state, { list }) => {
    state.videos = list;
  },
  /**
   * Change la vidéo actuellement sélectionnée
   * @param state
   * @param activeVideo
   * @constructor
   */
  SET_ACTIVE_VIDEO: (state, activeVideo = null) => {
    // Si une vidéo est présente dans le payload alors on la set sinon on réinitialise la valeur de activeVideo
    activeVideo ? state.activeVideo = activeVideo : null
  },
  /**
   * Change l'état du chargement (true/false)
   * @param state
   * @param isLoading
   * @constructor
   */
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  },
  /**
   * Met à jour le chapitre vers le chapitre suivant
   * @param state
   * @constructor
   */
  SET_NEW_CURRENT_CHAPTER: state => {
    state.chapter = state.chapter + 1;
    state.activeVideo = null;
  },
  /**
   * Ajoute l'index de la vidéo en paramètre dans la liste des vidéos séléctionnées
   * @param state
   * @param activeVideo
   * @constructor
   */
  SAVE_TO_SELECTED_VIDEOS: (state, activeVideo) => {
    state.selectedVideos.push(activeVideo);
  }
}

export const actions = {
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
