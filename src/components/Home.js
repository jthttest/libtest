import React, { Component } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {navigate} = this.props.navigation
    console.log(this.props.navigation);
    return (
      <View>
        <Text>Welcome Home</Text>
        <Button title="Todo list" onPress={() => navigate('DrawerOpen')} />
      </View>
    )
  }
}

export default Home
