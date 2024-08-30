// src/components/TodoList.tsx

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/reducers';
import {
  addTodo,
  deleteTodo,
  modifyTodo,
  modifyTodoCompleted,
  Todo,
} from '../actions/todo-list';

const TodoList = () => {
  const dispatch = useDispatch();

  const { todoList } = useSelector((state: RootState) => state.todoList);

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  function addTodoAction() {
    if (!currentTitle.trim()) {
      setCurrentTitle('');
      return;
    }

    const todo = {
      id: Date.now(),
      title: currentTitle,
      completed: false,
    };

    dispatch(addTodo(todo));
    setCurrentTitle('');
  }

  function modifyTodoAction() {
    if (!currentTodo) return;

    dispatch(modifyTodo(currentTodo));
    setCurrentTodo(null);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <section>
        <h2>新增項目</h2>
        <input
          type='text'
          value={currentTitle}
          onChange={(event) => setCurrentTitle(event.target.value)}
        />
        <button onClick={() => addTodoAction()}>新增項目</button>
      </section>

      {currentTodo && (
        <section>
          <h2>修改項目</h2>
          <input
            type='text'
            value={currentTodo?.title}
            onChange={(event) =>
              setCurrentTodo({ ...currentTodo, title: event.target.value })
            }
          />
          <button onClick={() => modifyTodoAction()}>修改項目</button>
        </section>
      )}

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(modifyTodoCompleted(todo.id))}
            />
            <span>{todo.title}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              刪除項目
            </button>
            <button onClick={() => setCurrentTodo(todo)}>修改項目</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
