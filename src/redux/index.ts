// src/redux/index.ts

import { combineReducers } from 'redux';
import counterReducer from './slice/counter';

// 組合所有的 reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
