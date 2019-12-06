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
    ...mapGetters('search', { totalPages: 'getTotalPages' }),
    page: {
      set(pageNbr) {
        this.$store.commit('search/SET_PAGE', pageNbr)
      },
      get() {
        return this.$store.state.search.page
      },
    },
  },
  methods: {
    ...mapActions('search', ['updatePage']),
    pageChanged() {
      this.updatePage().then(() => {
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
