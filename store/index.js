export const state = () => ({
  videos: {},
  isLoading: false
})

export const mutations = {
  SET_ALL_VIDEOS_LIST: (state, { list }) => {
    state.videos = list
  }
}

export const actions = {
  GET_ALL_VIDEOS_LIST: function ({commit}) {
    this.$axios.$get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        commit('SET_ALL_VIDEOS_LIST', { list: response })
      }, (err) => {
        console.log(`An error occured ${err}`)
      });
  }
}

