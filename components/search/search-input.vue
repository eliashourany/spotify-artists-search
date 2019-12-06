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
        <!--        <div class="search-hint">-->
        <!--          <v-list color="white" expand tile>-->
        <!--            <v-list-item-group>-->
        <!--              <v-list-item>-->
        <!--                <v-list-item-content>-->
        <!--                  <v-list-item-title>test</v-list-item-title>-->
        <!--                </v-list-item-content>-->
        <!--              </v-list-item>-->
        <!--              <v-list-item>-->
        <!--                <v-list-item-content>-->
        <!--                  <v-list-item-title>test</v-list-item-title>-->
        <!--                </v-list-item-content>-->
        <!--              </v-list-item>-->
        <!--              <v-list-item>-->
        <!--                <v-list-item-content>-->
        <!--                  <v-list-item-title>test</v-list-item-title>-->
        <!--                </v-list-item-content>-->
        <!--              </v-list-item>-->
        <!--            </v-list-item-group>-->
        <!--          </v-list>-->
        <!--        </div>-->
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      searchInput: '',
      loading: false,
      inputSelected: false,
      lastSearch: null,
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
  },
  watch: {
    searchValue() {
      this.lastSearch = this.searchValue
    },
  },
  mounted() {
    if (this.searchValue) {
      this.searchInput = this.searchValue
    }
  },
  methods: {
    ...mapActions('search', ['searchArtists']),
    focus() {
      this.inputSelected = true
    },
    blur() {
      this.inputSelected = false
    },
    input(newValue) {},
    enterPressed(event) {
      if (event.key === 'Enter' && this.searchInput.length) {
        this.loading = 'green'
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
.search-hint {
  position: absolute;
  top: 65px;
  width: 100%;
  z-index: 1;
}
</style>
