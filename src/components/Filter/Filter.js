import React, {Component} from 'react'
import {
  View,
  Button,
} from 'react-native'

import styles from './styles'

class Filter extends Component {
  render() {
    const {showAll, showActive, showCompleted} = this.props

    return (
      <View style={styles.container}>
        <Button onPress={showAll} title={`All`} />
        <Button onPress={showActive} title={`Active`} />
        <Button onPress={showCompleted} title={`Completed`} />
      </View>
    )
  }
}

export default Filter
