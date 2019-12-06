<template>
  <v-col sm="6" md="4" lg="3">
    <v-fade-transition hide-on-leave>
      <v-card
        @click="clickArtist"
        hover
        min-height="330px"
        :max-height="artistCardMaxHeight"
        height="100%"
        tile
        class="mx-auto"
      >
        <v-img
          :src="getImageSrc"
          :srcset="getImageSrcSet"
          sizes="(max-width: 960px) 95vw, (max-width: 1264px) 30vw, 22vw"
          height="200px"
        ></v-img>
        <v-card-title>
          {{ artist.name }}
        </v-card-title>

        <v-card-subtitle>
          {{ artist.followers.total }} Followers
        </v-card-subtitle>

        <v-card-actions>
          <div class="pl-2 artist-rating">
            <v-icon
              v-for="i in 5"
              :key="i"
              :color="getRating(i, artist.popularity)"
              >mdi-star</v-icon
            >
          </div>
        </v-card-actions>
      </v-card>
    </v-fade-transition>
  </v-col>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    artist: {
      type: Object,
      required: true,
    },
  },
  computed: {
    artistCardMaxHeight() {
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
    getImageSrc() {
      if (this.artist.images.length) {
        return this.artist.images[0].url
      } else {
        return '/default-profile.png'
      }
    },
    getImageSrcSet() {
      if (this.artist.images.length) {
        const srcSet = []
        this.artist.images.forEach((image, i) => {
          srcSet.push(`${image.url} ${i}x`)
        })
        return srcSet.join()
      } else {
        return ''
      }
    },
  },
  methods: {
    ...mapActions('artist-albums', ['clearData']),
    getRating(index, popularity) {
      return index <= popularity / 20 ? 'yellow darken-1' : ''
    },
    clickArtist() {
      this.clearData()
      this.$router.push(`/artist/${this.artist.id}`)
    },
  },
}
</script>
