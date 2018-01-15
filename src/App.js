console.ignoredYellowBox = ['Remote debugger']

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import TodoApp from './components/TodoApp'
import Home from './components/Home'
import Reddit from './components/Reddit'
import News from './components/News'

// const RootNavigator = StackNavigator({
//   Home: {
//     screen: Home
//   },
//   Todo: {
//     screen: TodoApp
//   }
// })

const RootNavigator = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Fucko'
    }
  },
  Todo: {
    screen: TodoApp
  },
  News: {
    screen: News
  },
  Reddit: {
    screen: Reddit
  }
});

export default class App extends Component<{}> {
  render() {
    return (
      <RootNavigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }
})
