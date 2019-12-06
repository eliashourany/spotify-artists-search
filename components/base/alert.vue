<template>
  <v-alert
    :type="type"
    border="left"
    transition="scale-transition"
    :value="visible"
    class="alert"
    :width="alertWidth"
  >
    <slot></slot>
  </v-alert>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    alertWidth() {
      let width = '50vw'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          width = '90vw'
          break
        case 'sm':
          width = '90vw'
          break
        case 'md':
          width = '40vw'
          break
        case 'lg':
          width = '40vw'
          break
        case 'xl':
          width = '25vw'
          break
      }
      return width
    },
  },
}
</script>

<style lang="scss" scoped>
.alert {
  position: absolute;
  top: 5vh;
  right: 5vw;
}
</style>
