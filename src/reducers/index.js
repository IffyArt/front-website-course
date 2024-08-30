// src/reducers/index.js
import { combineReducers } from 'redux';
import counter from './counter';
import todoList from './todo-list';

export default combineReducers({
  counter,
  todoList,
});
