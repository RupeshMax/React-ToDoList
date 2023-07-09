import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  function newItem(event) {
    setItem(event.target.value);
  }

  return (
    <div>
      <input onChange={newItem} type="text" value={item} />
      <button
        onClick={() => {
          props.onAdd(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
