import {addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './todoHelpers';

test('add todo to list', () => {
  // range
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const newTodos = {id: 3, name: 'three', isComplete: false};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  // act
  const result = addTodo(startTodos, newTodos);

  // assert
  expect(result).toEqual(expected);
});

test('add todo should not mutate existing todo array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ];
  const newTodos = {id: 3, name: 'three', isComplete: false};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const result = addTodo(startTodos, newTodos);
  expect(result).not.toBe(expected);
});

test('findById should return the expected item', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const expected =
    {id: 2, name: 'two', isComplete: false};
  const result = findById(2, startTodos);
  expect(result).toEqual(expected);
});

test('toggleTodo should toggle isComplete property of a todo', () => {
  const startTodo =
    {id: 2, name: 'two', isComplete: false};
  const expected =
    {id: 2, name: 'two', isComplete: true};
  const result = toggleTodo(startTodo);
  expect(result).toEqual(expected);
});

test('toggleTodo should not mutate the original todo', () => {
  const startTodo =
    {id: 2, name: 'two', isComplete: false};
  const result = toggleTodo(startTodo);
  expect(result).not.toBe(startTodo);
});

test('updateTodo should update an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const updatedTodo = {id: 2, name: 'two', isComplete: true};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];
  const result = updateTodo(startTodos, updatedTodo);
  expect(result).toEqual(expected);
});

test('updateTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];
  const updatedTodo = {id: 2, name: 'three', isComplete: true};
  const result = updateTodo(startTodos, updatedTodo);
  expect(result).not.toBe(startTodos);
});

test('removeTodo should remove an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isCoimplete: false},
    {id: 2, name: 'two', isCoimplete: false},
    {id: 3, name: 'three', isCoimplete: false}
  ];
  const targetId = 2;
  const expectedTodos = [
    {id: 1, name: 'one', isCoimplete: false},
    {id: 3, name: 'three', isCoimplete: false}
  ];

  const result = removeTodo(startTodos, targetId);
  expect(result).toEqual(expectedTodos);
});

test('removeTodos should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isCoimplete: false},
    {id: 2, name: 'two', isCoimplete: false},
    {id: 3, name: 'three', isCoimplete: false}
  ];
  const targetId = 2;
  const result = removeTodo(startTodos, targetId);
  expect(result).not.toBe(startTodos);
});

test('filterTodos should return all items for the root route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  const result = filterTodos(startTodos, '/');
  expect(result).toEqual(startTodos);
});

test('filterTodos should return only completed todos for the complete route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];

  const expected = [
    {id: 2, name: 'two', isComplete: true}
  ];

  const result = filterTodos(startTodos, '/complete');
  expect(result).toEqual(expected);
});

test('filterTodos should return only incompleted todos for the active route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];

  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  const result = filterTodos(startTodos, '/active');
  expect(result).toEqual(expected);
});
