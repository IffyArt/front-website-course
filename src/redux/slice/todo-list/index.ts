// src/redux/slice/counter/index.ts

import { ReducerName } from '@/redux/enums/reducer-name';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodo } from './actions';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoListState = {
  todoList: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: TodoListState = {
  todoList: [],
  status: 'idle',
  error: null,
};

const counterSlice = createSlice({
  name: ReducerName.TODO_LIST, // 定義這個 slice 的名稱
  initialState, // 定義初始狀態
  reducers: {},
  extraReducers: (builder) => {
    // 定義異步 action 的 reducer
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todoList = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

// 產生 action creators 和 reducer
export default counterSlice.reducer;
