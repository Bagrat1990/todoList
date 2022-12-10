import { useState } from "react";
import "../css/TodoForm.css";

function Todoform({ onAdd }) {
  const [text, setText] = useState("");
  function addTodo(e) {
    setText(e.target.value);
  }
  return (
    <div className="inputForm">
      <form
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
            placeholder="Write here"
            type="text"
            value={text}
            onChange={addTodo}
          />
        </div>
        <div>
          <button className="addButton">Add</button>
        </div>
      </form>
    </div>
  );
}
export default Todoform;
