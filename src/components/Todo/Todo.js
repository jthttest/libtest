import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './style';

class Todo extends Component {
  static defaultProps = {
    text: 'This is a Todo',
    completed: false,
  };

  render() {
    const {text, completed, id} = this.props;
    return (
      <TouchableOpacity
        onPress={() => console.log(`todo #${id} pressed`)}
      >
        <Text
          style={[
            styles.todo,
            {textDecorationLine: completed ? 'line-through' : 'none'}
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Todo;
