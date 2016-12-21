module.exports = {
  setToDos(todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getToDos() {
    let stringToDos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringToDos);
    } catch (e) {}

    return Array.isArray(todos) ? todos : [];
  },
  filterToDos(todos, showCompleted, searchText) {
    let filteredToDos = todos;
    // filter by showCompleted
    // filter by search text
    // organise done tasks last
    return filteredToDos;
  }

};
