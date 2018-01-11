import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TodoList from './components/TodoList';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }
});
