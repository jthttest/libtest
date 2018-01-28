import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import RootNavigator from './RootNavigator'
import { navigation } from './reducers'

mapStateToProps = state => {
  return {
    navigationState: state.navigate
  }
}

export default connect(
  mapStateToProps
)(props => {
  const { dispatch, navigationState, ...otherProps } = props
  return (
    <RootNavigator
      navigation={ addNavigationHelpers({dispatch, state: navigationState}) }
      {...otherProps}
    />
  )
})
