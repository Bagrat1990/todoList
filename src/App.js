import React, { useState } from "react";
import { v4 } from "uuid";
import "./App.css";

import Todoform from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isHide, setIsHide] = useState(false);
  function onAdd(text) {
    if (text !== "" && text.length <= 54) {
      setTodos([
        ...todos,
        {
          id: v4(),
          text: text,
          isCompleted: false,
        },
      ]);
    }
  }

  console.log(todos);
  function onDelete(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  function onChange(checkedTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === checkedTodo.id) {
          return checkedTodo;
        }
        return todo;
      })
    );
  }

  function handleChange() {
    setIsHide(!isHide);
    console.log(isHide);
  }

  return (
    <div className="###">
      <div className="hideBox">
        <input type="checkbox" onChange={handleChange}></input>
        <p>Hide input</p>
      </div>
      <Todoform todos={todos} onAdd={onAdd} />
      <TodoList
        todos={todos}
        onDelete={onDelete}
        onChange={onChange}
        isHide={isHide}
      />
    </div>
  );
}

export default App;
