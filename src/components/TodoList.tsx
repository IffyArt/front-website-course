// src/components/TodoList.tsx

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { fetchTodo } from '@/redux/slice/todo-list/actions';
import { useEffect } from 'react';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { todoList, status, error } = useAppSelector((state) => state.todoList);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodo());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      TodoList
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
