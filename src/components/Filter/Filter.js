import React, {Component} from 'react';
import {
  View,
  Button,
} from 'react-native';

import * as utils from '../../utils';
import styles from './styles';

class Filter extends Component {
  render() {
    return (
      <View style={styles.container}>
        { utils.iota(3).map(i => <Button title={`Filter#${i + 1}`} />) }
      </View>
    );
  }
}

export default Filter;
