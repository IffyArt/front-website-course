// src/redux/index.ts

import { combineReducers } from 'redux';
import counterReducer from './slice/counter';
import todoListReducer from './slice/todo-list';

// 組合所有的 reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
