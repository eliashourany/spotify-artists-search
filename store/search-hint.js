export const state = () => ({
  artists: [],
})

export const getters = {
  getSearchHints(state) {
    return state.artists
  },
}

export const mutations = {
  SET_HINT_RESULT(state, result) {
    state.artists = result.map((artist) => ({
      name: artist.name,
      imageSrc: artist.images.length
        ? artist.images[0].url
        : '/default-profile.png',
      id: artist.id,
    }))
  },
  CLEAR_HINT_RESULT(state) {
    state.artists = []
  },
}

export const actions = {
  updateHints({ commit }, query) {
    return this.$axios
      .$get('/search', {
        params: {
          q: query,
          type: 'artist',
          limit: 6,
          offset: 0,
        },
      })
      .then((resp) => {
        commit('SET_HINT_RESULT', resp.artists.items)
      })
  },
  clearHints({ commit }) {
    commit('CLEAR_HINT_RESULT')
  },
}
