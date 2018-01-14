import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './style';

class Todo extends Component {
  render() {
    const {text, completed, onPress} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
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
