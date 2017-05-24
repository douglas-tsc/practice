export const ADD_TODO = 'ADD_TODO'

export default (state = [{title: 'hello'}, {title: 'bye'}], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    default:
      return state
  }
}
