import { StackNavigator } from 'react-navigation'

import Login from '../scenes/login'
import Menu from '../scenes/menu'

const RootNavigator = StackNavigator({
  login: {
    screen: Login
  },
  menu: {
    screen: Menu
  }
}, {
  headerMode: 'none'
})

export default RootNavigator
