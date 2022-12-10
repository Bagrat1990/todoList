import "../css/todoList.css";

function TodoList({ todos, onDelete, onChange, isHide }) {
  let filteredTodos;
  if (isHide === true) {
    filteredTodos = todos.filter((todo) => todo.isCompleted === false);
  } else filteredTodos = todos;

  return filteredTodos.map((todo) => {
    return (
      <div className="todo" key={todo.id}>
        <input
          className="todoCheckbox"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => {
            onChange({
              ...todo,
              isCompleted: e.target.checked,
            });
          }}
        />
        <div className="todoText">{todo.text}</div>
        <button
          className="todoButton"
          onClick={() => {
            onDelete(todo);
          }}
        >
          x
        </button>
      </div>
    );
  });
}
export default TodoList;
