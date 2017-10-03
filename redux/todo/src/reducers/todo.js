import { database } from '../firebase';
import { showMessage } from './messages';

const initState = {
  todos: [],
  currentTodo: ''
};

const CURRENT_UPDATE = 'CURRENT_UPDATE';
export const CLEAR_TODO = 'CLEAR_TODO';
export const TODOS_LOAD = 'TODOS_LOAD';

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });
export const loadTodos = todos => ({ type: TODOS_LOAD, payload: todos });
export const clearTodo = () => ({ type: CLEAR_TODO });

export const fetchTodos = () => {
  return dispatch => {
    dispatch(showMessage('Loading Todos...'));
    database
      .ref('/todos')
      .on('value', snap => dispatch(loadTodos(Object.values(snap.val()))));
  };
};

export const saveTodo = name => {
  const newTodoKey = database.ref('/todos').push().key;
  const newTodo = { id: newTodoKey, name, isComplete: false };
  return dispatch => {
    dispatch(showMessage('Saving Todo...'));
    database
      .ref(`/todos/${newTodoKey}`)
      .update(newTodo)
      .then(dispatch(clearTodo()));
  };
};

export const toggleTodo = id => {
  return (dispatch, getState) => {
    dispatch(showMessage('Saving Todo...'));
    const { todos } = getState().todo;
    const todo = todos.find(t => t.id === id);
    const toggled = { ...todo, isComplete: !todo.isComplete };
    database.ref(`/todos/${toggled.id}`).update(toggled);
  };
};

export const destroyTodo = id => {
  return dispatch => {
    dispatch(showMessage('Removing Todo...'));
    database.ref(`/todos/${id}`).remove();
  };
};

export default (state = initState, action) => {
  switch (action.type) {
    case CLEAR_TODO:
      return {
        ...state,
        currentTodo: ''
      };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODOS_LOAD:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
