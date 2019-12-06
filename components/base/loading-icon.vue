<template>
  <div class="text-center d-flex justify-center align-center loading">
    <v-progress-circular :size="70" :width="7" color="green" indeterminate>
      <v-icon color="green" large>
        mdi-spotify
      </v-icon>
    </v-progress-circular>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.loading {
  height: 85vh;
}
</style>
