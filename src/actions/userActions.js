export function login(jwt) {
  return { type: 'LOGIN', jwt }
}

export function loadUser(user) {
  return { type: 'LOAD_USER', user }
}