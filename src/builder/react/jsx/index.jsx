const store = Redux.createStore(todoReducer);

ReactDOM.render(
  <ReactRedux.Provider store={ store }>
    <TodoApp />
  </ReactRedux.Provider>,
  document.getElementById('react-app-container'),
);
