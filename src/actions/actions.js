import * as types from './types'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  }
}

export function toggleTodo(index) {
  return {
    type: types.TOGGLE_TODO,
    index
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}
