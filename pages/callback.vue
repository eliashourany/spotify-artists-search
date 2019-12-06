<template>
  <LoadingIcon />
</template>

<script>
import LoadingIcon from '@/components/base/loading-icon'
export default {
  middleware: ['auth-error'],
  components: { LoadingIcon },
  head() {
    return {
      title: 'Spotify Artist Search',
      meta: [
        {
          name: 'description',
          content: 'Spotify Artist Search',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
