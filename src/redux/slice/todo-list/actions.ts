// src/redux/slice/counter/actions.ts

import { ReducerName } from '@/redux/enums/reducer-name';
import { createAsyncThunk } from '@reduxjs/toolkit';

export enum TodoListAction {
  FETCH_TODO = 'fetchTodo',
}

// 定義一個異步的 thunk action
export const fetchTodo = createAsyncThunk(
  `${ReducerName.TODO_LIST}/${TodoListAction.FETCH_TODO}`,
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    return response.json();
  },
);
