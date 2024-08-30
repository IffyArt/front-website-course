// src/actions/todo-list.js

export const addTodo = (payload) => ({
  type: 'ADD_TODO',
  payload,
});

export const modifyTodo = (payload) => ({
  type: 'MODIFY_TODO',
  payload,
});

export const modifyTodoCompleted = (payload) => ({
  type: 'MODIFY_TODO_COMPLETED',
  payload,
});

export const deleteTodo = (payload) => ({
  type: 'DELETE_TODO',
  payload,
});
