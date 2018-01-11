import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TodoList from './components/TodoList';

const mockState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
      id: 0
    },
    {
      text: 'Keep all state in a single tree',
      completed: false,
      id: 1
    },
    {
      text: 'Consider using reselect',
      completed: true,
      id: 2
    },
    {
      text: 'Consider using sagas',
      completed: false,
      id: 3
    },
    {
      text: 'Consider using ...',
      completed: false,
      id: 4
    },
  ]
};

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TodoList todos={mockState.todos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }
});
