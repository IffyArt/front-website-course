const TodoItem = (props) => {
  const { todo, removeTodo } = props;
  return (
    <article>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button onClick={() => removeTodo(todo._id)}>Remove</button>
    </article>
  );
};

export default TodoItem;
