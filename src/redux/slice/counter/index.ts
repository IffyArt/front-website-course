// src/redux/slice/counter/index.ts

import { ReducerName } from '@/redux/enums/reducer-name';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: ReducerName.COUNTER, // 定義這個 slice 的名稱
  initialState, // 定義初始狀態
  reducers: {
    // 定義 reducers
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// 產生 action creators 和 reducer
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
