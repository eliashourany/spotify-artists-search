export const state = () => ({
  albums: null,
  artistName: null,
  limit: 20,
  offset: 0,
  totalResult: null,
  page: 1,
})

export const getters = {
  getArtistAlbums(state) {
    return state.albums
  },
  getTotalPages(state) {
    return Math.ceil(state.totalResult / state.limit)
  },
  getArtistName(state) {
    return state.artistName
  },
}

export const mutations = {
  SET_ARTIST_ALBUMS(state, data) {
    state.albums = data.albums
    state.totalResult = data.total
  },
  UPDATE_PAGE(state) {
    state.offset = (state.page - 1) * state.limit
  },
  SET_PAGE(state, pageNbr) {
    state.page = pageNbr
  },
  SET_ARTIST_NAME(state, name) {
    state.artistName = name
  },
  CLEAR_ALBUMS(state) {
    state.albums = null
  },
  CLEAR_DATA(state) {
    state.albums = null
    state.page = 1
    state.totalResult = null
    state.artistName = null
  },
}

export const actions = {
  async loadAlbums({ commit, state }, artistId) {
    commit('CLEAR_ALBUMS')
    const albumsSimplified = await this.$axios.$get(
      `/artists/${artistId}/albums`,
      {
        params: {
          limit: state.limit,
          offset: state.offset,
        },
      }
    )
    const albumIds = albumsSimplified.items.map((album) => album.id)
    const albums = await this.$axios.$get('/albums', {
      params: {
        ids: albumIds.toString(),
      },
    })
    commit('SET_ARTIST_ALBUMS', {
      albums: albums.albums,
      total: albumsSimplified.total,
    })
  },
  updatePage({ commit, dispatch }, artistId) {
    commit('UPDATE_PAGE')
    dispatch('loadAlbums', artistId)
  },
  clearData({ commit }) {
    commit('CLEAR_DATA')
  },
  async getArtist({ commit }, artistId) {
    const artist = await this.$axios.$get(`/artists/${artistId}`)
    commit('SET_ARTIST_NAME', artist.name)
    return artist.name
  },
}
