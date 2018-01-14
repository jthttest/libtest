console.ignoredYellowBox = ['Remote debugger']

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
// import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
// import { logger } from 'redux-logger'

// import todoApp from './reducers'
// import { addTodo } from './actions'
// let store = createStore(
//   todoApp,
//   applyMiddleware(logger)
// )
let store = configureStore({})



import Header from './Header'
import TodoList from './TodoList'
import Filter from './Filter'

// const dummyTodos = [
//   'Consider using Redux',
//   'Keep all state in a single tree',
//   'Consider using reselect',
//   'Consider using sagas',
//   'Consider using logger'
// ]
//
// dummyTodos.forEach(text => {
//   store.dispatch(addTodo(text))
// })


class TodoApp extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <TodoList />
          <Filter />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }
})

export default TodoApp
