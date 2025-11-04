import TodoItem from "./TodoItem";

function TodoList({ items, onToggle, onRemove }) {
  if (items.length === 0) {
    return <div className="empty">Задач пока нет</div>;
  }

  return (
    <ul className="list">
      {items.map((todo) => (
        <TodoItem
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}
          key={todo.id}
          item={todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
