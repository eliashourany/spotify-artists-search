<template>
  <ArtistAlbums />
</template>

<script>
import { mapActions } from 'vuex'
import ArtistAlbums from '~/components/artist/artist-albums'
export default {
  middleware: ['auth'],
  components: { ArtistAlbums },
  computed: {
    artistId() {
      return this.$route.params.artistId
    },
  },
  mounted() {
    this.getArtist(this.artistId).then(() => {
      this.loadAlbums(this.artistId)
    })
  },
  methods: {
    ...mapActions('artist-albums', ['loadAlbums', 'getArtist']),
  },
  head() {
    return {
      title: 'Artist',
      meta: [
        {
          name: 'description',
          content: 'Artist',
        },
      ],
    }
  },
}
</script>
