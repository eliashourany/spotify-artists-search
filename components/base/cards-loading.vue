<template>
  <v-row>
    <v-col cols="12" md="4" lg="3" v-for="i in 20" :key="i">
      <v-skeleton-loader
        tile
        loading
        width="100%"
        type="card"
        height="330"
        transition="fade-transition"
      >
      </v-skeleton-loader>
    </v-col>
  </v-row>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped></style>
