export const state = () => ({
  searchResult: null,
  searchValue: null,
  totalResult: null,
  limit: 20,
  offset: 0,
  searchingMode: false,
  page: 1,
})

export const getters = {
  getSearchResult(state) {
    return state.searchResult
  },
  getSearchingMode(state) {
    return state.searchingMode
  },
  getSearchValue(state) {
    return state.searchValue
  },
  getTotalPages(state) {
    return Math.ceil(state.totalResult / state.limit)
  },
}

export const mutations = {
  SET_SEARCH_RESULT(state, result) {
    state.searchResult = result.items
    state.searchValue = result.searchValue
    state.totalResult = result.total
    state.searchingMode = false
  },
  SET_SEARCHING_MODE(state, value) {
    state.searchingMode = true
  },
  CLEAR_SEARCH_RESULT(state) {
    state.searchResult = null
    state.searchValue = null
    state.totalResult = null
    state.offset = 0
    state.page = 1
  },
  UPDATE_PAGE(state) {
    state.offset = (state.page - 1) * state.limit
  },
  SET_PAGE(state, pageNbr) {
    state.page = pageNbr
  },
}

export const actions = {
  searchArtists({ commit, state }, searchValue) {
    if (searchValue !== state.searchValue) {
      commit('CLEAR_SEARCH_RESULT')
    }
    commit('SET_SEARCHING_MODE', true)
    return this.$axios
      .$get('/search', {
        params: {
          q: searchValue,
          type: 'artist',
          limit: state.limit,
          offset: state.offset,
        },
      })
      .then((resp) => {
        commit('SET_SEARCH_RESULT', { ...resp.artists, searchValue })
      })
  },
  clearSearchResult({ commit }) {
    commit('CLEAR_SEARCH_RESULT')
  },
  updatePage({ commit, dispatch }) {
    commit('UPDATE_PAGE')
    dispatch('searchArtists', state.searchValue)
  },
}
