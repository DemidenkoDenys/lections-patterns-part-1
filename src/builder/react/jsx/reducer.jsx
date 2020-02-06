const TODO_LIST_ITEMS = [
  { id: 0, done: true, text: 'Tell about Singleton Pattern' },
  { id: 1, done: true, text: 'Tell about Decorator Pattern' },
  { id: 2, done: true, text: 'Tell about Facade Pattern' },
  { id: 3, done: true, text: 'Tell about Factory Pattern' },
  { id: 4, done: false, text: 'Tell about Builder Pattern' },
];
const INIT_STATE = { todos: TODO_LIST_ITEMS };


const todoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case 'TODO_ADD':
      const id = Math.max.apply(Math, state.todos.map(o => o.id)) + 1;
      const { text, done } = action;
      return {
        todos: [...state.todos, { id, text, done }]
      };

    case 'TODO_REMOVE':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      }

    case 'TODO_DONE':
      return {
        todos: state.todos.map(todo => ({
          ...todo,
          done: (todo.id === action.id)
            ? !todo.done
            : todo.done
          }))
      }    

    default:
      return state;
  }
}