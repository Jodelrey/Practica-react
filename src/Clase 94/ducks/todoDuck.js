//Constants

const TODO_ACTIONS = {
  ADD: "ADD_TODO",
  DELETE: "DELETE_TODO",
};

//Actions creators

const addTodoAction = (todo) => ({
  type: TODO_ACTIONS.ADD,
  payload: { message: todo },
});
const deleteTodoAction = (id) => ({
  type: TODO_ACTIONS.DELETE,
  payload: { id },
});

//reducer
const reducer = (todos, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD:
      return [
        ...todos,
        {
          id: shortId.generate(),
          message: action.payload.message,
          completed: false,
        },
      ];
    case TODO_ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error();
  }
};

export { reducer, TODO_ACTIONS, addTodoAction, deleteTodoAction };
