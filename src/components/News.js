import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { NavigationActions } from 'react-navigation'

class News extends Component {

  nav() {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Home',
      action: NavigationActions.navigate({ routeName: 'Todo'})
    })
    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    return (
      <View>
        <Text>Here come the NEWS!!</Text>
        <Button
          title='Navigator test'
          onPress={() => { this.nav() }}
        />
      </View>
    )
  }
}

export default News
