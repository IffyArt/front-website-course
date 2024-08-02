import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {
      _id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
      isCompleted: false,
    },
    {
      _id: 2,
      title: 'Todo 2',
      description: 'Todo 2 description',
      isCompleted: false,
    },
  ]);

  const removeTodo = (todoId) => {
    const newTodoList = todoList.filter((todo) => todo._id !== todoId);
    setTodoList(newTodoList);
  };

  return (
    <article>
      <h1>TodoList</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo._id}>
            <TodoItem todo={todo} removeTodo={removeTodo} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default TodoList;
