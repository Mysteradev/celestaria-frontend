export const state = () => ({
  videos: {},
  isLoading: false,
  activeVideo: null,
  selectedVideos: [],
  chapter: null
})

export const getters = {
  activeVideo: state => {
    return state.activeVideo;
  },
  videos: state => {
    return state.videos
  }
}

export const mutations = {
  SET_ALL_VIDEOS_LIST: (state, { list }) => {
    state.videos = list
  },
  SET_CHAPTER2_LIST: (state, { list }) => {
    state.videos = list
  },
  SET_ACTIVE_VIDEO: (state, activeVideo) => {
    state.activeVideo = activeVideo
  },
  SET_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  }
}

export const actions = {
  GET_ALL_VIDEOS_LIST: function({ commit }) {
    commit('SET_LOADING', true);
    this.$axios.$get('https://picsum.photos/v2/list?limit=10')
      .then(response => {
        commit('SET_ALL_VIDEOS_LIST', { list: response });
        commit('SET_LOADING', false);
      }, err => {
        console.log(`An error occured ${err}`)
      })
    ;
  },

  GET_CHAPTER2_VIDEOS_LIST: ({commit}, chapter) => {
    this.$axios.$get(`${chapter}`)
      .then(response => {
        commit('SET_CHAPTER2_LIST', { list: response })
      }, err => {
        console.log(`An error occured ${err}`)
      })
  },
}

