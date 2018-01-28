import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  UIManager,
  LayoutAnimation
} from 'react-native'
import { NavigationActions } from 'react-navigation'

const FOCUSED_COLOR = 'black'
const BLURRED_COLOR = '#A1A1A1'

const BorderFix = props => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={{flex: 4}} />
      <View style={[styles.borderFix, props.borderStyle]} />
    </View>
  )
}

class Login extends React.Component {
  state = {
    borderColor: BLURRED_COLOR,
    inputText: ''
  }

  componentWillMount() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  changeBorderColor = borderColor => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    this.setState({borderColor})
  }

  navigate = () => {
    const navigateToMenu = NavigationActions.navigate({
      routeName: 'menu'
    })
    this.props.navigation.dispatch(navigateToMenu)
  }

  render() {
    const { borderColor, inputText } = this.state
    const { isLoggedIn, submitLogin } = this.props
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.container}>
          { isLoggedIn && <Text>Húrra! þú ert loggaður inn</Text> }
          <View style={[styles.textInputContainer, {borderColor}]}>
            <BorderFix
              borderStyle={{
                borderLeftWidth: 1,
                borderColor
              }}
            />
            <TextInput
              style={styles.textInput}
              autoCorrect={false}
              placeholder='lykilorð'
              autoCapitalize='none'
              onFocus={() => this.changeBorderColor(FOCUSED_COLOR)}
              onBlur={() => this.changeBorderColor(BLURRED_COLOR)}
              value={inputText}
              onChangeText={text => {
                console.log('text is changing')
                this.setState({ inputText: text })
              }}
              onEndEditing={() => console.log('onEndEditing called')}
              onSubmitEditing={this.navigate}
            />
            <BorderFix
              borderStyle={{
                borderRightWidth: 1,
                borderColor
              }}
            />
          </View>
          <Button
            title='submit'
            onPress={() => console.log('login button pressed')}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  textInputContainer: {
    flexDirection: 'row',
    width: '70%',
    borderBottomWidth: 1,
  },
  textInput: {
    height: 22,
    flex: 1,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  borderFix: {
    width: 5,
    height: 5,
    backgroundColor: '#fff',
    flex: 1,
  },
  before: {
    borderLeftWidth: 1,
  },
  after: {
    borderRightWidth: 1,
  }
})

export default Login
