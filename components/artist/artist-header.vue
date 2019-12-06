<template>
  <div>
    <h1 class="mt-10 display-3">{{ name }}</h1>
    <p class="headline pl-1 grey--text text--darken-2">Albums</p>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
