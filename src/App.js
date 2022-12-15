import React, { useState } from "react";
import { v4 } from "uuid";
import "./App.css";
import AlertDialog from "./components/AlertDialog";
import Todoform from "./components/TodoForm";
import TodoList from "./components/TodoList";
let deleteTodo
function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("is-open")) || []
  );
  const [isHide, setIsHide] = useState(false);
  const [open, setOpen] = useState(false);

  localStorage.setItem("is-open", JSON.stringify([...todos]));
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
  console.log(deleteTodo)
  function onDelete(todo) {
    deleteTodo = todo
    
      setOpen(true);
   
  
   
  }
  const err = <div>asdf</div>

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
  }

  function deleteItem (todoo){
    setTodos(todos.filter((item) => item.id !== todoo.id));
    setOpen(false)
   
   
    
  }

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <section className="main">
      <div className="hideBox">
        <input type="checkbox" checked={isHide} onChange={handleChange}></input>
        <p>Hide input</p>
      </div>
      <span className="spanText">Task</span>
      <AlertDialog onYes={()=>deleteItem(deleteTodo)} onClose = {handleClose} open = {open}  />
      <Todoform todos={todos} onAdd={onAdd} />
      <TodoList
        todos={todos}
        onDelete={onDelete}
        onChange={onChange}
        isHide={isHide}
      />
      {err}
    </section>
  );
}

export default App;
