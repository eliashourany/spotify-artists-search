<template>
  <div class="search-hint">
    <v-list
      color="white"
      expand
      tile
      v-if="searchHints.length && visible"
      elevation="12"
    >
      <v-list-item-group v-model="selected">
        <template v-for="artist in searchHints">
          <v-list-item :key="artist.id" @click="clickArtist(artist.id)">
            <v-list-item-avatar>
              <v-img :src="artist.imageSrc"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ artist.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    ...mapGetters('search-hint', { searchHints: 'getSearchHints' }),
  },
  watch: {
    selected() {
      console.log(this.selected)
    },
  },
  methods: {
    ...mapActions('artist-albums', ['clearData']),
    clickArtist(artistId) {
      this.clearData()
      this.$router.push(`/artist/${artistId}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.search-hint {
  position: absolute;
  top: 60px;
  width: 100%;
  z-index: 1;
}
</style>
