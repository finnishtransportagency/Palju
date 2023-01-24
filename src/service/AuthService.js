export const getIdToken = () => {
  const idTokenCookie = document.cookie
    .split(';')
    .find(c => c.indexOf('idToken=') >= 0)
  return idTokenCookie ? idTokenCookie.substring(idTokenCookie.indexOf('=') + 1) : ''
}