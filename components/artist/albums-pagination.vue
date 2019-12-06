<template>
  <v-col cols="12">
    <div class="text-center">
      <v-pagination
        v-model="page"
        class="my-4"
        :length="totalPages"
        color="green"
        @input="pageChanged"
      ></v-pagination>
    </div>
  </v-col>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('artist-albums', { totalPages: 'getTotalPages' }),
    page: {
      set(pageNbr) {
        this.$store.commit('artist-albums/SET_PAGE', pageNbr)
      },
      get() {
        return this.$store.state['artist-albums'].page
      },
    },
  },
  methods: {
    ...mapActions('artist-albums', ['updatePage']),
    pageChanged() {
      this.updatePage(this.$route.params.artistId).then(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
