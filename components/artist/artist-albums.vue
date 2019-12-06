<template>
  <div>
    <div v-if="!loading">
      <ArtistHeader :name="artistName" />
      <v-row>
        <AlbumCard
          v-for="album in artistAlbums"
          :key="album.id"
          :album="album"
        />
      </v-row>
      <albums-pagination />
    </div>
    <div v-else>
      <HeaderLoading />
      <CardsLoading />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AlbumsPagination from './albums-pagination'
import AlbumCard from '~/components/artist/album-card'
import ArtistHeader from '~/components/artist/artist-header'
import CardsLoading from '~/components/base/cards-loading'
import HeaderLoading from '~/components/base/header-loading'
export default {
  components: {
    AlbumsPagination,
    AlbumCard,
    ArtistHeader,
    CardsLoading,
    HeaderLoading,
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    ...mapGetters('artist-albums', {
      artistAlbums: 'getArtistAlbums',
      artistName: 'getArtistName',
    }),
  },
  watch: {
    artistAlbums() {
      // Check if the response from the artist albums have been received
      this.loading = !Array.isArray(this.artistAlbums)
    },
  },
}
</script>

<style lang="scss" scoped></style>
