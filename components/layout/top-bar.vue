<template>
  <v-app-bar app dark>
    <v-toolbar-title>
      <v-btn
        @click="redirectToHome"
        @mouseover="logoColor = 'green'"
        @mouseleave="logoColor = 'white'"
        large
        depressed
        color="transparent"
      >
        <v-icon x-large :color="logoColor">mdi-spotify</v-icon>
        Spotify Artist Search
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <LogoutBtn />
  </v-app-bar>
</template>
<script>
import LogoutBtn from '@/components/layout/logout-btn'
export default {
  components: { LogoutBtn },
  data() {
    return {
      logoColor: 'white',
    }
  },
  methods: {
    redirectToHome() {
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/')
      }
    },
  },
}
</script>
