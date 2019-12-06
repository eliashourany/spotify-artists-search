<template>
  <v-btn v-if="loggedIn" icon @click="logout">
    <v-icon>
      mdi-logout
    </v-icon>
  </v-btn>
</template>
<script>
export default {
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss" scoped></style>
