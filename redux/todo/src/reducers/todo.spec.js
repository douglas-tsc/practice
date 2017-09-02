import reducer from './todo'

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' })
    expect(result).toBeDefined()
  })

  test('adds a todo', () => {
    const startState = {
      todos: [
        {
          id: 1,
          name: 'todo 1',
          isComplete: false
        }
      ]
    }
    const expectedState = {
      todos: [
        {
          id: 1,
          name: 'todo 1',
          isComplete: false
        },
        {
          id: 2,
          name: 'todo 2',
          isComplete: false
        }
      ]
    }
    const action = {
      type: 'TODO_ADD',
      payload: {
        id: 2,
        name: 'todo 2',
        isComplete: false
      }
    }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})
