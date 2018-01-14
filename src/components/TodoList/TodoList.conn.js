import { connect } from 'react-redux'

import TodoList from './TodoList'
import { toggleTodo, VisibilityFilters } from '../../actions'

const mapStateToProps = ({visibilityFilter, todos}) => {
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return { todos: todos.filter(todo => !todo.completed) }
    case VisibilityFilters.SHOW_COMPLETED:
      return { todos: todos.filter(todo => todo.completed) }
    case VisibilityFilters.SHOW_ALL:
    default:
      return { todos }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoPress: id => dispatch(toggleTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
