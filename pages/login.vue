<template>
  <div>
    <centered-button icon="mdi-spotify" @click="login">
      Login
    </centered-button>
    <alert type="error" :visible="loginError">
      Error Logging In
    </alert>
  </div>
</template>

<script>
import Alert from '@/components/base/alert'
import CenteredButton from '@/components/base/centered-button'
export default {
  middleware: ['guest'],
  components: { Alert, CenteredButton },
  data() {
    return {
      loginError: false,
    }
  },
  mounted() {
    if (this.$route.query.redirectFrom === 'callback') {
      this.loginError = true
      setTimeout(() => (this.loginError = false), 3000)
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('spotify')
    },
  },
  head() {
    return {
      title: 'Login',
      meta: [
        {
          name: 'description',
          content: 'Login to spotify artists search',
        },
      ],
    }
  },
}
</script>
