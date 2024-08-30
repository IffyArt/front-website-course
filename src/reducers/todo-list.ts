// src/reducers/todo-list.ts

import { Todo } from 'src/actions/todo-list';
import { TodoActionTypes } from 'src/enum/todo-actions';

interface TodoListState {
  todoList: Todo[];
}

interface CounterAction {
  type: TodoActionTypes;
  payload?: any;
}

const initialState: TodoListState = {
  todoList: [
    {
      id: 1,
      title: 'Learn Redux',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn React',
      completed: true,
    },
  ],
};

export default function todoList(state = initialState, action: CounterAction) {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return { todoList: [...state.todoList, action.payload] };
    case TodoActionTypes.MODIFY_TODO:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo,
        ),
      };
    case TodoActionTypes.MODIFY_TODO_COMPLETED:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case TodoActionTypes.DELETE_TODO:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
