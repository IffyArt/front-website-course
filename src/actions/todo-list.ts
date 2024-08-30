// src/actions/todo-list.ts

import { TodoActionTypes } from 'src/enum/todo-actions';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const addTodo = (payload: Todo) => ({
  type: TodoActionTypes.ADD_TODO,
  payload,
});

export const modifyTodo = (payload: Todo) => ({
  type: TodoActionTypes.MODIFY_TODO,
  payload,
});

export const modifyTodoCompleted = (payload: number) => ({
  type: TodoActionTypes.MODIFY_TODO_COMPLETED,
  payload,
});

export const deleteTodo = (payload: number) => ({
  type: TodoActionTypes.DELETE_TODO,
  payload,
});
