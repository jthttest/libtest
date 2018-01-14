import React, { Component } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

class Home extends Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>Welcome Home</Text>
        <Button title="Todo list" onPress={() => navigate('Todo')} />
      </View>
    )
  }
}

export default Home
