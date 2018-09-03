export default function userReducer(state = {name: 'jorgito'}, action) {
  switch(action.type) {
  case 'LOGIN':
    return Object.assign({}, state, {jwt: action.jwt});
  case 'LOAD_USER':
    return Object.assign({}, state, {
      name: action.user.name,
      _id: action.user._id,
      email: action.user.email
    });
    return { user: action.user };
  default:
    return state;
  }
}