function TodoList({ todos, onDelete, onChange,isHide }) {
  return (
    <div style={{ textAlign: "center" }}>
      {todos.filter(todo=>todo.isCompleted === isHide).map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={(e) => {
                onChange({
                  ...todo,
                  isCompleted: e.target.checked,
                });
              }}
            />
            {todo.text}
            <button
              onClick={() => {
                onDelete(todo);
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default TodoList;
