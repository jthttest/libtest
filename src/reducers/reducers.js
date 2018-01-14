import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions'
import { combineReducers } from 'redux'

function todos(todos = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...todos, {
        text: action.text,
        completed: false,
        id: todos.length
      }]
    case TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.index) todo.completed = !todo.completed
        return todo
      })
    default:
      return todos
  }
}

function visibilityFilter(filter=VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return filter
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
