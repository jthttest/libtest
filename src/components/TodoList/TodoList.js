import React, { Component } from 'react'
import {
  FlatList,
} from 'react-native'

import styles from './style';
import Todo from '../Todo';

class TodoList extends Component {
  _renderItem = ({item}) => {
    return <Todo {...item} />
  }

  render() {
    return (
      <FlatList
        data={this.props.todos}
        renderItem={this._renderItem}
        keyExtractor={({id}) => id}
        style={styles.todoList}
      />
    );
  }
}

export default TodoList
