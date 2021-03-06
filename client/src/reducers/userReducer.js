import { LOGIN, LOGOUT, UPDATE, FETCHING, FETCHED, CHECKED } from '../actions/userActions/userConsts'

const defaultState = {
  user: {}
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true }
    case FETCHED:
      return { ...state, fetching: false }
    case LOGIN:
      return { ...state, user: action.payload }
    case CHECKED:
      return { ...state, checked: true }
    case LOGOUT:
      return { ...state, user: {} }
    case UPDATE:
      return { ...state, user: { ...state.user, ...action.payload } }
    default:
      return state
  }
}

export default userReducer
