import { SUBMIT_LOGIN } from './types'

const INITIAL_STATE = {
  isLoggedIn : false
}

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_LOGIN:
      return { isLoggedIn: true }
    default:
      return state
  }
}
