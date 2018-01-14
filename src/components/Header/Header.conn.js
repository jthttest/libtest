import { connect } from 'react-redux'

import Header from './Header'
import { addTodo } from '../../actions'

const mapDispatchToProps = dispatch => {
  return {
    onPress: text => dispatch(addTodo(text))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Header)
