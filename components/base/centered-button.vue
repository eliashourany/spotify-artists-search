<template>
  <div class="text-center center-vertically">
    <v-btn large dark :color="color" @click="$emit('click', $event)">
      <span class="d-inline-block mr-8 ml-8">
        <slot></slot>
      </span>
      <v-icon right size="30">{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.center-vertically {
  margin-top: 35vh;
}
</style>
