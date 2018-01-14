import React, { Component } from 'react'
import {
  FlatList,
  LayoutAnimation
} from 'react-native'

import styles from './style'
import Todo from '../Todo'

class TodoList extends Component {
  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  _renderItem = ({item}) => {
    const {text, completed, id} = item
    return (
      <Todo
        text={text}
        completed={completed}
        onPress={() => this.props.onTodoPress(id)}
      />
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.todos}
        renderItem={this._renderItem}
        keyExtractor={({id}) => id}
        style={styles.todoList}
      />
    )
  }
}

export default TodoList
