import { database } from '../firebase'

const initState = {
  todos: [],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
const CLEAR_TODO = 'CLEAR_TODO'
const TODOS_LOAD = 'TODOS_LOAD'

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val })
export const loadTodos = todos => ({ type: TODOS_LOAD, payload: todos })
export const clearTodo = () => ({ type: CLEAR_TODO })

export const fetchTodos = () => {
  return dispatch =>
    database
      .ref(`/todos`)
      .on('value', snap => dispatch(loadTodos(Object.values(snap.val()))))
}

export const saveTodo = name => {
  const newTodoKey = database.ref(`/todos`).push().key
  const newTodo = { id: newTodoKey, name: name, isComplete: false }
  return dispatch =>
    database
      .ref(`/todos/${newTodoKey}`)
      .update(newTodo)
      .then(dispatch(clearTodo()))
}

export default (state = initState, action) => {
  switch (action.type) {
    case CLEAR_TODO:
      return {
        ...state,
        currentTodo: ''
        // todos: state.todos.concat(action.payload)
      }
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload }
    case TODOS_LOAD:
      return { ...state, todos: action.payload }
    default:
      return state
  }
}
