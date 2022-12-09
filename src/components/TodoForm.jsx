import { useState } from "react";
import "../css/TodoForm.css";

function Todoform({ onAdd }) {
  const [text, setText] = useState("");
  function addTodo(e) {
    setText(e.target.value);
  }
  return (
    <form
      className="inputForm"
      //style={{ textAlign: "center", marginTop: "50px" }}
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      {" "}
      <div>
        <input
          className="textInput"
          type="text"
          value={text}
          onChange={addTodo}
        />
      </div>
      <div>
        <button className="addButton">Add</button>
      </div>
    </form>
  );
}
export default Todoform;
