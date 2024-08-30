// src/reducers/todo-list.js
const initialState = {
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

export default function todoList(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todoList: [...state.todoList, action.payload] };
    case 'MODIFY_TODO':
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo,
        ),
      };
    case 'MODIFY_TODO_COMPLETED':
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case 'DELETE_TODO':
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
