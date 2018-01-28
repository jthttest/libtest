import RootNavigator from './RootNavigator'

const INITIAL_ACTION = RootNavigator.router.getActionForPathAndParams('login')
const INITIAL_STATE = RootNavigator.router.getStateForAction(INITIAL_ACTION)

export function navigate(state=INITIAL_STATE, action) {
  const newState = RootNavigator.router.getStateForAction(action, state)
  return newState || state
}
