import { CLEAR_TODO, TODOS_LOAD } from './todo';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = msg => ({ type: MESSAGE_SHOW, payload: msg });

export default (state = '', action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case CLEAR_TODO:
    case TODOS_LOAD:
      return '';
    default:
      return state;
  }
};
