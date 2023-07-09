import React, { useState } from "react";
import TodoList from "./TodoList";
import InputArea from "./InputArea";

function App() {
  const [listItems, updateListItems] = useState([]);

  function addItem(item) {
    updateListItems((prevItems) => {
      return [...prevItems, item];
    });
  }

  function deleteItem(id) {
    updateListItems((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea onAdd={addItem} />
      </div>
      <div>
        <ul>
          {listItems.map((todoItem, index) => (
            <TodoList
              key={index}
              text={todoItem}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
