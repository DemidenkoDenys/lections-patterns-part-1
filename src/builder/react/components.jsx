const handleEnterPress = (event, onAdd) => (event.charCode === 13) ? onAdd(event.target.value) : () => {};
const TodoAddFormComponent = ({ onAdd }) =>
  <li>
    <input
      type="text"
      placeholder="Type name of todo item and press Enter"
      onKeyPress={event => handleEnterPress(event, onAdd)}
    />
  </li>;


const TodoItemComponent = ({ todo, onDone, onRemove }) => {
  return (
    <li className={todo.done ? 'done' : ''} >
      <strong onClick={() => onDone(todo.id)} >{ todo.text }</strong>
      <a onClick={() => onRemove(todo.id)} >&#128465;</a>
    </li>
  );
};


const TodoListComponent = ({ todos, addTodo, doneTodo, removeTodo }) =>
  <ul>
    { todos.map(item => <TodoItemComponent key={item.id} todo={item} onDone={doneTodo} onRemove={removeTodo} />) }
    <TodoAddFormComponent onAdd={addTodo} />
  </ul>;


TodoListComponent.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  doneTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  todos: state.todos
});


const actions = {
  addTodoAction: text => ({ type: 'TODO_ADD', text, completed: false }),
  removeTodoAction: id => ({ type: 'TODO_REMOVE', id }),
  changeDoneAction: id => ({ type: 'TODO_DONE', id }),
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(actions.addTodoAction(text)),
  doneTodo: id => dispatch(actions.changeDoneAction(id)),
  removeTodo: id => dispatch(actions.removeTodoAction(id)),
});

const TodoList = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
