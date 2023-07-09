import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [item, setItem] = useState("");
  const [listItems, updateListItems] = useState([]);

  function newItem(event) {
    setItem(event.target.value);
  }

  function addItem() {
    updateListItems((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={newItem} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((todoItem) => (
            <TodoList text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
