<template>
  <v-row>
    <v-col cols="12" md="6" offset-md="3">
      <div :class="searchClasses">
        <v-text-field
          ref="search"
          label="Search For Artists"
          v-model="searchInput"
          id="search-input"
          :loading="loading"
          loader-height="4"
          solo-inverted
          single-line
          full-width
          hide-details
          autocomplete="off"
          @focus="focus"
          @blur="blur"
          @input="input"
          @keydown="enterPressed"
        >
          <template v-slot:append>
            <v-icon :dark="inputSelected">mdi-magnify</v-icon>
          </template>
        </v-text-field>
        <SearchHint :visible="hintsVisible" />
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import SearchHint from '~/components/search/search-hint'
export default {
  components: {
    SearchHint,
  },
  data() {
    return {
      loading: false,
      inputSelected: false,
      lastSearch: null,
      hintsVisible: false,
    }
  },
  computed: {
    ...mapGetters('search', { searchValue: 'getSearchValue' }),
    searchClasses() {
      return {
        search: true,
        searchCenter:
          !this.inputSelected && this.searchInput === '' && !this.lastSearch,
      }
    },
    searchInput: {
      set(input) {
        this.$store.commit('search/SET_SEARCH_INPUT', input)
      },
      get() {
        return this.$store.state.search.searchInput
      },
    },
  },
  watch: {
    searchValue() {
      this.lastSearch = this.searchValue
    },
    searchInput() {
      if (this.searchInput.length > 2) {
        this.updateHints(this.searchInput)
      } else {
        this.clearHints()
      }
    },
  },
  mounted() {
    if (this.searchValue) {
      this.searchInput = this.searchValue
    }
  },
  methods: {
    ...mapActions('search', ['searchArtists']),
    ...mapActions('search-hint', ['updateHints', 'clearHints']),
    focus() {
      this.inputSelected = true
      this.hintsVisible = true
    },
    blur() {
      this.inputSelected = false
    },
    input(newValue) {},
    enterPressed(event) {
      if (event.key === 'Enter' && this.searchInput.length) {
        this.loading = 'green'
        this.hintsVisible = false
        this.$refs.search.blur()
        this.searchArtists(this.searchInput).then(() => (this.loading = false))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#search-input {
  margin-top: 0;
}
.search {
  position: relative;
  transition: margin-top 0.5s ease-in-out;
}
.searchCenter {
  margin-top: 35vh;
}
.artist-rating {
  position: absolute;
  bottom: 10px;
}
</style>
