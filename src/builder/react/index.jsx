const store = Redux.createStore(todoReducer);

ReactDOM.render(
  <ReactRedux.Provider store={ store }>
    <TodoList />
  </ReactRedux.Provider>,
  document.getElementById('react-app-container'),
);
