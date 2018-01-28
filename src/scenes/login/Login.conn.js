import React from 'react'
import { connect } from 'react-redux'
import { submitLogin } from '@api/login'
import Login from './Login'

mapStateToProps = state => {
  return {
    isLoggedIn: state.loginApp.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  { submitLogin }
)(props => {
  return (
    <Login {...props} />
  )
})
