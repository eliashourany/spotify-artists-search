<template>
  <v-col cols="12" md="4" lg="3">
    <v-card
      min-height="380px"
      :max-height="albumCardMaxHeight"
      height="100%"
      tile
      class="mx-auto"
    >
      <v-img :src="imageSrc" height="200px"></v-img>

      <v-card-title>
        {{ album.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ albumArtists }}
      </v-card-subtitle>

      <v-card-actions>
        <div class="px-4 album-description d-flex justify-space-between">
          <p class="caption grey--text text--darken-1">
            {{ album.release_date }}
          </p>
          <p class="caption grey--text text--darken-1">
            {{ album.total_tracks }} songs
          </p>
        </div>
      </v-card-actions>
      <v-btn
        class="d-block spotify-preview pt-2"
        dark
        color="green"
        tile
        :href="albumLink"
        target="_blank"
        width="100%"
      >
        Preview On Spotify
        <v-icon right dark>mdi-spotify</v-icon>
      </v-btn>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  computed: {
    albumCardMaxHeight() {
      let height = '500px'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          height = '350px'
          break
        case 'sm':
          height = '350px'
          break
        case 'md':
          height = '440px'
          break
        case 'lg':
          height = '430px'
          break
        case 'xl':
          height = '400px'
          break
      }
      return height
    },
    imageSrc() {
      if (this.album.images.length) {
        return this.album.images[0].url
      } else {
        return '/default-album.png'
      }
    },
    albumArtists() {
      return this.album.artists.map((artist) => artist.name).join(', ')
    },
    albumLink() {
      return `http://open.spotify.com/album/${this.album.id}`
    },
  },
}
</script>

<style lang="scss" scoped>
.spotify-preview {
  position: absolute;
  bottom: 0;
}
.album-description {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
}
</style>
