<template>
  <div>
    <SearchInput />
    <search-result />
  </div>
</template>

<script>
import SearchResult from '~/components/search/search-result'
import SearchInput from '~/components/search/search-input'
export default {
  middleware: ['auth'],
  components: { SearchResult, SearchInput },
  head() {
    return {
      title: 'Search',
      meta: [
        {
          name: 'description',
          content: 'Search spotify artists',
        },
      ],
    }
  },
}
</script>
