<template>
  <div>
    <centered-button color="green" icon="mdi-magnify" @click="loadSearch">
      Search Artists
    </centered-button>
    <alert type="success" :visible="loggedIn">
      Logged In Successfully
    </alert>
  </div>
</template>

<script>
import CenteredButton from '@/components/base/centered-button'
import Alert from '@/components/base/alert'
export default {
  middleware: ['auth'],
  components: { Alert, CenteredButton },
  data() {
    return {
      loggedIn: false,
    }
  },
  mounted() {
    if (this.$route.query.redirectFrom === 'callback') {
      this.loggedIn = true
      setTimeout(() => (this.loggedIn = false), 3000)
    }
  },
  methods: {
    loadSearch() {
      this.$store.dispatch('search/clearSearchResult')
      this.$store.dispatch('search-hint/clearHints')
      this.$router.push('/search')
    },
  },
  head() {
    return {
      title: 'Home',
      meta: [
        {
          name: 'description',
          content: 'Search Artist Spotify',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
