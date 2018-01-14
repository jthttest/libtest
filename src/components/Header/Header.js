import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button
} from 'react-native';

import styles from './styles';

class Header extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({text})}
          autoCorrect={true}
          placeholder={'Add a todo'}
        />
        <Button
          title='add'
          onPress={() => {
            this.props.onPress(this.state.text)
          }}
        />
      </View>
    );
  }
}

export default Header;
