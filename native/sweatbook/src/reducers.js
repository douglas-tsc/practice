import { combineReducer } from 'redux'

const ui = (state = { exerciseModal: false }, { type, payload }) => {
  switch (type) {
    case types.SET_EXERCISE_VISIBILITY:
      return [...state, (exerciseModal: payload)]
    default:
      return state
  }
}

const user = (state = [], action) => {
  return state
}

export default combineReducer({ todos, user })
