export default function({ $axios, redirect, app }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      app.$auth.logout().then(() => {
        redirect('/login')
      })
    }
  })
}
