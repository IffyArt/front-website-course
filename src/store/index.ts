// src/store/index.ts

import rootReducer from '@/redux';
import { configureStore } from '@reduxjs/toolkit';

// 配置 store
export const store = configureStore({ reducer: rootReducer });

// 推斷根狀態類型
export type RootState = ReturnType<typeof store.getState>;

// 推斷 dispatch 類型
export type AppDispatch = typeof store.dispatch;
