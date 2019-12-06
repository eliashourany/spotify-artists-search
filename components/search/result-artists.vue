<template>
  <v-row>
    <div class="text-center headline mt-12" style="width: 100%;">
      <h3 v-if="noResult">No Result For "{{ searchValue }}"</h3>
      <h3 v-else-if="searchNotEmpty">Showing Result For "{{ searchValue }}"</h3>
    </div>
    <ArtistCard
      v-for="artist in searchResult"
      :key="artist.id"
      :artist="artist"
    >
    </ArtistCard>
    <SearchPagination v-if="searchNotEmpty"></SearchPagination>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
import ArtistCard from '~/components/search/artist-card'
import SearchPagination from '~/components/search/search-pagination'
export default {
  components: { ArtistCard, SearchPagination },
  computed: {
    ...mapGetters('search', {
      searchResult: 'getSearchResult',
      searchValue: 'getSearchValue',
    }),
    noResult() {
      return this.searchResult && !this.searchResult.length
    },
    searchNotEmpty() {
      return this.searchResult && this.searchResult.length
    },
  },
}
</script>

<style lang="scss" scoped></style>
