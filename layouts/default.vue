<template>
  <v-app>
    <TopBar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from '~/components/layout/top-bar'
export default {
  components: { TopBar },
}
</script>
