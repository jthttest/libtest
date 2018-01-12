import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button
} from 'react-native';

import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
        />
        <Button
          title='add'
          onPress={() => console.log('add button was pressed')}
        />
      </View>
    );
  }
}

export default Header;
