<template>
  <div>
    <CardsLoading v-if="searchingMode" />
    <ResultArtists v-else />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ResultArtists from '~/components/search/result-artists'
import CardsLoading from '~/components/base/cards-loading'
export default {
  components: { ResultArtists, CardsLoading },
  data() {
    return {
      searching: false,
    }
  },
  computed: {
    ...mapGetters('search', { searchingMode: 'getSearchingMode' }),
  },
}
</script>

<style lang="scss" scoped></style>
