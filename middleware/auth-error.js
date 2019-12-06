export default function({ route, redirect }) {
  if (route.query.error) {
    redirect('/login?redirectFrom=callback')
  }
}
