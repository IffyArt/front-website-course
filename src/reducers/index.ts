// src/reducers/index.ts

import { combineReducers } from 'redux';
import counter from './counter';
import todoList from './todo-list';

const rootReducer = combineReducers({
  counter,
  todoList,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
