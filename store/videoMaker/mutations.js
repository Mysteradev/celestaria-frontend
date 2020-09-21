export default {
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
