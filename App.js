import React from 'react'
import { createStore, combineReducers, applyMiddleWare } from 'redux'
import { Provider } from 'react-redux'

import { navigate } from './src/navigation'
import loginApp from './src/api/login'
let store = createStore(combineReducers({navigate, loginApp}))

import Login from './src/scenes/login'
import RootNavigator from './src/navigation'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}

export default App
