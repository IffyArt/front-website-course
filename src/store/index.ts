// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// 示例 reducer
const counterReducer = (state = { count: 0 }, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 組合所有的 reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// 配置 store
export const store = configureStore({
  reducer: rootReducer,
});

// 推斷根狀態類型
export type RootState = ReturnType<typeof store.getState>;
// 推斷 dispatch 類型
export type AppDispatch = typeof store.dispatch;
